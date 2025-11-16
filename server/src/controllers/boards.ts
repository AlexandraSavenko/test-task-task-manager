import { Request, Response, NextFunction } from "express";
import * as boardsServises from "../services/boards"


export const getAllBoardsController = async (req: Request, res: Response) => {
    const data = await boardsServises.getBoards();
    if(!data){
        console.log("something's not right, no data")
    }
    res.status(200).json({
        status: 200,
        message: "Success",
        data
    })
}
export const getBoardByIdController = async (req: Request, res: Response, next: NextFunction) => {
    const { boardId } = req.params;
    console.log(req.params)
    const data = await boardsServises.getBoardById(boardId);
    if(!data){
        console.log("something's not right, no data")
    }
    res.status(200).json({
        status: 200,
        message: "Success",
        data
    })
}

export const addBoardController = async (req: Request, res: Response) => {
    const data = await boardsServises.addBoard(req.body);

    res.status(201).json({
        status: 201,
        message: "Success",
        data
    })
}


export const updateBoardController = async (req: Request, res: Response) => {
const { boardId } = req.params;
console.log("putBoardController", req.params);
const result = await boardsServises.updateBoard({
    boardId,
    payload: req.body,
    options: {upsert: true}
});

const status = result?.isNew ? 201 : 200;

res.status(status).json({
    status,
    message: result?.isNew? "Successfully created": "Successfully updated",
    data: result?.data
})
}

export const deleteBoardController = async (req: Request, res: Response) => {
const {boardId} = req.params;
console.log("deleteBoardController", req.params)
const data = await boardsServises.deleteBoard(boardId)
if(!data){
        console.log("something's not right, no data")
    }
    res.status(204).send()
}