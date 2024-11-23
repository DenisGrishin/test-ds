import React, { useCallback, useContext, useEffect, useState } from "react";
import Timer from "../../components/Timer/Timer.tsx";
import { Context } from "../../context/ContextProvider.tsx";

interface PropsTimerContainer {
  minutes: number;
  seconds: number;
}
const TimerContainer: React.FC<PropsTimerContainer> = ({
  minutes = 1,
  seconds = 30,
}) => {
  const { state } = useContext(Context);

  const [over, setOver] = useState(false);
  const [[m, s], setTime] = useState([minutes, seconds]);

  const tick = useCallback(() => {
    if (!over) return;

    if (m === 0 && s === 0) {
      setOver(false);
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  }, [m, s, over]);

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  }, [over, tick]);

  useEffect(() => {
    setOver(state.isStartGame);
  }, [state.isStartGame]);

  return <Timer minutes={m} seconds={s} />;
};
export default TimerContainer;
