const Agent = require("../models").Agent;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.agent_add = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            // throw err
            res.status(500).json({ message: "Error.:..:." });
        } else {
            let agent = req.body;
            agent.password = hash;
            Agent.create(agent)
                .then((data) => {
                    res.status(201).json({
                        message: "Agent created",
                        data: data,
                    });
                })
                .catch((error) => res.status(400).json(error));
        }
    });
};

exports.agent_login = (req, res, next) => {
    Agent.findOne({
        where: {
            email: req.body.email,
        },
    })
        .then((agent) => {
            if (agent) {
                bcrypt.compare(
                    req.body.password,
                    agent.password,
                    (err, result) => {
                        if (err) {
                            res.status(500).end();
                        } else if (result) {
                            const token = jwt.sign(
                                {
                                    name: agent.name,
                                    email: agent.email,
                                    isAdmin: agent.isAdmin,
                                },
                                process.env.SECRET,
                                { expiresIn: "2h" }
                            );
                            res.status(200).json({
                                token: token,
                                name: agent.name,
                                email: agent.email,
                            });
                        } else {
                            res.status(404).json({
                                message: "Mauvais identifiants",
                            });
                        }
                    }
                );
            }
        })
        .catch((err) => res.status(500).json(err));
};

exports.agent_list = (req, res, next) => {
    Agent.findAll({
        attributes: ["id", "name", "email", "age", "tel", "isAdmin"],
    })
        .then((agents) => {
            res.status(200).json(agents);
        })
        .catch((err) => res.status(500).json(err));
};
