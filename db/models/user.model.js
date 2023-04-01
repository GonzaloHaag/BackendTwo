
const {Model,DataTypes,Sequelize} = require('sequelize'); //ORM sequelize


/*
Aqui crearemos toda la estrucutra de la tabla para que luego
sequelize lo haga en la base de datos -> Luego de todo tendremos otra tabla en pgAdmin creada desde aqui
*/

const USER_TABLE = 'users'; //Nombre de la tabla(usuarios que se registran)
const UserEsquema = { //Aca defino los campos del usuario
  id: {
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER, //El tipo de dato que espero es entero pq es un id

  },
  email:{
    allowNull:false,
    type:DataTypes.STRING, //Espero un string pq es email
    unique:true, //Que sea un campo unico, sino habria muchos usuarios con mas de un mail
  },
  role: { //reglas
    allowNull:false,
    type:DataTypes.STRING,
    defaultValue:'customer'
  },
  password:{
    allowNull:false,
    type:DataTypes.STRING

  },
  createdAt: { //Fecha de creacion
    allowNull:false,
    type:DataTypes.DATE,
    field:'create at',
    defaultValue:Sequelize.NOW
  }
}


//Algo interesante de sequelize es que podemos crear una clase que extiende el modelo

//Dentro de ese modelo tendremos todas las formas que vamos a hacer query
class User extends Model {

  //METODOS ESTATICOS
  static assocciate(models) { //ASOCIACIONES
    //associate
    //asociacion hasOne de user con customer
    this.hasOne(models.Customer,{

      as: 'customer',
      foreignKey: 'userId' //como se va a encontrar

    });
  }
  static config(sequelize) {
    return {
      sequelize, //CONEXION
      tableName: USER_TABLE, //NOMBRE DE LA TABLA
      modelName: 'User', //nombre del modelo
      timestamps: false

    }
  }
}

module.exports = { USER_TABLE,UserEsquema,User};
