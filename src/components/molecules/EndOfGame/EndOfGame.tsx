import { useGame } from "@/hooks";
import "./EndOfGame.scss";

export const EndOfGame = () => {
  const { nextRound, quitGame } = useGame();

  return (
    <div className="end-of-game end-of-game__container">
      <h2 className="end-of-game__title">YOU WON!</h2>
      <p className="end-of-game__text">X TAKES THE ROUND</p>
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
