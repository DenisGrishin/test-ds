import React, { useContext, useState } from "react";
import Setting from "../../components/Setting/Setting.tsx";
import { Context } from "../../context/ContextProvider.tsx";

const SettingContainer = () => {
  const { state, dispatch } = useContext(Context);
  const [selectedValue, setSelectedValue] = useState<number>(
    state.setting.numCards,
  );
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setSelectedValue(Number(value));
    dispatch({ type: "updateSetting", option: name, payload: Number(value) });
  }
  return (
    <Setting
      setSelectedValue={(e) => handleChange(e)}
      selectedValue={selectedValue}
    />
  );
};

export default SettingContainer;
