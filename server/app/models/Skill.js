'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    
    static associate(models) {
      
    }
  }
  Skill.init({
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
    career: {
      allowNull: false,
      type: DataTypes.STRING
    },
    hard_skills: {
      allowNull: false,
      type: DataTypes.STRING
    },
    soft_skills: {
      allowNull: false,
      type: DataTypes.STRING
    },
    main_tech: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Skill',
    freezeTableName: true
  });
  return Skill;
};