'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Network extends Model {
    
    static associate(models) {
      Network.belongsTo(models.Candidate,{
        foreignKey:'candidate_id'
      })
    }
  }
  Network.init({
    candidate_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
         model: 'Candidate',
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