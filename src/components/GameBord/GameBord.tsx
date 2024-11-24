import React from "react";

import {
  TypeStateGame,
  TypeCards,
} from "../../container/GameBordContainer/index.type";
import WrapperGameBord from "./WrapperGameBord.tsx";
import CardContainer from "../../container/GameBordContainer/CardContainer.tsx";
import InfoPanelGBContainer from "../../container/GameBordContainer/InfoPanelGBContainer/InfoPanelGBContainer.tsx";
import Preloader from "../Preloader/Preloader.tsx";

interface PropsGameBord {
  cards: TypeCards[];
  stateGame: TypeStateGame;
  handleStartGame: () => void;
  isStart: boolean;
}
const GameBord: React.FC<PropsGameBord> = ({
  cards,
  stateGame,
  handleStartGame,
  isStart,
}) => {
  return (
    <div className="game-bord">
      <InfoPanelGBContainer />
      <WrapperGameBord
        setting={stateGame.setting}
        handleStartGame={() => handleStartGame()}
        isStart={isStart}
      >
        {stateGame.isLoading && <Preloader />}
        <CardContainer cards={cards} />
      </WrapperGameBord>
    </div>
  );
};

export default GameBord;
