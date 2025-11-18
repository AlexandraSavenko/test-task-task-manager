import type React from 'react'
import css from './Layout.module.css'
import Header from '../Header/Header';
import { Suspense } from 'react';
import Modal from '../modal/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectIsModalOpen } from '../../redux/modal/selectors';
import { setModalOpen } from '../../redux/modal/slice';
import BoardForm from '../BoardForm/BoardForm';
import EditBoardForm from '../EditBoardForm/EditBoardForm';

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
        </Modal>
      )}
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  )
}

export default Layout
