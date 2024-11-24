import React from "react";
import style from "./setting.module.scss";
import FieldSizeOption from "./components/FieldSizeOption.tsx";

interface PropsSetting {
  selectedValue: number;
  setSelectedValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Setting: React.FC<PropsSetting> = ({
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        <FieldSizeOption
          setSelectedValue={(e) => setSelectedValue(e)}
          selectedValue={selectedValue}
        />
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
