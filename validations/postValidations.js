const Joi = require('joi');

const validateCreatePost = (data) => {
    const createPostSchema =   Joi.object({
        post: Joi.string().required(),
    })
    return createPostSchema.validate(data);
}

module.exports = validateCreatePost