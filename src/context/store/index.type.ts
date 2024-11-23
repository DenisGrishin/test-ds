export type Action =
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
  typeCard: number;
}
export interface TypeStateSessionGame {
  countPoint: number;
  errorPoint: number;
  countGame: number;
  recordGame: number;
}
