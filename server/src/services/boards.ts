import BoardsCollection from "../db/models/Boards";
import { CreateBoardPayload, UpdateBoardParams } from "../types/boars";

export const getBoards = () => BoardsCollection.find().select("name _id");

export const getBoardById = (boardId: string) =>
  BoardsCollection.findById(boardId);

export const addBoard = (payload: CreateBoardPayload) => {
  // const columnsWithIndex = payload.columns.map((column) => ({
  //   ...column,
  //   index: column.title.split(/\s+/).join("").toUpperCase(),
  // }));
  return BoardsCollection.create(payload);
};

export const updateBoard = async ({
  boardId,
  payload,
  options = {},
}: UpdateBoardParams) => {
  const rawResult = await BoardsCollection.findOneAndUpdate(
    { _id: boardId },
    { $set: payload },
    { ...options, includeResultMetadata: true, returnDocument: "after" }
  );
  if (!rawResult || !rawResult.value) return null;
  return {
    data: rawResult.value,
    isNew: Boolean(rawResult.lastErrorObject?.upserted),
  };
};

export const deleteBoard = (boardId: string) =>
  BoardsCollection.findOneAndDelete({ _id: boardId });
