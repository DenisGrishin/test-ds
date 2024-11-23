import { useContext, useEffect, useMemo, useState } from "react";
import GameBord from "../components/GameBord/GameBord.tsx";
import { CatsArray } from "../components/GameBord/typeGamebord";
import { Context } from "../context/ContextProvider.tsx";

const GameBordContainer = () => {
  // const [catsArray, setCatsArray] = useState<CatsArray[]>([]);
  const [setting, setSetting] = useState<{
    numCards: number;
    sizeCard: number;
    typeCard: number;
  }>({ numCards: 0, sizeCard: 0, typeCard: 0 });
  const { state, dispatch } = useContext(Context);

  const avatarUrls: CatsArray[] = useMemo(() => {
    const arrayUrls = [];
    for (let i = 0; i < setting.numCards; i += 1) {
      const randomStr = Math.random()
        .toString(36)
        .slice(2, setting.numCards + 5);

      const avatarUrl = `https://robohash.org/${randomStr}?set=set${setting.typeCard}&size=${setting.sizeCard}x${setting.sizeCard}`;
      arrayUrls.push({ url: avatarUrl, id: randomStr });
    }
    return arrayUrls;
  }, [setting.numCards, setting.sizeCard, setting.typeCard]);

  useEffect(() => setSetting(state.setting), [state.setting]);
  const startGame = () => {
    dispatch({
      type: "getSetting",
      prop: { numCards: 1, sizeCard: 100, typeCard: 3 },
    });
  };

  return (
    <GameBord
      catsArray={avatarUrls}
      sizeCard={setting.sizeCard}
      numCards={setting.numCards}
      startGame={startGame}
    />
  );
};

export default GameBordContainer;
