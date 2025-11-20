import { RxHamburgerMenu } from "react-icons/rx";
import { useAppDispatch } from "../../hooks/redux";
import { setModalOpen } from "../../redux/boards/slice";
import Button from "../Button/Button";
import Logo from "../logo/Logo";
import SelectBoard from "../selectBoard/SelectBoard";
import css from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const dispatch = useAppDispatch(); 
  const [open, setOpen] = useState(false);
  const handleCreateBoard = () => {
    dispatch(setModalOpen("createBoard"));
    setOpen(false);
  };

  return (
    <div className={`${css.headerWrap} container`}>
      <Logo />
      
      <div className={`${css.boardMenu} ${open && css.boardMenuOpen}`}>
        <SelectBoard onClose={() => setOpen(false)} />
        <Button onClick={handleCreateBoard}>Create Board</Button>
      </div>
      <div onClick={() => setOpen(!open)} className={css.burger}>
        <RxHamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
