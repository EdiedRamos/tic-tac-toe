import { Icons } from "@/general/icons";

import "./PlayerPicker.scss";

export const PlayerPicker = () => {
  return (
    <article className="player-picker__container">
      <p className="picker__info">PICK PLAYER 1'S MARK</p>
      <div className="picker__selector">
        <button>
          <Icons.LetterX />
        </button>
        <button>
          <Icons.LetterO />
        </button>
      </div>
      <p className="picker__tip">REMEMBER: X GOES FIRST</p>
    </article>
  );
};
