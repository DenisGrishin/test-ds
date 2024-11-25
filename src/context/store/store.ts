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
    // не успел, сделать юезров
    userInfo: {
      avatar: "https://robohash.org/sdzxc123ad?set=set4&size=100x100",
      name: "Denis",
      record: 0,
      countGamesAll: 0,
    },
    stateSessionGame: {
      scorePoint: 0,
      countGame: 0,
      scoreRecordGame: 0,
    },
    isStartGame: false,
    isWin: false,
    isLose: false,
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
        setting: {
          ...state.setting,
          errorPoint: Math.max(state.setting.errorPoint - action.errorPoint, 0),
        },
      };
    case "startStopGame":
      return {
        ...state,
        isStartGame: action.isToogleGame,
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
    default:
      return state;
  }
};
