import { useContext, useLayoutEffect, useState } from "react";

import { Context } from "../../../context/ContextProvider.tsx";
import InfoPanelGameBord from "../../../components/GameBord/InfoPanelGB/InfoPanelGB.tsx";

const InfoPanelGBContainer = () => {
  const { state } = useContext(Context);

  const [progressWidth, setProgressWidth] = useState(0);

  useLayoutEffect(() => {
    setProgressWidth(
      (100 / (state.setting.numCards * 2)) * state.stateSessionGame.countPoint,
    );
  }, [state.setting.numCards, state.stateSessionGame.countPoint]);

  return (
    <InfoPanelGameBord
      stateSessionGame={state.stateSessionGame}
      progressWidth={progressWidth}
      time={state.setting.time}
      errorPoint={state.setting.errorPoint}
    />
  );
};

export default InfoPanelGBContainer;
