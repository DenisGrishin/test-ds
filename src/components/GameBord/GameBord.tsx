import React, { useEffect, useMemo, useState } from "react";
import { CatsArray } from "./typeGamebord";
import QuestionIcon from "../../assets/img/icons/questionIcon.svg?react";

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
            <div
              onClick={() => flipCard(indx)}
              className={`card ${isFlip && "_flip"}`}
              key={card._id}
            >
              <div className="card__wrapper">
                <div className="card__front">
                  <img src={`https://cataas.com/cat/${card._id}`} alt="" />
                </div>
                <div className="card__back">
                  <QuestionIcon className="card__question-icon" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameBord;
