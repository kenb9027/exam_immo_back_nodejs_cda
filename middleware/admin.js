const jwt = require("jsonwebtoken");

module.exports = () => {
    return (req, res, next) => {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            try {
                const jjj = jwt.verify(token, process.env.SECRET);
                // console.log(jjj);
                if (jjj && jjj.isAdmin === true) {
                    next();
                }
                else {
                    res.status(401).json({ message: `Reservé aux administrateurs` });
                }
            } catch (error) {
                // mauvais token
                console.log(error);
                res.status(401).json({ message: `Pas le droit d'être là 1` });
            }
        }
        else {
            res.status(401).json({ message: `Pas le droit d'être là 2` });
        }
    };
};