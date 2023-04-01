
const {Sequelize} = require('sequelize');

//Primero definimos nuestra conexion
const {config} = require('../config/config');
const setupModels = require('../db/models'); //Nos traemos la funcion setupModels desde esa carpeta

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

//Puede ser MYSQL en vez de postgress ->Solo modificar los otros archivos
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI,{
  // puede ser postgress tambien
//Este dialect debe ser MYSQL si cambiamos de base de datos
  dialect: 'postgres', //Esta variable define que base de datos estamos utilizando
  logging: true,

});

//Aca corremos el setupModels

setupModels(sequelize);


module.exports = sequelize; //exportamos para utilizarlo en otros archivos
