'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order, { foreignKey: 'UserId' })
      User.hasOne(models.Profile, { foreignKey: 'UserId' })
      User.hasMany(models.Products, { foreignKey: 'UserId' })

    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input your username"
        },
        notEmpty: {
          msg: "Please input your username"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input your username"
        },
        notEmpty: {
          msg: "Please input your username"
        },
        isEmail: {
          msg: "Format email tidak valid!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input your password"
        },
        notEmpty: {
          msg: "Please input your password"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please select your role"
        },
        notEmpty: {
          msg: "Please select your role"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};