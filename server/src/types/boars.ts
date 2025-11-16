export interface CreateBoardPayload {
    name: string;
    columns: {title: string}[]
}

export interface UpdateBoardParams {
boardId: string,
payload: CreateBoardPayload,
options: {}
}