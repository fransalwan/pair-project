"use strict";
const fs = require("fs");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(8);
const data = JSON.parse(fs.readFileSync('./data/users.json'
  , "utf-8"));


const a = data.map(
  (el) => {
    delete el.id;
    el.password = bcrypt.hashSync(el.password, salt);
    el.createdAt = new Date();
    el.updatedAt = new Date();
    return el;
  }
);

// user.password = hash;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {

    console.log(a);
    return queryInterface.bulkInsert("Users", a, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down(queryInterface, Sequelize) {
    return queryInterface.Delete("Users");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};