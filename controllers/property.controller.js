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
    })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(500).json({
                message: "Erreur 500",
                data: err,
            })
        );
};

exports.add_property = (req, res, next) => {
    let property = req.body;

    if (req.file) {
        property.picture = `public/upload/property/${req.file.filename}`;
    }

    Type.findByPk(property.TypeId)
        .then((data) => {
            if (data) {
                Agent.findByPk(property.AgentId)
                    .then((databis) => {
                        if (databis) {
                            Property.create(property)
                                .then((newProperty) => {
                                    //si tags
                                    if (property.tags) {
                                        newProperty
                                            .setTags(property.tags)
                                            .then(() => {
                                                //si avantage
                                                if (property.avantages) {
                                                    newProperty
                                                        .setAvantages(
                                                            property.avantages
                                                        )
                                                        .then(() => {
                                                            res.status(
                                                                201
                                                            ).json({
                                                                message:
                                                                    "property created with tags and avantages",
                                                                data: newProperty,
                                                            });
                                                        })
                                                        .catch((err) =>
                                                            res
                                                                .status(500)
                                                                .json({
                                                                    message:
                                                                        "Erreur 500 l.72",
                                                                    data: err,
                                                                })
                                                        );
                                                } else {
                                                    // sinon
                                                    res.status(201).json({
                                                        message:
                                                            "property created with only tags",
                                                        data: newProperty,
                                                    });
                                                }
                                            })
                                            .catch((err) =>
                                                res.status(500).json({
                                                    message: "Erreur 500 l.87",
                                                    data: err,
                                                })
                                            );
                                    }
                                    //else if seulement avantages
                                    else if (property.avantages) {
                                        newProperty
                                            .setAvantages(property.avantages)
                                            .then(() => {
                                                res.status(201).json({
                                                    message:
                                                        "property created with only avantages",
                                                    data: newProperty,
                                                });
                                            })
                                            .catch((err) =>
                                                res.status(500).json(err)
                                            );
                                    }

                                    // No tags ni avantages to add
                                    else {
                                        res.status(201).json({
                                            message:
                                                "property created with no tags and no avantages",
                                            data: newProperty,
                                        });
                                    }
                                })
                                .catch((err) => res.status(500).json(err));
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

exports.delete_property = (req, res, next) => {
    Property.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((data) => {
            if (data == 0) {
                res.status(200).json({ message: "No data to delete" });
            }
            res.status(204).end();
        })
        .catch((err) =>
            res.status(500).json({
                message: "Erreur 500",
                data: err,
            })
        );
};

exports.edit_property = (req, res, next) => {
    Property.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then(() => {
            res.status(200).json({
                message: "property edited",
            });
        })
        .catch((err) =>
            res.status(500).json({
                message: "Erreur 500",
                data: err,
            })
        );
};

exports.detail_property = (req, res, next) => {
    Property.findByPk({
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

    })
        .then((data) => {
            res.status(200).json({
                message: "property detail",
                data: data,
            });
        })
        .catch((err) =>
            res.status(500).json({
                message: "Erreur 500",
                data: err,
            })
        );
};

exports.list_type_property = (req, res, next) => {
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
                where: {
                    id: req.params.id,
                },
            },
        ],
    })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(404).json({
                message: "Not found",
                data: err,
            })
        );
};

exports.list_agent_property = (req, res, next) => {
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
                model: Agent,
                attributes: ["id", "name", "email"],
                where: {
                    id: req.params.id,
                },
            },
        ],
    })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(404).json({
                message: "Not found",
                data: err,
            })
        );
};

exports.search_property = (req, res, next) => {
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
        where: {
            title: {
                [Op.substring]: req.params.search,
            },
        },
    })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(404).json({
                message: "Not found",
                data: err,
            })
        );
};
