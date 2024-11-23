import { ReactNode, useMemo, useReducer } from "react";
import { createContext, type Dispatch } from "react";
import { Action, newState, reducer, State } from "./store/store";

interface PropsContextProvider {
  children: ReactNode;
}

interface AppContext {
  state: State;
  dispatch: Dispatch<Action>;
}
export const Context = createContext<AppContext>({
  state: newState(),
  dispatch: () => undefined,
});

const ContextProvider: React.FC<PropsContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, newState());

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
