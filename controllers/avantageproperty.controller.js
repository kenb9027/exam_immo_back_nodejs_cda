const AvantageProperty = require("../models").AvantageProperty;

const { Op } = require("sequelize");

exports.property_list_by_avantage = (req, res, next) => {
    AvantageProperty.findAll({
        where: {
            AvantageId: req.params.id,
        },
    })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => console.log(err));
};

exports.avantage_list_by_property = (req, res, next) => {
    AvantageProperty.findAll({
        where: {
            PropertyId: req.params.id,
        },
    })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => console.log(err));
};
