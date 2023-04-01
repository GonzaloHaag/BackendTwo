const boom = require('@hapi/boom');
const { models } = require('../librerias/sequelize');

class CustomerService {

  constructor() {}

  async find() {
    const rta = await models.Customer.findAll({

      //El bellongTo hacia user
      include: ['user'] //Por eso pusimos el alias 'user' para que reciba esas asociaciones
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.Customer.findByPk(id);
    if (!user) {
      throw boom.notFound('customer not found');
    }
    return user;
  }

  async create(data) { //Esto se relaciona con la creacion del cliente en customer.esquema.js(MUY IMPORTANTE CON TODO)
   const newCustomer = await models.Customer.create(data,{
    include: ['user'] //Que incluya esta asociacion
   });

   return newCustomer;

   /*
   Ahora directamnete ya podemos crear un cliente y que me envie
   directamente cual va a ser su usuario y  su password desde la misma url
   */
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = CustomerService;
