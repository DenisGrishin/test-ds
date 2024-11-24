import React, { useContext, useEffect, useState } from "react";
import { TypeCards } from "./index.type";
import Card from "../../components/GameBord/Card/Card.tsx";
import { Context } from "../../context/ContextProvider.tsx";

interface PropsCardContainer {
  cards: TypeCards[];
}
const CardContainer: React.FC<PropsCardContainer> = ({ cards }) => {
  const { state, dispatch } = useContext(Context);
  const [shufflCards, setShufflCards] = useState<TypeCards[]>([]);
  const [foundCard, setFoundCard] = useState<string[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);

  const { setting } = state;

  const flipCard = (indx: number, isCurrentOpen: boolean) => {
    if (!state.isStartGame || isCurrentOpen || openCards.length === 2) return;

    setOpenCards((opened) => [...opened, indx]);
  };

  const stopGame = () => {
    dispatch({ type: "startStopGame", isToogleGame: false });
  };
  // перемешиваем массив с картинками
  useEffect(() => {
    const shuffleArray = (array: TypeCards[]): void => {
      if (!array || array.length === 0) return;
      const shuffledArray = [...array, ...array];

      let m = shuffledArray.length;

      while (m > 1) {
        const i = Math.floor(Math.random() * m);
        m -= 1;

        const t = shuffledArray[m];
        shuffledArray[m] = shuffledArray[i];
        shuffledArray[i] = t;
      }
      setShufflCards(shuffledArray);
    };

    shuffleArray(cards);
  }, [cards]);
  //  устанавливаем игру когда закончился лимит ошибок или открыли все карточки
  useEffect(() => {
    if (!setting.errorPoint) {
      stopGame();
      dispatch({ type: "setLose", payload: true });
    }
    if (foundCard.length !== 0 && foundCard.length === shufflCards.length / 2) {
      stopGame();
      dispatch({ type: "setWin", payload: true });
    }

    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setting.errorPoint, foundCard]);
  //  действия с карточкой
  useEffect(() => {
    if (openCards.length < 2) return;

    const firstCard = shufflCards[openCards[0]];
    const secondCard = shufflCards[openCards[1]];

    if (secondCard && firstCard.id === secondCard.id) {
      setFoundCard((prevFoundCards) => [...prevFoundCards, firstCard.id]);
      dispatch({
        type: "addCountPoint",
        point: 1,
      });
    }

    if (secondCard && firstCard.id !== secondCard.id) {
      dispatch({
        type: "subtractCountErrorPoint",
        errorPoint: 1,
      });
    }

    if (openCards.length === 2) {
      setTimeout(() => {
        setOpenCards([]);
      }, 300);
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openCards]);

  return shufflCards.map((card, indx) => {
    let isFlip = false;

    if (openCards.includes(indx)) isFlip = true;
    if (foundCard.includes(card.id)) isFlip = true;
    return (
      <Card
        key={indx}
        isFlip={isFlip}
        urlImg={card.url}
        indx={indx}
        flipCard={(id, isCurrentOpen) => flipCard(id, isCurrentOpen)}
        sizeCard={setting.sizeCard}
      />
    );
  });
};

export default CardContainer;
