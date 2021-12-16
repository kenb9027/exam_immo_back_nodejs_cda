'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avantage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Avantage.hasMany(models.AvantageProperty);
      Avantage.belongsToMany(models.Property, {
        through: models.AvantageProperty
      })
    }
  };
  Avantage.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
  }
  }, {
    sequelize,
    modelName: 'Avantage',
  });
  return Avantage;
};