import React, { ReactNode } from "react";
import { TypeStateGame } from "../../container/GameBordContainer/index.type";

interface PropsWrapperGameBord {
  children: ReactNode;
  startGame: () => void;
  stateGame: TypeStateGame;
}
const WrapperGameBord: React.FC<PropsWrapperGameBord> = ({
  children,
  startGame,
  stateGame,
}) => {
  const { isStart, setting } = stateGame;
  return (
    <div
      className={`game-bord__cards ${isStart ? "_start-game" : ""}`}
      style={{
        gridTemplate: `repeat(${setting.numCards / 2},${setting.sizeCard}px) / repeat(${setting.numCards},${setting.sizeCard}px)`,
      }}
    >
      {children}
      <button
        type="button"
        onClick={() => startGame()}
        className="game-bord__start-btn"
      >
        Начать игру
      </button>
    </div>
  );
};

export default WrapperGameBord;
