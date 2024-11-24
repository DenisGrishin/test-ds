import React from "react";
import style from "./InfoPanelGB.module.scss";

import TimerContainer from "../../../container/TimerContainer/TimerContainer.tsx";
import { TypeStateSessionGame } from "../../../context/store/index.type";

interface PropsInfoPanelGB {
  stateSessionGame: TypeStateSessionGame;
  progressWidth: number;
  time: number;
  errorPoint: number;
}

const InfoPanelGameBord: React.FC<PropsInfoPanelGB> = ({
  stateSessionGame,
  progressWidth,
  time,
  errorPoint,
}) => {
  return (
    <ul className={style.infoPanel}>
      <li>
        <span>Таймер:</span>
        <TimerContainer time={time} />
      </li>
      <li>
        <span>Лимит ошибок:</span>
        {errorPoint}
      </li>
      <li>
        <span>Кол-во очков:</span>
        {stateSessionGame.scorePoint}
      </li>
      <li>
        <span>Лучший счёт:</span>
        {stateSessionGame.scoreRecordGame}
      </li>
      <li>
        <span>Сыгранные игры:</span>
        {stateSessionGame.countGame}
      </li>
      <li>Уровень сложности</li>
      <li className={style.progressRow}>
        <span style={{ width: `${progressWidth}%` }} />
      </li>
    </ul>
  );
};

export default InfoPanelGameBord;
