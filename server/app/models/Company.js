'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    
    static associate(models) {
      
    }
  }
  Company.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
         model: 'User',
          key: 'id',
          role: 'company'
        },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    name: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.STRING
    },
    site: {
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Company',
    freezeTableName: true
  });
  return Company;
};