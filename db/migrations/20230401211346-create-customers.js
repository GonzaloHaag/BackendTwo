'use strict';

const { QueryInterface } = require('sequelize');
const {CustomerEsquema,CUSTOMER_TABLE}  = require('./../models/customer.model') //TRAIGO ESQUEMA Y NOMBRE TABLA

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (QueryInterface) => {
    await QueryInterface.createTable(CUSTOMER_TABLE,CustomerEsquema); //Creo una tabla y le paso es usuario y el esquema
  },
  down: async (QueryInterface) => {
    await QueryInterface.dropTable(CUSTOMER_TABLE); //Para eliminar tabla
  }
}
