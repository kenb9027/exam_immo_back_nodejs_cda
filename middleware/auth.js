const jwt = require("jsonwebtoken");

module.exports = () => {
    return (req, res, next) => {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            try {
                if (jwt.verify(token, process.env.SECRET)) {
                    next();
                }
            } catch (error) {
                // mauvais token
                console.log(error);
                res.status(401).json({ message: `Pas le droit d'être là 1` });
            }
        }
        //pas de headers -> pas d'authorization
        else {
            res.status(401).json({ message: `Pas le droit d'être là 2` });
        }
    };
};
