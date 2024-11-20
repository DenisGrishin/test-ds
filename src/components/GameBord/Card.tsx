import React from "react";
import QuestionIcon from "../../assets/img/icons/questionIcon.svg?react";

interface PropsCard {
  flipCard: (indx: number) => void;
  indx: number;
  id: string;
  isFlip: boolean;
}

const Card: React.FC<PropsCard> = ({ flipCard, indx, id, isFlip }) => {
  return (
    <div
      onClick={() => flipCard(indx)}
      className={`card ${isFlip && "_flip"}`}
      key={id}
    >
      <div className="card__wrapper">
        <div className="card__front">
          <img src={`https://cataas.com/cat/${id}`} alt="" />
        </div>
        <div className="card__back">
          <QuestionIcon className="card__question-icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
