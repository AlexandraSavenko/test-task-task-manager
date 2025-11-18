import type React from 'react'
import css from './Layout.module.css'
import Header from '../Header/Header';
import { Suspense } from 'react';
import Modal from '../modal/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectIsModalOpen } from '../../redux/boards/selectors';
import { setModalOpen } from '../../redux/boards/slice';
import BoardForm from '../BoardForm/BoardForm';
import EditBoardForm from '../EditBoardForm/EditBoardForm';
import TaskForm from '../TaskForm/TaskForm';

interface Props {
    children: React.ReactNode;
}
const Layout: React.FC<Props> = ({children}) => {
    const dispatch = useAppDispatch();

  const isModalOpen = useAppSelector(selectIsModalOpen)
    const closeModal = () => dispatch(setModalOpen(""));

  return (
    <div className={css.layoutWrap}>
      <Header/>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {isModalOpen === "createBoard" && <BoardForm />}
          {isModalOpen === "editBoard" && <EditBoardForm/>}
          {isModalOpen == "createTask" && <TaskForm/>}
        </Modal>
      )}
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  )
}

export default Layout
