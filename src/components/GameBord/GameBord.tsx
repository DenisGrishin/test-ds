import React, { useEffect, useState } from "react";

import Card from "./Card.tsx";
import {
  TypeStateGame,
  TypeCards,
} from "../../container/GameBordContainer/typeGameBordContainer.type";
import WrapperGameBord from "./WrapperGameBord.tsx";
import CardContainer from "../../container/GameBordContainer/CardContainer.tsx";

interface PropsGameBord {
  cards: TypeCards[];
  stateGame: TypeStateGame;
  startGame: () => void;
}
const GameBord: React.FC<PropsGameBord> = ({ cards, stateGame, startGame }) => {
  // const [cards, setCards] = useState<TypeCards[]>([]);

  // const [foundCard, setFoundCard] = useState<string[]>([]);
  // const [openCards, setOpenCards] = useState<number[]>([]);

  // const flipCard = (indx: number, isCurrentOpen: boolean) => {
  //   if (isCurrentOpen) return;

  //   setOpenCards((opened) => [...opened, indx]);
  // };

  // useEffect(() => {
  //   const shuffleArray = (array: TypeCards[]): void => {
  //     if (!array || array.length === 0) return;
  //     const shuffledArray = [...array, ...array];

  //     let m = shuffledArray.length;

  //     while (m > 1) {
  //       const i = Math.floor(Math.random() * m);
  //       m -= 1;

  //       const t = shuffledArray[m];
  //       shuffledArray[m] = shuffledArray[i];
  //       shuffledArray[i] = t;
  //     }

  //     setCards(shuffledArray);
  //   };
  //   shuffleArray(imgArray);
  // }, [imgArray]);

  // useEffect(() => {
  //   if (openCards.length < 2) return;
  //   const firstCard = cards[openCards[0]];
  //   const secondCard = cards[openCards[1]];

  //   if (secondCard && firstCard.id === secondCard.id) {
  //     setFoundCard([...foundCard, firstCard.id]);
  //   }

  //   if (openCards.length === 2) {
  //     setTimeout(() => {
  //       setOpenCards([]);
  //     }, 500);
  //   }
  // }, [openCards, foundCard, cards]);

  return (
    <div className="game-bord">
      <WrapperGameBord stateGame={stateGame} startGame={() => startGame()}>
        <CardContainer cards={cards} />
      </WrapperGameBord>
    </div>
  );
};

export default GameBord;
