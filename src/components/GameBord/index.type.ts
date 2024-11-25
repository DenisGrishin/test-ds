import {
  TypeCards,
  TypeStateGame,
} from "../../container/GameBordContainer/index.type";

export interface PropsGameBord {
  cards: TypeCards[];
  stateGame: TypeStateGame;
  handleStartGame: () => void;
  handleRestartGame: () => void;
  isStart: boolean;
  isWin: boolean;
  isLose: boolean;
  isShowModal: boolean;
}
