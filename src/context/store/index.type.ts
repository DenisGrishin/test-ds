export type Action =
  | {
      type: "setIsRestartGame";
      payload: boolean;
    }
  | {
      type: "togglTimer";
      payload: boolean;
    }
  | {
      type: "updateStateSession";
      payload: TypeStateSessionGame;
    }
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
      payload: boolean;
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
  stateSessionGame: TypeStateSessionGame;
  isStartGame: boolean;
  isWin: boolean;
  isLose: boolean;
  isStartTimer: boolean;
  isRestartGame: boolean;
};

export interface TypeSetting {
  numCards: number;
  sizeCard: number;
  time: number;
  errorPoint: number;
  typeImg: number;
}
export interface TypeStateSessionGame {
  time: number;
  errorPoint: number;
  scorePoint: number;
  countGame: number;
  scoreRecordGame: number;
}
