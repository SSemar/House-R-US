'use strict';

const { Spot } = require('../models');
const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    //console.log('CREATING USER TABLE...'); //! DEBUG
    await queryInterface.bulkCreate('Spots', [
      {
        ownerId: 1,
        address: '123 Disney Lane',
        city: 'San Francisco',
        state: 'California',
        country: 'United States of America',
        lat: 37.7645358,
        lng: -122.4730327,
        name: 'App Academy',
        description: 'Place where web developers are created',
        price: 123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
    //console.log('USER TABLE CREATED'); //! DEBUG
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Spots', null, {});
  }
};