'use strict';

//MIGRACION PARA CREAR UNA COLUMNA O ELIMINAR UNA TABLA....

//Crearemos una columna que se llamara role

const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */

const {UserEsquema,USER_TABLE}  = require('./../models/user.model'); //TRAIGO ESQUEMA Y NOMBRE TABLA
module.exports = {
  up: async (queryInterface,Sequelize) => {

    //Para crear una columna:

    await queryInterface.addColumn(USER_TABLE, 'role',UserEsquema.role);
  },


 down: async (queryInterface) => {
  //Por si queremos eliminar ese campo de regla:

  await queryInterface.removeColumn(USER_TABLE,'role');
 }
};
