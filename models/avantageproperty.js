'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvantageProperty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      AvantageProperty.belongsTo(models.Avantage);
      AvantageProperty.belongsTo(models.Property);
    }
  };
  AvantageProperty.init({
  }, {
    sequelize,
    modelName: 'AvantageProperty',
  });
  return AvantageProperty;
};