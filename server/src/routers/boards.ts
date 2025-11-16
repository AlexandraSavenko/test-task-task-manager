import { Router } from "express";
import { isValidId } from "../middlewares/isValidId";
import ctrlWrapper from "../utils/ctrlWrapper";
import * as boardsControllers from "../controllers/boards"

import validateBody from "../utils/validateBody";
import { boardAddSchema } from "../validation/boards";
import tasksRouter from "./tasks";

const boardsRouter = Router();

boardsRouter.get("/", ctrlWrapper(boardsControllers.getAllBoardsController))
boardsRouter.get("/:boardId", isValidId("boardId"), ctrlWrapper(boardsControllers.getBoardByIdController));

boardsRouter.post("/", validateBody(boardAddSchema), ctrlWrapper(boardsControllers.addBoardController))
boardsRouter.put("/:boardId", isValidId("boardId"), validateBody(boardAddSchema), ctrlWrapper(boardsControllers.updateBoardController))
boardsRouter.delete("/:boardId", isValidId("boardId"), ctrlWrapper(boardsControllers.deleteBoardController))

boardsRouter.use("/:boardId/tasks", tasksRouter)


export default boardsRouter;