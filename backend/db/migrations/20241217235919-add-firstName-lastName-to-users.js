'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Users';

    // Add firstName column
    await queryInterface.addColumn(options, 'firstName', {
      type: Sequelize.STRING(50),
      allowNull: false, // Set to true if firstName can be optional
    });

    // Add lastName column
    await queryInterface.addColumn(options, 'lastName', {
      type: Sequelize.STRING(50),
      allowNull: false, // Set to true if lastName can be optional
    });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';

    // Remove firstName column
    await queryInterface.removeColumn(options, 'firstName');

    // Remove lastName column
    await queryInterface.removeColumn(options, 'lastName');
  },
};