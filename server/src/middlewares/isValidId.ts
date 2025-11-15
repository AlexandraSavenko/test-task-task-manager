import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

export const isValidId = (
  req: Request<{ boardId: string }>,
  res: Response,
  next: NextFunction
) => {
  const { boardId } = req.params;
  console.log("isValidId:", req.params)
  if (!isValidObjectId(boardId)) {
    return next(createHttpError(404, `${boardId} not valid id`));
  }
  next();
};
