import React from "react";
import style from "./modal.module.scss";
import { PropModal } from "./index.type";

const Modal: React.FC<PropModal> = ({ iShow, children }) => {
  return (
    <div className={`${style.modal} ${iShow ? style.show : ""}`}>
      <div className={style.contetn} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
