import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

export const isValidId = (paramName: string) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const { boardId } = req.params;
  const id = req.params[paramName]
  console.log("isValidId:", req.params)
  if (!id || !isValidObjectId(id)) {
    return next(createHttpError(404, `${id} not valid id`));
  }
  next();
};
