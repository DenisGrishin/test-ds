import React, { useContext, useState } from "react";
import Setting from "../../components/Setting/Setting.tsx";
import { Context } from "../../context/ContextProvider.tsx";
import { TypeSelectedSetting } from "./indx.type";

const SettingContainer = () => {
  const { state, dispatch } = useContext(Context);
  const [selectedSetting, setSelectedSetting] = useState<TypeSelectedSetting>({
    numCards: state.setting.numCards,
    time: state.setting.time,
    errorPoint: state.setting.errorPoint,
    typeImg: state.setting.typeImg,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSelectedSetting((prev) => {
      return {
        ...prev,
        [name]: Number(value),
      };
    });

    dispatch({
      type: "updateSetting",
      payload: { ...state.setting, [name]: Number(value) },
    });
    if (name === "time" || name === "errorPoint") {
      dispatch({
        type: "updateStateSession",
        payload: { ...state.stateSessionGame, [name]: Number(value) },
      });
    }
  };

  return (
    <Setting
      setSelectedValue={(e) => handleChange(e)}
      selectedSetting={selectedSetting}
    />
  );
};

export default SettingContainer;
