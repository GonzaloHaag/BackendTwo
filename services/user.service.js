const boom = require('@hapi/boom');

//const getConnection = require('../librerias/postgres'); //Llamo a la libreria
//Conexion POOL:

const pool = require('../librerias/postgresPool');

const {models} = require('./../librerias/sequelize'); //Traemos los models desde  sequelize

class UserService {
  constructor() {

  }

  async create(data) {

    //Nuevo usuario, create

    const newUser = await models.User.create(data);

    //Si nuestra capa de validacion es correcta

    return newUser;
  }

  async find() {
    //Uso de la conexion node-postgress
    // const client = await getConnection(); //Obtengo el cliente
    // const respuesta = await client.query('SELECT * FROM tasks'); //Selecciono la tabla que cree en la base de datos
    // return respuesta.rows; //Quiero las filas de esa tabla
    //Conexion POOL - nodepostgress

    //Esto sale con la ruta a localhost/api/v1/users
    // const query = 'SELECT * FROM tasks';
    // const respuesta = await this.pool.query(query);
    // return respuesta.rows;

    //Utilizando sequelize para realizar peticiones
    const respuesta = await models.User.findAll({
      include: ['customer'] //Para que includa a la asociacion que se llama asi
    }); //Quiero ir al models, al nombre de mi modelo(definido en el metodo estatico) y que traiga todo lo q este en esa tabla

    return respuesta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user) { //Si no encuentra el user, (no hay id que coincida)
      throw boom.notFound("User no encontrado");
    }
    return user;

  }

  async update(id, changes) {
    //Para actualizar un usuario

    //Si existe ese id :

    //Invocamos findOne para que largue un error en caso de encontrarlo

    const user = await this.findOne(id); //Vamos a buscar por ByPk
    const respuesta = await  user.update(changes); //Le enviamos los cambios
    return respuesta;
  }

  async delete(id) {
    //Invocamos findOne para que largue un error en caso de encontrarlo

    //Asi evitamos repetir codigo

    const user = await this.findOne(id); //Si existe el id que queremos borrar

    await user.destroy(); //Para destruirlo
    return {id}; //Retornamos el id que borramos

  }
}

module.exports = UserService;
