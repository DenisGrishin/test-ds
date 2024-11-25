export type Action =
  | {
      type: "setLose";
      payload: boolean;
    }
  | {
      type: "setWin";
      payload: boolean;
    }
  | {
      type: "updateSetting";
      payload: TypeSetting;
    }
  | {
      type: "startStopGame";
      isToogleGame: boolean;
    }
  | {
      type: "subtractCountErrorPoint";
      errorPoint: number;
    }
  | {
      type: "addCountPoint";
      point: number;
    };

export type State = {
  setting: TypeSetting;
  userInfo: TypeUserInfo;
  stateSessionGame: TypeStateSessionGame;
  isStartGame: boolean;
  isWin: boolean;
  isLose: boolean;
};

export interface TypeUserInfo {
  avatar: string;
  name: string;
  record: number;
  countGamesAll: number;
}
export interface TypeSetting {
  numCards: number;
  sizeCard: number;
  time: number;
  errorPoint: number;
  typeImg: number;
}
export interface TypeStateSessionGame {
  scorePoint: number;
  countGame: number;
  scoreRecordGame: number;
}
