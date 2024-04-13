import { BoardGrid, BoardOptions, ScoreInfo } from "@/components/molecules";

import "./GameBoard.scss";

export const GameBoard = () => {
  return (
    <section className="game-board__container">
      <BoardOptions />
      <BoardGrid />
      <ScoreInfo />
    </section>
  );
};
