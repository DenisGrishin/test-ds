import { useContext, useMemo, useState } from "react";
import GameBord from "../../components/GameBord/GameBord.tsx";

import { Context } from "../../context/ContextProvider.tsx";
import { TypeStateGame, TypeCards } from "./index.type";

const GameBordContainer = () => {
  const { state, dispatch } = useContext(Context);

  const [stateGame, setStateGame] = useState<TypeStateGame>({
    setting: state.setting,
    isStart: state.isStartGame,
  });

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

  const handleStartGame = () => {
    dispatch({ type: "startStopGame", isToogleGame: true });
    setStateGame((prev) => {
      return {
        ...prev,
        isStart: true,
      };
    });
  };

  return (
    <GameBord
      cards={cards}
      stateGame={stateGame}
      handleStartGame={() => handleStartGame()}
    />
  );
};

export default GameBordContainer;
