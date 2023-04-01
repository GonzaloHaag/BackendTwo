const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

//Uso de la conexion node-postgres
//const pool = require('../librerias/postgresPool'); //Conexion tipo pool

//Ahora ya utilizaremos sequelize
const pool = require('../librerias/sequelize');
const sequelize = require('../librerias/sequelize');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();

  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find() { //De forma asincrona para poder ejecutar nuestro await

    //Esto funcionara cuando hagamos la ruta hacia los productos en insomnia /products

    //Obtenemos la lista de tareas en una conexion tipo POOL

    // const query = 'SELECT * FROM tasks'; //Selecciono mi tabla de tareas

    // const respuesta = await sequelize.query(query);
    // return respuesta.rows; //Solo las filas

    //Uso de sequelize --> Recomendado
    const query = 'SELECT * FROM tasks';

    //Primera posicion data, y la segunda un poco mas de info sobre data
    const [data] = await sequelize.query(query);
    //Data retorna la tabla

  return data;

  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
