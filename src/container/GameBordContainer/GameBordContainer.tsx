import { useContext, useEffect, useState } from "react";
import GameBord from "../../components/GameBord/GameBord.tsx";

import { Context } from "../../context/ContextProvider.tsx";
import { TypeStateGame, TypeCards } from "./index.type";
import getImageApi from "../../api/api";

const GameBordContainer = () => {
  const { state, dispatch } = useContext(Context);

  const [stateGame, setStateGame] = useState<TypeStateGame>({
    setting: state.setting,
    isStart: state.isStartGame,
    isLoading: false,
  });

  const [cards, setCards] = useState<TypeCards[]>([]);

  useEffect(() => {
    const arrayImg: TypeCards[] = [];

    for (let i = 0; i < stateGame.setting.numCards * 2; i += 1) {
      const randomStr = Math.random()
        .toString(36)
        .slice(2, stateGame.setting.numCards + 5);

      const avatarUrl = stateGame.isStart
        ? `https://robohash.org/${randomStr}?set=set${stateGame.setting.typeImg}&size=${stateGame.setting.sizeCard}x${stateGame.setting.sizeCard}`
        : ``;
      arrayImg.push({ url: avatarUrl, id: randomStr });
    }

    if (stateGame.isStart) {
      getImageApi(arrayImg)
        .then(() => {
          setCards(arrayImg);
          setStateGame((prev) => {
            return {
              ...prev,
              isLoading: false,
            };
          });
        })
        .catch((error) => {
          console.error("Ошибка при загрузке изображений:", error);
        });
    } else {
      setCards(arrayImg);
    }
  }, [stateGame]);

  const handleStartGame = () => {
    dispatch({ type: "startStopGame", isToogleGame: true });
    setStateGame({
      setting: state.setting,
      isStart: true,
      isLoading: true,
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
