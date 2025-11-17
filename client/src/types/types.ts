export interface ColumnType {
    id: string;
    title: string;
}

export interface BoardType {
    name: string;
    columns: ColumnType[]
}
export interface TaskType {
    id: string;
    title: string;
    description: string;
    status: string;
}

export interface BoardsInitStateTypes {
    board: BoardType | null,
    tasks: TaskType[],
    loading: false,
    error: false
}

export interface BoardFormType {
    name: string;
     currentColumnName: string;
     columns: ColumnType[]
}