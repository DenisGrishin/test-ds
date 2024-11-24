import { Action, State } from "./index.type";

export const newState = (): State => {
  return {
    setting: {
      numCards: 3,
      sizeCard: 125,
      typeCard: 4,
    },
    userInfo: {
      avatar: "https://robohash.org/sdzxc123ad?set=set4&size=100x100",
      name: "Denis",
      record: 0,
      countGamesAll: 0,
    },
    stateSessionGame: {
      countPoint: 0,
      errorPoint: 10,
      countGame: 0,
      recordGame: 0,
    },
    isStartGame: false,
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
          countPoint: state.stateSessionGame.countPoint + action.point,
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
        isStartGame: action.isToogleGame,
      };
    case "updateSetting":
      return {
        ...state,
        setting: {
          ...state.setting,
          [action.option]: action.payload,
        },
      };
    default:
      return state;
  }
};
