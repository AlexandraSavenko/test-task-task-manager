import css from './Column.module.css'
import { type ColumnType as ColumnType, type TaskType } from '../../types/types';
import TaskCard from '../TaskCard/TaskCard';
import { useDroppable } from '@dnd-kit/core';
import { useEffect } from 'react';

interface ColumnProp {
column: ColumnType;
tasks: TaskType[]
}
const Column = ({column, tasks}: ColumnProp) => {
  useEffect(() => {console.log(tasks)}, [tasks])
    const {setNodeRef} = useDroppable({
        id: column._id || "",
    })
  return (
    <div ref={setNodeRef} className={css.wrap}>
      <h2 className={css.title}>{column.title}</h2>
      <div className={css.taskWrap}>{
        tasks.map(task => <TaskCard key={task._id} task={task}/>)
        }</div>
    </div>
  )
}

export default Column
