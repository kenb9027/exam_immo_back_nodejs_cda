"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Agent extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Agent.hasMany(models.Property);
        }
    }
    Agent.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: DataTypes.INTEGER,
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tel: DataTypes.STRING,
            isAdmin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Agent",
        }
    );
    return Agent;
};
