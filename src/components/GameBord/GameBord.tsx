import React from "react";

import WrapperGameBord from "./components/WrapperGameBord/WrapperGameBord.tsx";
import CardContainer from "../../container/GameBordContainer/CardContainer/CardContainer.tsx";
import InfoPanelGBContainer from "../../container/GameBordContainer/InfoPanelGBContainer/InfoPanelGBContainer.tsx";
import Preloader from "../Preloader/Preloader.tsx";
import Modal from "../Modal/Modal.tsx";
import { PropsGameBord } from "./index.type";

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
          <div className="modal">
            <div className="modalTitle">🎉 Поздравляем! Вы выиграли! 🎉</div>
            <button
              onClick={() => handleRestartGame()}
              type="button"
              className="modalBtn"
            >
              Сыграть еще раз
            </button>
          </div>
        )}
        {isLose && (
          <div className="modal">
            <div className="modalTitle">😢 К сожалению, вы проиграли. 😢</div>
            <button
              onClick={() => handleRestartGame()}
              type="button"
              className="modalBtn"
            >
              Сыграть еще раз
            </button>
          </div>
        )}
      </Modal>
      <div />
    </div>
  );
};

export default GameBord;
