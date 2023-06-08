'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Order, { foreignKey: 'ProductId' })
      Product.belongsTo(models.User, { foreignKey: 'UserId' })

    }

  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please input your name"
        },
        notEmpty: {
          msg: "Please input your name"
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Image must be insert!"
        },
        notEmpty: {
          msg: "Image must be insert!"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description must be insert!"
        },
        notEmpty: {
          msg: "Description must be insert!"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Price minimal 1"
        },
        notEmpty: {
          msg: "Price minimal 1"
        },
        min: {
          args: 1,
          msg: "Price minimal 1"
        }
      }
    },
    UserId: DataTypes.INTEGER,


  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

