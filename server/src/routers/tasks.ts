import { Router } from "express";
import validateBody from "../utils/validateBody";
import { taskAddSchema } from "../validation/tasks";
import ctrlWrapper from "../utils/ctrlWrapper";
import * as tasksControllers from "../controllers/tasks"
import { isValidId } from "../middlewares/isValidId";
const tasksRouter = Router({mergeParams: true})

tasksRouter.post("/", validateBody(taskAddSchema), ctrlWrapper(tasksControllers.addTaskController))
tasksRouter.get("/", ctrlWrapper(tasksControllers.getTasksController))
tasksRouter.put("/:taskId", isValidId("taskId"), ctrlWrapper(tasksControllers.updateTaskController))
tasksRouter.delete("/:taskId", isValidId("taskId"), tasksControllers.deleteTaskController)
export default tasksRouter;