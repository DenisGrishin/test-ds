import React from "react";
import style from "./setting.module.scss";
import OptionSetting from "./components/OptionSetting/OptionSetting.tsx";
import { PropsSetting } from "./index.type";

const Setting: React.FC<PropsSetting> = ({
  selectedSetting,
  setSelectedValue,
}) => {
  return (
    <div className={style.wrapper}>
      <ul>
        <OptionSetting
          setSelectedValue={(e) => setSelectedValue(e)}
          selectedSetting={selectedSetting.numCards}
          nameOption="Размер поля:"
          keyObj="size"
          nameRadio="numCards"
        />
        <OptionSetting
          setSelectedValue={(e) => setSelectedValue(e)}
          selectedSetting={selectedSetting.time}
          nameOption="Лимит времени в минутах:"
          keyObj="time"
          nameRadio="time"
        />
        <OptionSetting
          setSelectedValue={(e) => setSelectedValue(e)}
          selectedSetting={selectedSetting.errorPoint}
          nameOption="Лимит ошибок:"
          keyObj="error"
          nameRadio="errorPoint"
        />
        <OptionSetting
          setSelectedValue={(e) => setSelectedValue(e)}
          selectedSetting={selectedSetting.typeImg}
          nameOption="Выберите картинку для карточек:"
          keyObj="img"
          nameRadio="typeImg"
          isImg
        />
      </ul>
    </div>
  );
};

export default Setting;
