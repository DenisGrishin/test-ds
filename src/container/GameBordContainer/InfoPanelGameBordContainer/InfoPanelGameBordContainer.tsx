import { useContext, useLayoutEffect, useState } from "react";
import InfoPanelGameBord from "../../../components/GameBord/InfoPanelGameBord/InfoPanelGameBord.tsx";
import { Context } from "../../../context/ContextProvider.tsx";

const InfoPanelGameBordContainer = () => {
  const { state } = useContext(Context);

  const [progressWidth, setProgressWidth] = useState(0);

  useLayoutEffect(() => {
    setProgressWidth(
      (100 / state.setting.numCards) * state.stateSessionGame.countPoint,
    );
  }, [state.setting.numCards, state.stateSessionGame.countPoint]);

  return (
    <InfoPanelGameBord
      stateSessionGame={state.stateSessionGame}
      progressWidth={progressWidth}
    />
  );
};

export default InfoPanelGameBordContainer;
