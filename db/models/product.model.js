
const {Model,DataTypes,Sequelize} = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model');

const PRODUCT_TABLE = 'categories';

const ProductSchema = {
  id: {
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type: DataTypes.INTEGER
   },
   name:{
     type: DataTypes.STRING,
     allowNull:false,
   },
   image: {
     type: DataTypes.STRING,
     allowNull:false,
   },
   description: {
    type: DataTypes.TEXT,
    allowNull: false, //No vamos a permitir que sea nulo
   },
   price: {
    type:DataTypes.INTEGER,
    allowNull: false,
   },
   createdAt: {
     allowNull:false,
     type:DataTypes.DATE,
     field: `created_at`,
     defaultValue : Sequelize.NOW,

   },
   categoryId: {
    //Es necesario que todos nuestros PRODUCTOS
    field: 'category_id',
    allowNull:false,
    type: DataTypes.INTEGER,
    //Sacamos el unique pq habra muchos productos en UNA categoria
    references: {
      model: CATEGORY_TABLE, //A que tabla ira relacionada
      key: 'id'
    },
    onUpdate: 'CASCADE', //Quiero q se comporte en cascada si se actualiza ese userID
    onDelete: 'SET NULL'

  }
}

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Category,{ //Que un producto pertenece a una categoria
      as: 'category'
    })

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName : CATEGORY_TABLE,
      modelName : 'Product',
      timestamps : false
    }
  }
}


module.exports = {Product,ProductSchema,PRODUCT_TABLE};
