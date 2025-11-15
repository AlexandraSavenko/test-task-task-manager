import Joi from 'joi';

const columnSchema = Joi.object({
    title: Joi.string().required(),
})

export const boardAddSchema = Joi.object({
    name: Joi.string().required(),
    columns: Joi.array().items(columnSchema).min(3).max(5).required()
})