'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Freelancer, {
        foreignKey: 'user_id',
      });
      User.hasMany(models.Company, {
        foreignKey: 'user_id',
      });
      User.hasMany(models.Mentor, {
        foreignKey: 'user_id',
      });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          isUnique: (value, next) => {
            User.findAll({
              where: { email: value },
              attributes: ['id'],
            })
              .then((user) => {
                if (user.length != 0)
                  next(new Error('Email address already in use!'));
                next();
              })
              .catch((onError) => onError);
          },
          isEmail: {
            msg: 'checks for email format (email@example.com)',
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          len: [6, 100],
        },
      },
      role: {
        allowNull: false,
        type: DataTypes.ENUM('freelancer', 'company', 'mentor'),
        validate: {
          isIn: [['freelancer', 'company', 'mentor']],
        },
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'User',
      freezeTableName: true,
    }
  );
  return User;
};
