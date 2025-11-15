import { Request, Response, NextFunction } from "express";
import { addTask, getTasks } from "../services/tasks";


export const getTasksController = async (req: Request, res: Response) => {
    const {boardId} = req.params;
    console.log("getTasksController: req.params -- ", req.params)
    const data = await getTasks(boardId);
    if(!data){
        console.log("something's not right, no data")
    }
    res.status(200).json({
        status: 200,
        message: "Success",
        data
    })
}
export const addTaskController = async (req: Request, res: Response) => {
    const data = await addTask(req.body);

    res.status(201).json({
        status: 201,
        message: "Success",
        data
    })
}

export const deleteTaskController = async (req: Request, res: Response) => {
    console.log(req.params)
}