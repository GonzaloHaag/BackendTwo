'use strict';

const { QueryInterface } = require('sequelize');
const {UserEsquema,USER_TABLE}  = require('./../models/user.model'); //TRAIGO ESQUEMA Y NOMBRE TABLA

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (QueryInterface) => {
    await QueryInterface.createTable(USER_TABLE,UserEsquema); //Creo una tabla y le paso es usuario y el esquema
  },
  down: async (QueryInterface) => {
    await QueryInterface.dropTable(USER_TABLE); //Para eliminar tabla
  }
}
