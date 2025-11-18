// import { DndContext } from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectTasks } from '../../redux/boards/selectors';
import { handleDeleteBoard } from '../../utils/functions'
import Button from '../Button/Button'
import css from './Board.module.css'
import Column from '../Column/Column';
import type { BoardType } from '../../types/types';
import { setModalOpen } from '../../redux/modal/slice';

interface BoardProps {
    boardInfo: BoardType;
}
const Board = ({boardInfo}: BoardProps) => {
    // const boardInfo = useAppSelector(selectTheBoard);
    const tasks = useAppSelector(selectTasks)
        const dispatch = useAppDispatch();
  return (
    <div className={css.taskMan}>
      <div>
        <div className={css.boardMenu}>
          <p>{boardInfo.name}</p>
          <Button onClick={() => handleDeleteBoard(boardInfo._id, dispatch)}>
            Delete Board
          </Button>
          <Button onClick={() => dispatch(setModalOpen("editBoard"))}>
            Edit Board
          </Button>
        </div>

        <div className={css.wrap}>
          {/* <DndContext onDragEnd={handleDragEnd}> */}
            {boardInfo?.columns.map((column) => (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            ))}
          {/* </DndContext> */}
        </div>
      </div>
    </div>
  )
}

export default Board;
