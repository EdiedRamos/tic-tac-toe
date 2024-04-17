import { SquareButton } from "@/components/atoms";
import { Icons } from "@/general/icons";

import "./BoardGrid.scss";
import { useGame } from "@/hooks";

const { LetterO, LetterX } = Icons;

export const BoardGrid = () => {
  const { board, handleSelect } = useGame();

  return (
    <div className="board-options">
      {board.map((value, index) => (
        <SquareButton
          key={index}
          onClick={() => handleSelect(index)}
          disabled={!!~value}
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
