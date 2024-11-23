import React, { useContext, useEffect, useState } from "react";
import { TypeCards } from "./index.type";
import Card from "../../components/GameBord/Card/Card.tsx";
import { Context } from "../../context/ContextProvider.tsx";

interface PropsCardContainer {
  cards: TypeCards[];
}
const CardContainer: React.FC<PropsCardContainer> = ({ cards }) => {
  const [shufflCards, setShufflCards] = useState<TypeCards[]>([]);
  const { state, dispatch } = useContext(Context);
  const [foundCard, setFoundCard] = useState<string[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);

  const flipCard = (indx: number, isCurrentOpen: boolean) => {
    if (isCurrentOpen || openCards.length === 2) return;

    setOpenCards((opened) => [...opened, indx]);
  };

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

  useEffect(() => {
    if (openCards.length < 2) return;
    const firstCard = shufflCards[openCards[0]];
    const secondCard = shufflCards[openCards[1]];

    if (secondCard && firstCard.id === secondCard.id) {
      setFoundCard((prevFoundCards) => [...prevFoundCards, firstCard.id]);
      dispatch({
        type: "addCountPoint",
        point: state.stateSessionGame.countPoint + 1,
      });
    } else {
      dispatch({
        type: "subtractCountErrorPoint",
        errorPoint: 1,
      });
    }

    if (foundCard.length + 1 === shufflCards.length / 2) {
      dispatch({ type: "startStopGame", isStartGame: false });
    }

    if (openCards.length === 2) {
      setTimeout(() => {
        setOpenCards([]);
      }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      />
    );
  });
};

export default CardContainer;
