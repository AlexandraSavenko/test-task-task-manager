import { Router } from "express";
import { isValidId } from "../middlewares/isValidId";
import ctrlWrapper from "../utils/ctrlWrapper";
import * as boardsControllers from "../controllers/boards"

import validateBody from "../utils/validateBody";
import { boardAddSchema } from "../validation/boards";
import tasksRouter from "./tasks";

const boardsRouter = Router();

boardsRouter.get("/", ctrlWrapper(boardsControllers.getAllBoardsController))
boardsRouter.get("/:boardId", isValidId, ctrlWrapper(boardsControllers.getBoardByIdController));

boardsRouter.post("/", validateBody(boardAddSchema), ctrlWrapper(boardsControllers.addBoardController))
boardsRouter.delete("/:boardId", isValidId, ctrlWrapper(boardsControllers.deleteBoardController))

boardsRouter.use("/:boardId/tasks", tasksRouter)


export default boardsRouter;