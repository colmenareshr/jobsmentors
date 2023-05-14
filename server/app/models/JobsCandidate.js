'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JobsCandidate extends Model {
    
    static associate(models) {
     
    }
    
  }
  JobsCandidate.init({
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
    modelName: 'JobsCandidate',
    freezeTableName: true
  });
  return JobsCandidate;
};