'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagProperty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      TagProperty.belongsTo(models.Tag);
      TagProperty.belongsTo(models.Property);

    }
  };
  TagProperty.init({

  }, {
    sequelize,
    modelName: 'TagProperty',
  });
  return TagProperty;
};