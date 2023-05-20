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
    name: {
      type: DataTypes.STRING(128),
      validate: {
        len: [2, 24]
      }
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        isUnique: (value, next) => {
          Mentor.findAll({
            where: { email: value },
            attributes: ['id'],
          })
            .then((user) => {
              if (user.length != 0)
                next(new Error('Email address already in use!'));
              next();
            })
            .catch((onError) => console.log(onError));
        },
        isEmail:{
          msg:"checks for email format (email@example.com)"
        },
      },
    },
    phone: {
      type: DataTypes.STRING(128),
      validate: {
        len: [2, 24]
      }
    },
    birth: {
      type: DataTypes.DATE,
      validate:{
        isDate: true
      }
    },
    gender: {
      type: DataTypes.STRING(128)
    },
    address: {
      type: DataTypes.STRING(128)
    },
    about: {
      type: DataTypes.STRING(128)
    },
    img: {
      type: DataTypes.STRING(128),
      validate:{
        isUrl: true
      }
    },
    career: {
      type: DataTypes.ENUM,
      values: ['Front-end', 'Back-end', 'QA', 'Full-Stack', 'DBA', 'DevOps', 'PM', 'Tech Lead', 'UX Desing']
    }
  }, {
    sequelize,
    paranoid:true,
    modelName: 'Mentor',
    freezeTableName: true
  });
  return Mentor;
};