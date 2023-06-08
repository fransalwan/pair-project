"use strict";
const fs = require("fs");


// user.password = hash;
const data = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"))

const a = data.products.map(
  (el) => {
    delete el.id;
    el.createdAt = new Date();
    el.updatedAt = new Date();
    return el;
  }
);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {


    // console.log(data);
    return queryInterface.bulkInsert("Products", a, {});
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
    return queryInterface.Delete("Products");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};