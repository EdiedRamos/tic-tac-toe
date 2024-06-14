import "./BoardGrid.scss";

import { Icons } from "@/general/icons";
import { SquareButton } from "@/components/atoms";
import { useGame } from "@/hooks";

const { LetterO, LetterX } = Icons;

export const BoardGrid = () => {
  const { board, handleSelect, isOver, isMachineTurn } = useGame();

  return (
    <div className="board-options">
      {board.map((value, index) => (
        <SquareButton
          key={index}
          onClick={() => handleSelect(index)}
          disabled={!!~value || isOver || isMachineTurn}
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
