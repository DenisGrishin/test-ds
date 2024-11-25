import React from "react";
import QuestionIcon from "../../../../assets/img/icons/questionIcon.svg?react";
import { PropsCard } from "./index.type";

const Card: React.FC<PropsCard> = ({
  flipCard,
  indx,
  urlImg,
  isFlip,
  sizeCard,
}) => {
  return (
    <div
      onClick={() => flipCard(indx, isFlip)}
      className={`card ${isFlip ? "_flip" : ""}`}
      style={{ width: `${sizeCard}px`, height: `${sizeCard}px` }}
    >
      <div className="card__wrapper">
        <div className="card__front">
          <img src={urlImg} alt="" />
        </div>
        <div className="card__back">
          <QuestionIcon className="card__question-icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
