import React from "react";
import style from "../../setting.module.scss";
import {
  arrErrorOption,
  arrImgOption,
  arrSizeOption,
  arrTimeOption,
} from "./dataOption";
import { TypeArrSetting } from "./index.type";

interface PropsOptionSetting {
  setSelectedValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedSetting: number;
  nameOption: string;
  keyObj: "size" | "time" | "error" | "img";
  nameRadio: string;
  isImg?: boolean;
}
const OptionSetting: React.FC<PropsOptionSetting> = ({
  setSelectedValue,
  selectedSetting,
  nameOption,
  keyObj,
  isImg = false,
  nameRadio,
}) => {
  const arrSetting: TypeArrSetting = {
    size: arrSizeOption,
    time: arrTimeOption,
    error: arrErrorOption,
    img: arrImgOption,
  };

  return (
    <li className={style.item}>
      <div className={style.titleRadio}>{nameOption}</div>
      <div className={style.wrapperRadio}>
        {[...arrSetting[keyObj]].map((input) => (
          <div className={style.warpperLabel}>
            <label key={input.id} className={style.label} htmlFor={input.id}>
              <input
                hidden
                className={style.input}
                type="radio"
                id={input.id}
                name={nameRadio}
                value={input.value}
                onChange={(e) => setSelectedValue(e)}
                checked={selectedSetting === input.value}
              />
              {isImg ? (
                <span>
                  <img
                    src={`https://robohash.org/exasample?set=set${input.text}&size=100x100`}
                    alt="img"
                  />
                </span>
              ) : (
                <span> {input.text}</span>
              )}
            </label>
          </div>
        ))}
      </div>
    </li>
  );
};

export default OptionSetting;
