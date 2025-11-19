import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import Button from "../Button/Button";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({children, onClose }: ModalProps) => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
<div className={css.btnWrap}>
  <Button onClick={onClose}>X</Button>
</div>
        
        {children? children : "Sorry, something went wrong. Please, try again"} 
      </div>
    </div>,
    document.body
  );
};

export default Modal;