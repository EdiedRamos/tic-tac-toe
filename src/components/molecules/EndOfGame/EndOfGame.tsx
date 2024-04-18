import { useGame } from "@/hooks";
import { getText, getTitle } from "./endOfGame.utils";

import "./EndOfGame.scss";

export const EndOfGame = () => {
  const { nextRound, quitGame, winner } = useGame();

  return (
    <div className="end-of-game end-of-game__container">
      <h2 className="end-of-game__title">{getTitle(winner)}</h2>
      <p className="end-of-game__text">{getText(winner)}</p>
      <div className="end-of-game__controls">
        <button className="end-of-game__quit" onClick={quitGame}>
          QUIT
        </button>
        <button className="end-of-game__next-round" onClick={nextRound}>
          NEXT ROUND
        </button>
      </div>
    </div>
  );
};
