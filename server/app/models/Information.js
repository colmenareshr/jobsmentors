'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Information extends Model {
   
    static associate(models) {
      Information.belongsTo(models.Candidate,{
        foreignKey:'candidate_id'
      })
    }
  }
  Information.init({
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
    education: {
      allowNull: false,
      type: DataTypes.STRING
    },
    languages: {
      allowNull: false,
      type: DataTypes.STRING
    },
    experience: {
      allowNull: false,
      type: DataTypes.STRING
    },
    course: {
      allowNull: false,
      type: DataTypes.STRING
    },
    soft_skills: {
      allowNull: false,
      type: DataTypes.STRING
    },
    disability: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    modelName: 'Information',
    freezeTableName: true
  });
  return Information;
};