import React from "react";

import {
  TypeStateGame,
  TypeCards,
} from "../../container/GameBordContainer/index.type";
import WrapperGameBord from "./WrapperGameBord.tsx";
import CardContainer from "../../container/GameBordContainer/CardContainer.tsx";

interface PropsGameBord {
  cards: TypeCards[];
  stateGame: TypeStateGame;
  startGame: () => void;
}
const GameBord: React.FC<PropsGameBord> = ({ cards, stateGame, startGame }) => {
  return (
    <div className="game-bord">
      <WrapperGameBord stateGame={stateGame} startGame={() => startGame()}>
        <CardContainer cards={cards} />
      </WrapperGameBord>
    </div>
  );
};

export default GameBord;
