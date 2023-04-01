'use strict';

const { DataTypes } = require('sequelize');

//AQUI QUIERO MODIFICAR UNA COLUMNA

const {CUSTOMER_TABLE}  = require('./../models/customer.model') //TRAIGO ESQUEMA Y NOMBRE TABLA

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (QueryInterface) => {

    //Para modificar una columna
    await QueryInterface.changeColumn(CUSTOMER_TABLE,'user_id',{
      field: 'user_id',
      allowNull:false,
      type: DataTypes.INTEGER,
      unique:true, //Para que sea unico
    }); //Creo una tabla y le paso es usuario y el esquema
  },
  down: async (QueryInterface) => {
   // await QueryInterface.dropTable(CUSTOMER_TABLE); //Para eliminar tabla
  }
}
