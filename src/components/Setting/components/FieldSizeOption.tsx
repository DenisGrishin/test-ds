import React from "react";
import style from "../setting.module.scss";

const arrInput = [
  {
    id: "threeNum",
    value: "3",
    checked: true,
    text: "4x3",
  },
  {
    id: "fourNum",
    value: "3",
    checked: true,
    text: "4x4",
  },
  {
    id: "fiveNum",
    value: "5",
    checked: true,
    text: "4x5",
  },
  {
    id: "sixNum",
    value: "6",
    checked: true,
    text: "4x6",
  },
];

const FieldSizeOption = () => {
  return (
    <li className={style.item}>
      <div className={style.titleRadio}>Размер поля:</div>

      <div className={style.wrapperRadio}>
        {arrInput.map((input) => (
          <label className={style.label} htmlFor={input.id}>
            <input
              className={style.input}
              checked
              type="radio"
              id={input.id}
              name="sizeNum"
              value={input.value}
            />
            <span> {input.text}</span>
          </label>
        ))}
      </div>
    </li>
  );
};

export default FieldSizeOption;
