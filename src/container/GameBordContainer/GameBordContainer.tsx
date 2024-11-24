import { useContext, useEffect, useMemo, useState } from "react";
import GameBord from "../../components/GameBord/GameBord.tsx";

import { Context } from "../../context/ContextProvider.tsx";
import { TypeStateGame, TypeCards } from "./index.type";
import getImageApi from "../../api/api.ts";

const GameBordContainer = () => {
  const { state, dispatch } = useContext(Context);

  const [stateGame, setStateGame] = useState<TypeStateGame>({
    setting: state.setting,
    isStart: state.isStartGame,
  });
  const [cards, setCards] = useState<TypeCards[]>([]);
  // const cards: TypeCards[] = useMemo(() => {
  //   const arrayUrls = [];
  //   for (let i = 0; i < stateGame.setting.numCards; i += 1) {
  //     const randomStr = Math.random()
  //       .toString(36)
  //       .slice(2, stateGame.setting.numCards + 5);

  //     const avatarUrl = `https://robohash.org/${randomStr}?set=set${stateGame.setting.typeCard}&size=${stateGame.setting.sizeCard}x${stateGame.setting.sizeCard}`;
  //     arrayUrls.push({ url: avatarUrl, id: randomStr });
  //   }
  //   return arrayUrls;
  // }, [stateGame]);

  useEffect(() => {
    const arrayImg: TypeCards[] = [];
    for (let i = 0; i < stateGame.setting.numCards; i += 1) {
      const randomStr = Math.random()
        .toString(36)
        .slice(2, stateGame.setting.numCards + 5);

      const avatarUrl = `https://robohash.org/${randomStr}?set=set${stateGame.setting.typeCard}&size=${stateGame.setting.sizeCard}x${stateGame.setting.sizeCard}`;
      arrayImg.push({ url: avatarUrl, id: randomStr });
    }

    getImageApi(arrayImg)
      .then(() => {
        setCards(arrayImg);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке изображений:", error);
      });
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
