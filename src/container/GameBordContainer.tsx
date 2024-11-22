import { useMemo } from "react";
import GameBord from "../components/GameBord/GameBord.tsx";
import { CatsArray } from "../components/GameBord/typeGamebord";

const GameBordContainer = () => {
  // const [catsArray, setCatsArray] = useState<CatsArray[]>([]);
  const settingGame = {
    numCards: 4,
    sizeCard: 200,
    typeCard: 4,
  };

  const avatarUrls: CatsArray[] = useMemo(() => {
    const arrayUrls = [];
    for (let i = 0; i < settingGame.numCards; i += 1) {
      const randomStr = Math.random()
        .toString(36)
        .slice(2, settingGame.numCards + 5);

      const avatarUrl = `https://robohash.org/${randomStr}?set=set${settingGame.typeCard}&size=${settingGame.sizeCard}x${settingGame.sizeCard}`;
      arrayUrls.push({ url: avatarUrl, id: randomStr });
    }
    return arrayUrls;
  }, [settingGame.numCards, settingGame.sizeCard, settingGame.typeCard]);

  return (
    <GameBord
      catsArray={avatarUrls}
      sizeCard={settingGame.sizeCard}
      numCards={settingGame.numCards}
    />
  );
};

export default GameBordContainer;
