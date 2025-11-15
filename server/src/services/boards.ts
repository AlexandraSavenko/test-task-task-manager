import BoardsCollection from "../db/models/Boards";
import { CreateBoardPayload } from "../types/boars";

export const getBoards = () => BoardsCollection.find()

export const getBoardById = (boardId: string) => BoardsCollection.findById(boardId);

export const addBoard = (payload: CreateBoardPayload) => BoardsCollection.create(payload);

export const deleteBoard = (boardId: string) => BoardsCollection.findOneAndDelete({_id: boardId});