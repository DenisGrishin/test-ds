import React from "react";

import {
  TypeStateGame,
  TypeCards,
} from "../../container/GameBordContainer/index.type";
import WrapperGameBord from "./WrapperGameBord.tsx";
import CardContainer from "../../container/GameBordContainer/CardContainer.tsx";
import InfoPanelGameBordContainer from "../../container/GameBordContainer/InfoPanelGBContainer/InfoPanelGBContainer.tsx";

interface PropsGameBord {
  cards: TypeCards[];
  stateGame: TypeStateGame;
  handleStartGame: () => void;
}
const GameBord: React.FC<PropsGameBord> = ({
  cards,
  stateGame,
  handleStartGame,
}) => {
  return (
    <div className="game-bord">
      <InfoPanelGameBordContainer />
      <WrapperGameBord
        stateGame={stateGame}
        handleStartGame={() => handleStartGame()}
      >
        <CardContainer cards={cards} />
      </WrapperGameBord>
    </div>
  );
};

export default GameBord;
