import { BoardGrid, BoardOptions, ScoreInfo } from "@/components/molecules";

import "./GameBoard.scss";
import { useGame } from "@/hooks";

export const GameBoard = () => {
  const { playerA, playerB } = useGame();

  console.log({ playerA, playerB });

  return (
    <section className="game-board__container">
      <BoardOptions />
      <BoardGrid />
      <ScoreInfo />
    </section>
  );
};
