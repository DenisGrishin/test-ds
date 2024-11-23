import { useContext, useMemo, useState } from "react";
import GameBord from "../../components/GameBord/GameBord.tsx";

import { Context } from "../../context/ContextProvider.tsx";
import { TypeStateGame, TypeCards } from "./index.type";

const GameBordContainer = () => {
  const [stateGame, setStateGame] = useState<TypeStateGame>({
    setting: { numCards: 4, sizeCard: 200, typeCard: 3 },
    isStart: false,
  });

  const { state, dispatch } = useContext(Context);

  const cards: TypeCards[] = useMemo(() => {
    const arrayUrls = [];
    for (let i = 0; i < stateGame.setting.numCards; i += 1) {
      const randomStr = Math.random()
        .toString(36)
        .slice(2, stateGame.setting.numCards + 5);

      const avatarUrl = `https://robohash.org/${randomStr}?set=set${stateGame.setting.typeCard}&size=${stateGame.setting.sizeCard}x${stateGame.setting.sizeCard}`;
      arrayUrls.push({ url: avatarUrl, id: randomStr });
    }
    return arrayUrls;
  }, [stateGame]);

  const startGame = () => {
    dispatch({
      type: "getSetting",
      prop: { numCards: 4, sizeCard: 200, typeCard: 3 },
    });
    setStateGame({ isStart: true, setting: state.setting });
  };

  return (
    <GameBord
      cards={cards}
      stateGame={stateGame}
      startGame={() => startGame()}
    />
  );
};

export default GameBordContainer;
