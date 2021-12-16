const Property = require("../models").Property;
const Agent = require("../models").Agent;
const Type = require("../models").Type;
const { Op } = require("sequelize");

exports.list_property = (req, res, next) => {
    Property.findAll({
        attributes: [
            "id",
            "title",
            "price",
            "sector",
            "rooms",
            "description",
            "picture",
        ],
        include: [
            {
                model: Type,
                attributes: ["id", "name"],
            },
            {
                model: Agent,
                attributes: ["id", "name", "email"],
            },
        ],
        order: [
            ["price", "DESC"], //Tri ordre de prix decroissant
        ],
    })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => console.log(err));
};

exports.add_property = (req, res, next) => {
    let property = req.body;

    Type.findByPk(property.TypeId)
        .then((data) => {
            if (data) {
                Agent.findByPk(property.AgentId)
                    .then((databis) => {
                        if (databis) {
                            Property.create(property)
                                .then((newProperty) => {
                                    console.log(newProperty);
                                    console.log(property);
                                    //si tags
                                    if (
                                        property.tags &&
                                        property.tags.length > 0
                                    ) {
                                        console.log('if #1');
                                        newProperty
                                            .setTags(property.tags)
                                            .then(() => {
                                                //si avantage
                                                if (
                                                    property.avantages &&
                                                    property.avantages.length >
                                                        0
                                                ) {
                                                    newProperty
                                                        .setAvantages(
                                                            property.avantages
                                                        )
                                                        .then(() => {
                                                            res.status(
                                                                201
                                                            ).json({
                                                                message:
                                                                    "property created",
                                                                data: newProperty,
                                                            });
                                                        })
                                                        .catch((err) =>
                                                            res.status(500).json(err)
                                                        );
                                                } else {
                                                    // sinon
                                                    res.status(201).json({
                                                        message: "property created",
                                                        data: newProperty,
                                                    });
                                                }
                                            })
                                            .catch((err) => res.status(500).json(err));
                                    }
                                    //else if seulement avantages
                                    else if (
                                        
                                        property.avantages &&
                                        property.avantages.length > 0
                                        ) {
                                        newProperty
                                            .setAvantages(property.avantages)
                                            .then(() => {
                                                res.status(201).json({
                                                    message: "property created",
                                                    data: newProperty,
                                                });
                                            })
                                            .catch((err) => res.status(500).json(err));
                                    }

                                    // No tags ni avantages to add
                                    else {
                                        res.status(201).json({
                                            message: "property created",
                                            data: newProperty,
                                        });
                                    }
                                })
                                .catch((err) => res.status(500).json(err));
                            // })
                            // .catch( () => res.status(500).end)
                        } else {
                            res.status(404).json({
                                message: "Agent not available",
                            });
                        }
                    })
                    .catch((error) => res.status(500).json(error));
            } else {
                res.status(404).json({ message: "Type not available" });
            }
        })
        .catch((err) => res.status(500).json(err));
};
