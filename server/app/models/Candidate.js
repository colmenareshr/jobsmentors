'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    
    static associate(models) {
      Candidate.hasOne(models.Information, {
        foreignKey:'candidate_id'
      })
      Candidate.hasOne(models.Network, {
        foreignKey:'candidate_id'
      })
      Candidate.belongsTo(models.User,{
        foreignKey:'user_id'
      })
    }
  }
  Candidate.init({
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
          role: 'candidate'
        },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    birth: {
      type: DataTypes.DATE
    },
    gender: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    about: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    },
    career: {
      type: DataTypes.ENUM,
      values: ['Front-end', 'Back-end', 'QA', 'Full-Stack', 'DBA', 'DevOps', 'PM', 'Tech Lead', 'UX Desing']
    },
    hard_skills: {
      type: DataTypes.STRING
    },
    contract: {
      type: DataTypes.ENUM('CLT', 'PJ')
    },
    open_to_work: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {
    sequelize,
    modelName: 'Candidate',
    freezeTableName: true
  });
  return Candidate;
};