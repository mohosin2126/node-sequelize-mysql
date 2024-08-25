'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todos.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    addressOne: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zip: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    transaction: DataTypes.STRING,
    callbackUrl: DataTypes.STRING,
    successUrl: DataTypes.STRING,
    failedUrl: DataTypes.STRING,
    status: DataTypes.STRING,
    hash: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Todos',
  });
  return Todos;
};
