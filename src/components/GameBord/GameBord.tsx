import React from "react";

import {
  TypeStateGame,
  TypeCards,
} from "../../container/GameBordContainer/index.type";
import WrapperGameBord from "./WrapperGameBord.tsx";
import CardContainer from "../../container/GameBordContainer/CardContainer.tsx";
import InfoPanelGBContainer from "../../container/GameBordContainer/InfoPanelGBContainer/InfoPanelGBContainer.tsx";
import Preloader from "../Preloader/Preloader.tsx";
import Modal from "../Modal/Modal.tsx";

interface PropsGameBord {
  cards: TypeCards[];
  stateGame: TypeStateGame;
  handleStartGame: () => void;
  setIsShowModal: () => void;
  handleRestartGame: () => void;
  isStart: boolean;
  isWin: boolean;
  isLose: boolean;
  isShowModal: boolean;
}
const GameBord: React.FC<PropsGameBord> = ({
  cards,
  stateGame,
  handleStartGame,
  setIsShowModal,
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
      <Modal iShow={isShowModal} setIsShowModal={() => setIsShowModal()}>
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
    </div>
  );
};

export default GameBord;
