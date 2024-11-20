import React, { useEffect, useMemo, useState } from "react";
import { CatsArray } from "./typeGamebord";
import Card from "./Card.tsx";

interface PropsGameBord {
  catsArray: CatsArray[];
}
const GameBord: React.FC<PropsGameBord> = ({ catsArray }) => {
  const cards = useMemo(() => [...catsArray, ...catsArray], [catsArray]);

  const [foundCard, setFoundCard] = useState<string[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);

  const flipCard = (indx: number) => {
    setOpenCards((opened) => [...opened, indx]);
  };

  useEffect(() => {
    if (openCards.length < 2) return;
    const firstCard = cards[openCards[0]];
    const secondCard = cards[openCards[1]];

    if (secondCard && firstCard === secondCard) {
      setFoundCard([...foundCard, firstCard._id]);
    }

    if (openCards.length === 2) {
      setTimeout(() => {
        setOpenCards([]);
      }, 500);
    }
  }, [openCards, foundCard, cards]);

  return (
    <div className="game-bord">
      <div className="game-bord__cards">
        {cards.map((card, indx) => {
          let isFlip = false;

          if (openCards.includes(indx)) isFlip = true;
          if (foundCard.includes(card._id)) isFlip = true;
          return (
            <Card
              isFlip={isFlip}
              id={card._id}
              indx={indx}
              flipCard={(id) => flipCard(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameBord;
