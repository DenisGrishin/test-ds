import { Action, State } from "./index.type";

export const newState = (): State => {
  return {
    setting: {
      numCards: 3,
      sizeCard: 125,
      time: 150,
      errorPoint: 15,
      typeImg: 4,
    },

    stateSessionGame: {
      time: 150,
      errorPoint: 15,
      scorePoint: 0,
      countGame: 0,
      scoreRecordGame: 0,
    },
    isStartGame: false,
    isStartTimer: false,
    isWin: false,
    isLose: false,
    isRestartGame: false,
  };
};

export const reducer = (state: State, action: Action): State => {
  console.log("dispatch", action);

  switch (action.type) {
    case "addCountPoint":
      return {
        ...state,
        stateSessionGame: {
          ...state.stateSessionGame,
          scorePoint: state.stateSessionGame.scorePoint + action.point,
        },
      };
    case "subtractCountErrorPoint":
      return {
        ...state,
        stateSessionGame: {
          ...state.stateSessionGame,
          errorPoint: Math.max(
            state.stateSessionGame.errorPoint - action.errorPoint,
            0,
          ),
        },
      };
    case "startStopGame":
      return {
        ...state,
        isStartGame: action.payload,
      };
    case "updateSetting":
      return {
        ...state,
        setting: {
          ...action.payload,
        },
      };
    case "setWin":
      return {
        ...state,
        isWin: action.payload,
      };
    case "setLose":
      return {
        ...state,
        isLose: action.payload,
      };
    case "updateStateSession":
      return {
        ...state,
        stateSessionGame: action.payload,
      };
    case "togglTimer":
      return {
        ...state,
        isStartTimer: action.payload,
      };
    case "setIsRestartGame":
      return {
        ...state,
        isRestartGame: action.payload,
      };
    default:
      return state;
  }
};
