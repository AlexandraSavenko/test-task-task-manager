// import css from "./Board.module.css";
import { useAppSelector } from "../../hooks/redux";
import { selectTheBoard } from "../../redux/boards/selectors";
import Board from "../../components/Board/Board";

const BoardPage = () => {
  const boardInfo = useAppSelector(selectTheBoard);

  return boardInfo ? (
    <Board boardInfo={boardInfo} />
  ) : (
    <p>Sorry, you need to select a board</p>
  );
};

export default BoardPage;
