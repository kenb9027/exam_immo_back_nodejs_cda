const TagProperty = require("../models").TagProperty;

const { Op } = require("sequelize");

exports.property_list_by_tag = (req, res, next) => {
    TagProperty.findAll({
        where: {
            TagId: req.params.id,
        },
    })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => console.log(err));
};

exports.tag_list_by_property = (req, res, next) => {
    TagProperty.findAll({
        where: {
            PropertyId: req.params.id,
        },
    })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => console.log(err));
};
