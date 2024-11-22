import React, { useEffect, useMemo, useState } from "react";
import { CatsArray } from "./typeGamebord";
import Card from "./Card.tsx";

interface PropsGameBord {
  catsArray: CatsArray[];
  sizeCard: number;
  numCards: number;
}
const GameBord: React.FC<PropsGameBord> = ({
  catsArray,
  sizeCard,
  numCards,
}) => {
  const [cards, setCards] = useState<CatsArray[]>([]);

  const [foundCard, setFoundCard] = useState<string[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);

  const flipCard = (indx: number, isCurrentOpen: boolean) => {
    if (isCurrentOpen) return;

    setOpenCards((opened) => [...opened, indx]);
  };

  // const shuffleArray = () => {
  //   const arr: number[] = [];

  //   while (true) {
  //     if (arr.length === cards.length) break;

  //     const randomNum = Math.floor(Math.random() * cards.length) + 1;

  //     if (!arr.includes(randomNum)) {
  //       arr.push(randomNum);
  //     }
  //   }
  // };

  useEffect(() => {
    const shuffleArray = (array: CatsArray[]): void => {
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

      setCards(shuffledArray);
    };
    shuffleArray(catsArray);
  }, [catsArray]);

  useEffect(() => {
    if (openCards.length < 2) return;
    const firstCard = cards[openCards[0]];
    const secondCard = cards[openCards[1]];

    if (secondCard && firstCard.id === secondCard.id) {
      setFoundCard([...foundCard, firstCard.id]);
    }

    if (openCards.length === 2) {
      setTimeout(() => {
        setOpenCards([]);
      }, 500);
    }
  }, [openCards, foundCard, cards]);

  return (
    <div className="game-bord">
      <div
        className="game-bord__cards"
        style={{
          gridTemplate: `repeat(${numCards / 2},${sizeCard}px) / repeat(${numCards},${sizeCard}px)`,
        }}
      >
        {cards.map((card, indx) => {
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
        })}
        {/* <button className="game-bord__start-btn">Начать игру</button> */}
      </div>
    </div>
  );
};

export default GameBord;
