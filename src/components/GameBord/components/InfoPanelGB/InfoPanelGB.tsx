import React from "react";
import style from "./InfoPanelGB.module.scss";

import TimerContainer from "../../../../container/TimerContainer/TimerContainer.tsx";
import { PropsInfoPanelGB } from "./index.type";

const InfoPanelGameBord: React.FC<PropsInfoPanelGB> = ({
  stateSessionGame,
  progressWidth,
}) => {
  return (
    <ul className={style.infoPanel}>
      <li>
        <span>Таймер:</span>
        <TimerContainer />
      </li>
      <li>
        <span>Лимит ошибок:</span>
        {stateSessionGame.errorPoint}
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
