import { useDraggable } from '@dnd-kit/core';
import type { TaskType } from '../../types/types'
import css from './TaskCard.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Button from '../Button/Button';
import { handleDeleteTask } from '../../utils/functions';
import { selectTheBoard } from '../../redux/boards/selectors';
import { setEditingTask, setModalOpen } from '../../redux/boards/slice';

interface TaskCardProp {
    task: TaskType;
}
const TaskCard = ({task}: TaskCardProp) => {
  const board = useAppSelector(selectTheBoard)
  const dispatch = useAppDispatch()
    const { attributes, listeners, setNodeRef, transform} = useDraggable({
        id: task._id || ""
    })

    const style = transform ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`
    } : undefined;
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style} className={css.wrap}>
      <h3 className={css.title}>{task.title}</h3>
      <p className={css.description}>{task.description}</p>
      <Button onClick={() => handleDeleteTask(task._id, board?._id, dispatch)}>del</Button>
      <Button onClick={() => {dispatch(setModalOpen("editTask")); console.log("taskCard", task); dispatch(setEditingTask(task))}}>
            Edi
          </Button>
    </div>
  )
}

export default TaskCard
