import Joi from 'joi';

export const taskAddSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().required()
    // boardId: Joi.string().required()
})