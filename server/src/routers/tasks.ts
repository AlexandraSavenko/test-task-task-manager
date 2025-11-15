import { Router } from "express";
import validateBody from "../utils/validateBody";
import { taskAddSchema } from "../validation/tasks";
import ctrlWrapper from "../utils/ctrlWrapper";
import * as tasksControllers from "../controllers/tasks"
const tasksRouter = Router({mergeParams: true})

tasksRouter.post("/", validateBody(taskAddSchema), ctrlWrapper(tasksControllers.addTaskController))
tasksRouter.get("/", ctrlWrapper(tasksControllers.getTasksController))
tasksRouter.delete("/:taskId", tasksControllers.deleteTaskController)
export default tasksRouter;