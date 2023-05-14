'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      User.hasMany(models.Candidate, {
        foreignKey:'user_id'
      })
      User.hasMany(models.Company, {
        foreignKey:'user_id'
      })
      User.hasMany(models.Mentor, {
        foreignKey:'user_id'
      })
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    role: {
      allowNull: false,
      type:DataTypes.ENUM('candidate', 'company','mentor'),
    },
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true
  });
  return User;
};