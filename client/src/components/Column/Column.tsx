import css from './Column.module.css'
import { type Column as ColumnType, type Task } from '../../types/types';
import TaskCard from '../TaskCard/TaskCard';
import { useDroppable } from '@dnd-kit/core';

interface ColumnProp {
column: ColumnType;
tasks: Task[]
}
const Column = ({column, tasks}: ColumnProp) => {
    const {setNodeRef} = useDroppable({
        id: column.id,
    })
  return (
    <div className={css.wrap}>
      <h2 className={css.title}>{column.title}</h2>
      <div ref={setNodeRef} className={css.taskWrap}>{
        tasks.map(task => <TaskCard key={task.id} task={task}/>)
        }</div>
    </div>
  )
}

export default Column
