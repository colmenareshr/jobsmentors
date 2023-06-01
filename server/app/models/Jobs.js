'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    
    static associate(models) {
      Jobs.belongsTo(models.Company,{
        foreignKey:'company_id'
      })
      Jobs.hasMany(models.JobsFreelancer, {
        foreignKey:'job_id'
      })
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
         key: 'user_id' 
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
    hard_skills: {
      allowNull:false,
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.INTEGER,
      validate: {
        max: 10, 
        isInt: {
          msg: 'Quantity must be an integer.',
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Jobs',
    freezeTableName: true
  });
  return Jobs;
};