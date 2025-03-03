import React from "react";

import WrapperGameBord from "./components/WrapperGameBord/WrapperGameBord.tsx";
import CardContainer from "../../container/GameBordContainer/CardContainer/CardContainer.tsx";
import InfoPanelGBContainer from "../../container/GameBordContainer/InfoPanelGBContainer/InfoPanelGBContainer.tsx";
import Preloader from "../Preloader/Preloader.tsx";
import Modal from "../Modal/Modal.tsx";
import { PropsGameBord } from "./index.type";
import ContentModal from "../Modal/components/ContentModal.tsx";

const GameBord: React.FC<PropsGameBord> = ({
  cards,
  stateGame,
  handleStartGame,

  isStart,
  isWin,
  isLose,
  isShowModal,
  handleRestartGame,
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
      <Modal iShow={isShowModal}>
        {isWin && (
          <ContentModal
            text="🎉 Поздравляем! Вы выиграли! 🎉"
            btnText=" Сыграть еще раз"
            onClick={() => handleRestartGame()}
          />
        )}
        {isLose && (
          <ContentModal
            text="😢 К сожалению, вы проиграли. 😢"
            btnText=" Сыграть еще раз"
            onClick={() => handleRestartGame()}
          />
        )}
      </Modal>
      <div />
    </div>
  );
};

export default GameBord;
