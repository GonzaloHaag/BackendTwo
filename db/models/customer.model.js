
const {Model,DataTypes,Sequelize} = require('sequelize');

const {USER_TABLE} = require('./user.model');

const CUSTOMER_TABLE = 'customers';

const CustomerEsquema = {
  id: {
    allowNull:false,
    autoIncrement:true, //Por esto asigna id que se incrementa,1--2--3 y asi
    primaryKey:true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull:false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull:false,
    type: DataTypes.STRING,
    field: 'last_name',

  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,

  },
  userId: {
    //Es necesario que todos nuestros clientes tengan un usuario
    field: 'user_id',
    allowNull:false,
    type: DataTypes.INTEGER,
    unique:true, //Para que sea unico
    references: {
      model: USER_TABLE, //A que tabla ira relacionada
      key: 'id'
    },
    onUpdate: 'CASCADE', //Quiero q se comporte en cascada si se actualiza ese userID
    onDelete: 'SET NULL'

  }

}

class Customer extends Model {
  static associate(models) {

    //Asociacion hacia el user y un alias que se llama 'user
    this.belongsTo(models.User,{as:'user'});

  }

  static config(sequelize) {
    return{
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps:false
    }
  }
}

module.exports = {Customer,CustomerEsquema,CUSTOMER_TABLE};
