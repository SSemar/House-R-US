'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    static associate(models) {
      // Define associations here, e.g.:
      // Spot.belongsTo(models.User, { foreignKey: 'ownerId' });
    }
  }
  Spot.init(
    {
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT,
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Spot'
    }
  );
  return Spot;
};