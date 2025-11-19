import Joi from 'joi';

const columnSchema = Joi.object({
    title: Joi.string().required(),
})

export const boardAddSchema = Joi.object({
    name: Joi.string().required(),
    columns: Joi.array().items(columnSchema).min(3).max(5).required()
})


const columnEditSchema = Joi.object({
    title: Joi.string().required(),
    _id: Joi.string().required()
})
export const boardEditSchema = Joi.object({
    name: Joi.string().required(),
    columns: Joi.array().items(columnEditSchema).min(3).max(5).required()
})