const Joi = require('joi');

const validateCreateAccount = (data) => {

  const createAccountSchema =   Joi.object({
        surname: Joi.string().required(),
        othernames: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        phone: Joi.string().required(),
        gender: Joi.string().required(),
        occupation: Joi.string(),
        about_me: Joi.string()
   
    })

    return createAccountSchema.validate(data);
}


module.exports =  validateCreateAccount

