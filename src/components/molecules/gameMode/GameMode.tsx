import "./GameMode.scss";

import { useGame } from "@/hooks";

export const GameMode = () => {
  const { handleStart } = useGame();
  return (
    <div className="game-mode__container">
      <button className="vs-cpu" onClick={() => handleStart("cpu")}>
        NEW GAME (VS CPU)
      </button>
      <button className="vs-player" onClick={() => handleStart("human")}>
        NEW GAME (VS PLAYER)
      </button>
    </div>
  );
};
