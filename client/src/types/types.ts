export interface ColumnType {
    id?: string;
    title: string;
}

export interface BoardType {
    name: string;
    columns: ColumnType[];
    _id?: string;
}
export interface BoardFormType {
    name: string;
     currentColumnName?: string;
     columns: ColumnType[]
}
export interface TaskType {
    _id: string;
    title: string;
    description: string;
    status: string;
}

export interface BoardsInitStateTypes {
    board: BoardType | null,
    allBoards: {name: string, _id: string}[]
    tasks: TaskType[],
    loading: boolean,
    error: boolean
}

