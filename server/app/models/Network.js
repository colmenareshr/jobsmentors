'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Network extends Model {
    
    static associate(models) {
      Network.belongsTo(models.Freelancer,{
        foreignKey:'freelancer_id'
      })
    }
  }
  Network.init({
    freelancer_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
         model: 'Freelancer',
          key: 'id' 
        },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    github: {
      allowNull: false,
      type: DataTypes.STRING
    },
    linkedin: {
      allowNull: false,
      type: DataTypes.STRING
    },
    portfolio: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Network',
    freezeTableName: true
  });
  return Network;
};