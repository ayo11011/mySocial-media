const Joi = require('joi');

const validateCreateComment = (data) => {
    const createCommentSchema =   Joi.object({
        comment: Joi.string().required(),
    })
    return createCommentSchema.validate(data);
}

module.exports = validateCreateComment