import React from "react";

import { PropsWrapperGameBord } from "./index.type";

const WrapperGameBord: React.FC<PropsWrapperGameBord> = ({
  children,
  handleStartGame,
  setting,
  isStart,
}) => {
  return (
    <div
      className={`game-bord__cards ${isStart ? "_start-game" : ""}`}
      style={{
        gridTemplate: `repeat(${setting.numCards === 3 ? 3 : 4},${setting.sizeCard}px) / repeat(${setting.numCards === 6 ? 6 : setting.numCards === 5 ? 5 : setting.numCards === 8 ? 8 : 4} ,${setting.sizeCard}px)`,
      }}
    >
      {children}
      <button
        type="button"
        onClick={() => handleStartGame()}
        className="game-bord__start-btn"
      >
        Начать игру
      </button>
    </div>
  );
};

export default WrapperGameBord;
