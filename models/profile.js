'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, { foreignKey: 'UserId' })
    }
  }
  Profile.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input your fullName"
        },
        notEmpty: {
          msg: "Please input your fullName"
        }
      }
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input your address"
        },
        notEmpty: {
          msg: "Please input your address"
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input your address"
        },
        notEmpty: {
          msg: "Please input your address"
        },
        notStartingWithZero(value) {
          if (value.startsWith('0')) {
            throw new Error('Phone number cannot start with 0')
          }
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input your User"
        },
        notEmpty: {
          msg: "Please input your User"
        },

      }
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};


