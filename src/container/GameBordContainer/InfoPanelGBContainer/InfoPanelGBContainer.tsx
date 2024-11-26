import { useContext, useEffect, useLayoutEffect, useState } from "react";

import { Context } from "../../../context/ContextProvider.tsx";
import InfoPanelGameBord from "../../../components/GameBord/components/InfoPanelGB/InfoPanelGB.tsx";

const InfoPanelGBContainer = () => {
  const { state, dispatch } = useContext(Context);

  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    dispatch({
      type: "updateStateSession",
      payload: {
        time: state.setting.time,
        errorPoint: state.setting.errorPoint,
        scorePoint: 0,
        countGame: 0,
        scoreRecordGame: 0,
      },
    });
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isRestartGame]);

  useLayoutEffect(() => {
    setProgressWidth(
      (100 / (state.setting.numCards * 2)) * state.stateSessionGame.scorePoint,
    );
  }, [state.setting.numCards, state.stateSessionGame.scorePoint]);

  return (
    <InfoPanelGameBord
      stateSessionGame={state.stateSessionGame}
      progressWidth={progressWidth}
    />
  );
};

export default InfoPanelGBContainer;
