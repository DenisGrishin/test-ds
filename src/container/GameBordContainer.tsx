import React, { useEffect, useState } from "react";
import getCatsApi from "../api/api";
import GameBord from "../components/GameBord/GameBord.tsx";
import { CatsArray } from "../components/GameBord/typeGamebord";

const GameBordContainer = () => {
  const [catsArray, setCatsArray] = useState<CatsArray[]>([]);

  useEffect(() => {
    getCatsApi().then((cats) => {
      setCatsArray(cats);
    });
  }, []);

  return <GameBord catsArray={catsArray} />;
};

export default GameBordContainer;
