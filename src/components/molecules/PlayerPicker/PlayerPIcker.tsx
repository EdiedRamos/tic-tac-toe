import { Icons } from "@/general/icons";

import "./PlayerPicker.scss";
import { useGame } from "@/hooks/Game/useGame";

export const PlayerPicker = () => {
  const { playerA, handleMark } = useGame();

  return (
    <article className="player-picker__container">
      <p className="picker__info">PICK PLAYER 1'S MARK</p>
      <div className="picker__selector">
        <button
          className={`${playerA.getMark === "x" ? "selected" : ""}`}
          onClick={() => handleMark("x")}
        >
          <Icons.LetterX />
        </button>
        <button
          className={`${playerA.getMark === "o" ? "selected" : ""}`}
          onClick={() => handleMark("o")}
        >
          <Icons.LetterO />
        </button>
      </div>
      <p className="picker__tip">REMEMBER: X GOES FIRST</p>
    </article>
  );
};
