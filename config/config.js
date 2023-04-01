
//Configuracion base para leer las variables de entorno

//Debo traerme la libreria dotenv para poder leer process.env
require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000, //Si me lo pasan q corra ahi, sino en el 3000


  //Ahora leeremos todo lo correspondiente a la base de datos
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,

}

module.exports = {config};
