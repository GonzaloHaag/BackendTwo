const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone =  Joi.string();
const userId = Joi.number().integer();
const email = Joi.string().email();
const password =  Joi.string();

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({ //Momento de crear un cliente
   name : name.required(),
   lastName: lastName.required(),
   phone: phone.required(),
   user:Joi.object({
    email: email.required(),
    password:password.required()
   })
});

//Ahora para crear un usuario desde customers en insomnia
//METODO POST EN LA URL http://localhost:3000/api/v1/customers
/*
{
	"name": "KyrieIrving",
	"lastName": "Molina",
	"phone": "1321321321",
	"user":{
		"email": "lalote@mail.com",
		"password": "sddsadsad"
	}
}
*/

const updateCustomerSchema = Joi.object({ //Actualizar cliente
  name,
  lastName,
  phone,
  userId
});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };
