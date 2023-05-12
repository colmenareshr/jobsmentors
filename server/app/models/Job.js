'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    
    static associate(models) {
      
    }
  }
  Jobs.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    company_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
         model: 'Company',
          key: 'id'
        },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    contract: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Jobs',
    freezeTableName: true
  });
  return Jobs;
};