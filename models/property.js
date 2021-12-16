"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Property extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Property.belongsTo(models.Agent);
            Property.belongsTo(models.Type);

            Property.hasMany(models.TagProperty);
            Property.belongsToMany(models.Tag, {
                through: models.TagProperty,
            });

            Property.hasMany(models.AvantageProperty);
            Property.belongsToMany(models.Avantage, {
                through: models.AvantageProperty,
            });
        }
    }
    Property.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            sector: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            rooms: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            picture: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            AgentId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            TypeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Property",
        }
    );
    return Property;
};
