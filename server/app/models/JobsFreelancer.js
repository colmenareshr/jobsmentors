'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JobsFreelancer extends Model {
    
    static associate(models) {
      JobsFreelancer.belongsTo(models.Jobs,{
        foreignKey:'job_id'
      })
      JobsFreelancer.belongsTo(models.Freelancer,{
        foreignKey:'freelancer_id'
      })
    }
    
  }
  JobsFreelancer.init({
    UUID: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      primaryKey: true
    },
    job_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
         model: 'Jobs',
         key: 'id' 
        },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    freelancer_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
         model: 'Freelancer',
         key: 'user_id' 
        },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'JobsFreelancer',
    freezeTableName: true
  });
  return JobsFreelancer;
};