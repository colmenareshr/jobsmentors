'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Freelancer extends Model {
    static associate(models) {
      Freelancer.hasOne(models.Information, {
        foreignKey: 'freelancer_id',
      });
      Freelancer.hasOne(models.Network, {
        foreignKey: 'freelancer_id',
      });
      Freelancer.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      Freelancer.hasMany(models.JobsFreelancer, {
        foreignKey: 'freelancer_id',
      });
    }
  }
  Freelancer.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          role: 'freelancer',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: DataTypes.STRING(128),
        validate: {
          len: [2, 24],
        },
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          isUnique: (value, next) => {
            Freelancer.findAll({
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
      phone: {
        type: DataTypes.STRING(128),
        validate: {
          len: [2, 24],
        },
      },
      birth: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
        },
      },
      gender: {
        type: DataTypes.STRING(128),
      },
      address: {
        type: DataTypes.STRING(128),
      },
      bio: {
        type: DataTypes.STRING(128),
      },
      about: {
        type: DataTypes.STRING(200),
      },
      img: {
        type: DataTypes.STRING(128),
        validate: {
          isUrl: true,
        },
      },
      career: {
        type: DataTypes.ENUM,
        values: [
          'Front-end',
          'Back-end',
          'QA',
          'Full-Stack',
          'DBA',
          'DevOps',
          'PM',
          'Tech Lead',
          'UX Desing',
        ],
      },
      hard_skills: {
        type: DataTypes.STRING(128),
      },
      contract: {
        type: DataTypes.ENUM('CLT', 'PJ'),
      },
      open_to_work: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'Freelancer',
      freezeTableName: true,
    }
  );
  return Freelancer;
};
