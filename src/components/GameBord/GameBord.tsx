import React from "react";
import { CatsArray } from "./typeGamebord";
import QuestionIcon from "../../assets/img/icons/questionIcon.svg?react";

interface PropsGameBord {
  catsArray: CatsArray[];
}
const GameBord: React.FC<PropsGameBord> = ({ catsArray }) => {
  return (
    <div className="game-bord">
      <div className="game-bord__cards">
        {catsArray.map((card) => {
          const { _id: nameImg } = card;
          return (
            <div className="card" key={nameImg}>
              <div className="card__front">
                <img src={`https://cataas.com/cat/${nameImg}`} alt="" />
              </div>
              <div className="card__back">
                <QuestionIcon className="card__question-icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameBord;
