

//Todo esto se dara cuando en insomnia ponga http://localhost:3000/api/v1/users
const{Client} = require('pg');
const { password } = require('pg/lib/defaults');

async function getConnection() { //Funcion para realizar la conexion node-postgres

const client = new Client({
  host:'localhost', //host que quiero
  port:5432,
  user:'lalo', //usuario que puse antes
  password:'admin123', //paswword q puse antes tambien
  database:'my_store'
});
//Esto devuelve una promesa entonces :
await client.connect();
return client; //Para q pueda empezar a utilizarlo
}

module.exports = getConnection;
