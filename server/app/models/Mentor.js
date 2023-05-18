'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    
    static associate(models) {
      Mentor.belongsTo(models.User,{
        foreignKey:'user_id'
      })

    }
  }
  Mentor.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull:false,
      type: DataTypes.INTEGER,
      references: {
         model: 'User',
          key: 'id',
          role: 'mentor'
        },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    birth: {
      type: DataTypes.DATE
    },
    email: {
      allowNull:false,
      unique: true,
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Mentor',
    freezeTableName: true
  });
  return Mentor;
};