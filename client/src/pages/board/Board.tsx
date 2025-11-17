import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import type { TaskType } from '../../types/types';
import css from './Board.module.css'
import { useEffect, useState } from 'react';
import Column from '../../components/Column/Column';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectTheBoard } from '../../redux/boards/selectors';
import Button from '../../components/Button/Button';
import { MdDeleteForever } from "react-icons/md";
import { deleteTheBoard } from '../../redux/boards/operations';

// const COLUMNS: ColumnType[] = [
//   { id: "column-TODO", title: "To Do" },
//   { id: "column-IN_PROGRESS", title: "In Progress" },
//   { id: "column-DONE", title: "Done" },
// ];

const TASKS: TaskType[] = [
  { id: "task-1", title: "do it now", description: "just do it", status: "TODO" },
  {
    id: "task-2",
    title: "do it",
    description: "just do it",
    status: "IN_PROGRESS",
  },

  { id: "task-3", title: "do it", description: "just do it", status: "DONE" },
];
const Board = () => {
  const boardInfo = useAppSelector(selectTheBoard);
  const dispatch = useAppDispatch()

    const [tasks, setTasks] = useState<TaskType[]>(TASKS);
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    console.log("active", active);
    console.log("over", over);
    
    const taskId = active.id as string;
    const NewStatus = over.id as TaskType["status"];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: NewStatus } : task
      )
    );
  };

   const handleDeleteBoard = (boardId: string | undefined) => {
    if(!boardId) return;
    dispatch(deleteTheBoard(boardId))
  }
  useEffect(() => {console.log(boardInfo?._id)}, [boardInfo])
  if(!boardInfo) return <p>Sorry, you need to select a board</p>
  return (
    <div className={css.taskMan}>
      <div className=".outerWrap">
        <div className={css.boardMenu}>
          <p>{boardInfo?.name}</p>
          <Button onClick={() => handleDeleteBoard(boardInfo._id)}>
                           <MdDeleteForever />
            
          </Button>
        </div>
        
        <div className={css.wrap}>
          <DndContext onDragEnd={handleDragEnd}>
            {boardInfo.columns.map((column) => (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            ))}
          </DndContext>
        </div>
      </div>
    </div>
  )
}

export default Board
