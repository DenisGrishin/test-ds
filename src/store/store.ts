export type Action = {
  type: "getSetting";
  prop: {
    numCards: number;
    sizeCard: number;
    typeCard: number;
  };
};

export type State = {
  setting: {
    numCards: number;
    sizeCard: number;
    typeCard: number;
  };
};

export const newState = (): State => {
  return {
    setting: {
      numCards: 4,
      sizeCard: 200,
      typeCard: 4,
    },
  };
};

export const reducer = (state: State, action: Action): State => {
  console.log("dispatch");
  console.log(action);

  switch (action.type) {
    case "getSetting":
      return {
        ...state,
        setting: action.prop,
      };
    default:
      return state;
  }
};
