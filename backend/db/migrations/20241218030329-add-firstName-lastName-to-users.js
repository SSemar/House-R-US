'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    console.log('FIRST NAME ADDED COL');
    await queryInterface.addColumn('Users', 'firstName', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    console.log('NAMES ADDED');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'firstName');
    await queryInterface.removeColumn('Users', 'lastName');
  },
};