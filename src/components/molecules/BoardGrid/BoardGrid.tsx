import { SquareButton } from "@/components/atoms";
import { Icons } from "@/general/icons";

import "./BoardGrid.scss";

const { LetterO, LetterX } = Icons;

export const BoardGrid = () => {
  const board = Array(9).fill(-1);

  return (
    <div className="board-options">
      {board.map((value, index) => (
        <SquareButton
          key={index}
          onClick={() => {}}
          // disabled={!!~value || !arePlaying}
        >
          {value === 0 ? (
            <LetterO className="icon player-o" />
          ) : value === 1 ? (
            <LetterX className="icon player-x" />
          ) : (
            <></>
          )}
        </SquareButton>
      ))}
    </div>
  );
};
