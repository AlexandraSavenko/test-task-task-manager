import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getAllBoards, getTheBoard } from "../../redux/boards/operations";
import { selectAllBoards } from "../../redux/boards/selectors";
import css from "./SelectBoard.module.css";
import { selectNoBoard } from "../../redux/boards/slice";

const SelectBoard = () => {
  const dispatch = useAppDispatch();
  const allBoards = useAppSelector(selectAllBoards);
  useEffect(() => {
    dispatch(getAllBoards())
    
  }, [])
  const handleChangeBoard = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const boardId = event.target.value;
    if(boardId === "noBoard"){
        dispatch(selectNoBoard())
        return;
    }
    dispatch(getTheBoard(boardId));
  };
  return (
    allBoards.length > 0 ? <div className={css.selectBoardWrap}>
      <select name="selectBoard" onChange={handleChangeBoard}>
        <option value="noBoard">Select board</option>
        {allBoards.map((board) => (
          <option key={board._id} value={board._id}>{board.name}</option>
        ))}
      </select>
    </div> : <p>Sorry, the board list is not available</p>
  );
};

export default SelectBoard;
