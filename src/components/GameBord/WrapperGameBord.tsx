import React, { ReactNode } from "react";
import { TypeStateGame } from "../../container/GameBordContainer/index.type";

interface PropsWrapperGameBord {
  children: ReactNode;
  handleStartGame: () => void;
  stateGame: TypeStateGame;
}
const WrapperGameBord: React.FC<PropsWrapperGameBord> = ({
  children,
  handleStartGame,
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
        onClick={() => handleStartGame()}
        className="game-bord__start-btn"
      >
        Начать игру
      </button>
    </div>
  );
};

export default WrapperGameBord;
