import { useContext, useEffect, useState } from "react";
import GameBord from "../../components/GameBord/GameBord.tsx";

import { Context } from "../../context/ContextProvider.tsx";
import { TypeStateGame, TypeCards } from "./index.type";
import getImageApi from "../../api/api";

const GameBordContainer = () => {
  const { state, dispatch } = useContext(Context);
  const [isStart, setIsStart] = useState(state.isStartGame);
  const [isShowModal, setIsShowModal] = useState(false);
  const [stateGame, setStateGame] = useState<TypeStateGame>({
    setting: state.setting,
    isLoading: false,
  });

  const [cards, setCards] = useState<TypeCards[]>([]);
  useEffect(() => {
    setIsShowModal(state.isWin);
  }, [state.isWin]);
  useEffect(() => {
    setIsShowModal(state.isLose);
  }, [state.isLose]);
  useEffect(() => {
    const arrayImg: TypeCards[] = [];
    // создаем массив с объектами картинок
    for (let i = 0; i < stateGame.setting.numCards * 2; i += 1) {
      const randomStr = Math.random()
        .toString(36)
        .slice(2, stateGame.setting.numCards + 5);

      const avatarUrl = isStart
        ? `https://robohash.org/${randomStr}?set=set${stateGame.setting.typeImg}&size=${stateGame.setting.sizeCard}x${stateGame.setting.sizeCard}`
        : ``;
      arrayImg.push({ url: avatarUrl, id: randomStr });
    }

    if (isStart) {
      // некое подобие апи
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
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStart]);

  const handleStartGame = () => {
    dispatch({ type: "startStopGame", isToogleGame: true });
    setStateGame({
      setting: state.setting,
      isLoading: true,
    });
    setIsStart(true);
  };

  return (
    <GameBord
      cards={cards}
      stateGame={stateGame}
      isStart={isStart}
      isWin={state.isWin}
      isLose={state.isLose}
      handleStartGame={() => handleStartGame()}
      setIsShowModal={() => setIsShowModal(false)}
      isShowModal={isShowModal}
    />
  );
};

export default GameBordContainer;
