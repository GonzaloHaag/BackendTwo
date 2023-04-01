'use strict';
//Vamos a crear 2 tablas.... Una de categorias y otra de productos

const { CategorySchema, CATEGORY_TABLE } = require('./../models/category.model');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');

module.exports = {

  //En los esquimas de cada uno ira lo que quiero en ese campo

  up: async (queryInterface) => {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
}
};
