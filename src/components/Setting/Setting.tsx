import React from "react";
import style from "./setting.module.scss";
import FieldSizeOption from "./components/FieldSizeOption.tsx";

interface PropsSetting {}
const Setting: React.FC<PropsSetting> = () => {
  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        <FieldSizeOption />
        <li className={style.item}>
          <span>Лимит времени:</span>
        </li>
        <li className={style.item}>
          <span>Лимит ошибок:</span>
        </li>
      </ul>
    </div>
  );
};

export default Setting;
