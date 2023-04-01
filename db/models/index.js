//TODA LA CONFIGURACION INICIAL

const {User,UserEsquema} = require('./user.model');

const{Customer,CustomerEsquema} = require('./customer.model');

const {Category,CategorySchema} = require('./category.model');
const {Product,ProductSchema} = require('./product.model');

function setupModels(sequelize) {
  User.init(UserEsquema,User.config(sequelize)) //Estamos indicando que ese modelo debe seguir ese esquema

  Customer.init(CustomerEsquema,Customer.config(sequelize));
  Category.init(CategorySchema,Category.config(sequelize));
  Product.init(ProductSchema,Product.config(sequelize));

  //Luego de los init van las asociaciones que realice

  User.assocciate(sequelize.models); //Le envio los modelos

  Customer.associate(sequelize.models); //Le indicamos que tiene que recibir el modelo

  Category.associate(sequelize.models); //Le indicamos que tiene una asociacion

  Product.associate(sequelize.models);
}
module.exports = setupModels; //No la ejecucion de la funcion
