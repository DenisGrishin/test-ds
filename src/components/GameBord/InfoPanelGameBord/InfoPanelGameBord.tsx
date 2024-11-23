import React from "react";
import style from "./InfoPanelGameBord.module.scss";

import TimerContainer from "../../../container/TimerContainer/TimerContainer.tsx";
import { TypeStateSessionGame } from "../../../context/store/index.type";

interface PropsInfoPanelGameBord {
  stateSessionGame: TypeStateSessionGame;
  progressWidth: number;
}

const InfoPanelGameBord: React.FC<PropsInfoPanelGameBord> = ({
  stateSessionGame,
  progressWidth,
}) => {
  return (
    <ul className={style.infoPanel}>
      <li>
        <span>Таймер:</span>
        <TimerContainer seconds={0} minutes={1} />
      </li>
      <li>
        <span>Лимит ошибок:</span>
        {stateSessionGame.errorPoint}
      </li>
      <li>
        <span>Кол-во очков:</span>
        {stateSessionGame.countPoint}
      </li>
      <li>
        <span>Лучший счёт:</span>
        {stateSessionGame.recordGame}
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
