import { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import GameBord from "../../components/GameBord/GameBord.tsx";

import { Context } from "../../context/ContextProvider.tsx";
import { TypeStateGame, TypeCards } from "./index.type";
import getImageApi from "../../api/api";

const GameBordContainer = () => {
  const { state, dispatch } = useContext(Context);
  const [isShowModal, setIsShowModal] = useState(false);
  const [stateGame, setStateGame] = useState<TypeStateGame>({
    setting: state.setting,
    isLoading: false,
  });

  const [cards, setCards] = useState<TypeCards[]>([]);
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: "startStopGame", payload: false });
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  useEffect(() => {
    setIsShowModal(state.isWin || state.isLose);
  }, [state.isWin, state.isLose]);

  const generateCards = () => {
    const arrayImg: TypeCards[] = [];
    for (let i = 0; i < stateGame.setting.numCards * 2; i += 1) {
      const randomStr = Math.random()
        .toString(36)
        .slice(2, stateGame.setting.numCards + 5);
      const avatarUrl = state.isStartGame
        ? `https://robohash.org/${randomStr}?set=set${stateGame.setting.typeImg}&size=${stateGame.setting.sizeCard}x${stateGame.setting.sizeCard}`
        : ``;

      arrayImg.push({ url: avatarUrl, id: randomStr });
    }
    return arrayImg;
  };

  useEffect(() => {
    const arrayImg = generateCards();

    if (state.isStartGame) {
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
          dispatch({ type: "togglTimer", payload: true });
        })
        .catch((error) => {
          console.error("Ошибка при загрузке изображений:", error);
        });
    } else {
      setCards(arrayImg);
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isStartGame]);

  const handleStartGame = () => {
    dispatch({ type: "startStopGame", payload: true });
    dispatch({ type: "setIsRestartGame", payload: false });
    setStateGame({
      setting: state.setting,
      isLoading: true,
    });
  };
  const handleRestartGame = () => {
    setIsShowModal(false);
    dispatch({ type: "setIsRestartGame", payload: true });
    dispatch({ type: "startStopGame", payload: false });
    dispatch({ type: "setLose", payload: false });
    dispatch({ type: "setWin", payload: false });
  };
  return (
    <GameBord
      cards={cards}
      stateGame={stateGame}
      isStart={state.isStartGame}
      isWin={state.isWin}
      isLose={state.isLose}
      handleStartGame={() => handleStartGame()}
      isShowModal={isShowModal}
      handleRestartGame={() => handleRestartGame()}
    />
  );
};

export default GameBordContainer;
