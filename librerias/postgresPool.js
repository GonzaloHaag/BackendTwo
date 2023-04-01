
//Conexion mas adecuada con pool


/*
Ahora nos traemos la configuracion que creamos en config.js
para empezar a utilizarla
*/
const {config} = require('../config/config');

const USER = encodeURIComponent(config.dbUser); //PARA LA PROTECCION DE MI VARIABLE
//SUPER IMPORTANTE PROTEGER LAS VARIABLES QUE SON DELICADAS
const PASSWORD = encodeURIComponent(config.dbPassword);


/*
Crearemos la url de conexion, si tengo base de datos remotas como en amazon
horaku, me dan una url de conexion:

El formato es el siguiente
`protocolo://usuario:password@host:puertoDondeEstaCorriendo:aQuebase de datos queremos conectar`
*/
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`



//ESTA ES LA CONEXION MAS ADECUADA

const {Pool} = require('pg');

const pool = new Pool({ //Aqui hace un await interno, no lo necesito al async

  connectionString:URI //LE PASO LA URL COMPLETA

});

module.exports = pool;
