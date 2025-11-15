import { Request, Response, NextFunction } from 'express';
import Joi from 'joi'
import createHttpError from 'http-errors';

const validateBody = (schema: Joi.Schema) => {
  const func = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("validateBody", req.body)
      await schema.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
        if(error instanceof Joi.ValidationError){
            return next(createHttpError(400, error.message))
        }
      return next(createHttpError(400, "Invalide request body"));
    }
  };
  return func;
};

export default validateBody;