import React, { ReactNode } from "react";
import style from "./modal.module.scss";

interface PropModal {
  iShow: boolean;
  setIsShowModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<PropModal> = ({ iShow, setIsShowModal, children }) => {
  return (
    <div
      className={`${style.modal} ${iShow ? style.show : ""}`}
      onClick={() => setIsShowModal()}
    >
      <div className={style.contetn} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
