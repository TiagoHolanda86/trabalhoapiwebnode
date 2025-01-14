'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projeto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Projeto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    meta: DataTypes.DOUBLE,
    data_limite: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Projeto',
    tableName: 'projeto'
  });
  return Projeto;
};