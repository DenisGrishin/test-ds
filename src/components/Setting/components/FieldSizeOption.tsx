import React from "react";
import style from "../setting.module.scss";

const arrInput = [
  {
    id: "threeNum",
    value: 3,

    text: "4x3",
  },
  {
    id: "fourNum",
    value: 4,

    text: "4x4",
  },
  {
    id: "fiveNum",
    value: 5,

    text: "4x5",
  },
  {
    id: "sixNum",
    value: 6,

    text: "4x6",
  },
];

interface PropsFieldSizeOption {
  setSelectedValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue: number;
}
const FieldSizeOption: React.FC<PropsFieldSizeOption> = ({
  setSelectedValue,
  selectedValue,
}) => {
  return (
    <li className={style.item}>
      <div className={style.titleRadio}>Размер поля:</div>
      <div className={style.wrapperRadio}>
        {arrInput.map((input) => (
          <label key={input.id} className={style.label} htmlFor={input.id}>
            <input
              className={style.input}
              type="radio"
              id={input.id}
              name="numCards"
              value={input.value}
              onChange={(e) => setSelectedValue(e)}
              checked={selectedValue === input.value}
            />
            <span> {input.text}</span>
          </label>
        ))}
      </div>
    </li>
  );
};

export default FieldSizeOption;
