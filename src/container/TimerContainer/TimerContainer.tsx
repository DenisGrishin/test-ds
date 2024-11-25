import { useCallback, useContext, useEffect, useState } from "react";
import Timer from "../../components/Timer/Timer.tsx";
import { Context } from "../../context/ContextProvider.tsx";

const TimerContainer = () => {
  const { state, dispatch } = useContext(Context);
  const minutes = Math.floor(state.stateSessionGame.time / 60);
  const seconds = state.stateSessionGame.time % 60;

  const [over, setOver] = useState(false);
  const [[m, s], setTime] = useState([minutes, seconds]);

  const tick = useCallback(() => {
    if (!over) return;

    if (m === 0 && s === 1) {
      setTime([0, 0]);
      setOver(false);
      dispatch({ type: "startStopGame", payload: false });
      dispatch({ type: "setLose", payload: true });
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  }, [m, s, over, dispatch]);

  useEffect(() => {
    if (!over) return;
    const timerID = setInterval(tick, 1000);
    /* eslint-disable-next-line consistent-return */
    return () => clearInterval(timerID);
  }, [tick, over]);

  useEffect(() => {
    setOver(state.isStartTimer);
  }, [state.isStartTimer]);

  useEffect(() => {
    setTime([minutes, seconds]);
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isRestartGame]);
  return <Timer minutes={m} seconds={s} />;
};
export default TimerContainer;
