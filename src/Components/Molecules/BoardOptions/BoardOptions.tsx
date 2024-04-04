import { ScoreLabel, SquareButton } from "@/Components/Atoms";

import "./BoardOptions.scss";
import { Icons } from "@/General/Icons";
import { useEffect, useState } from "react";

const { LetterO, LetterX } = Icons;

const winningMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 9],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 9],
  [0, 4, 9],
  [2, 4, 6],
];

const isThereAWinner = (board: Array<number>): number => {
  for (const move of winningMoves) {
    const diff = new Set();
    for (const idx of move) {
      diff.add(board[idx]);
    }
    if (diff.size === 1 && !!~board[move[0]]) {
      return board[move[0]];
    }
  }
  return -1;
};

export const BoardOptions = () => {
  const [board, setBoard] = useState<Array<number>>(Array(9).fill(-1));
  const [turn, setTurn] = useState<boolean>(false);
  const [arePlaying, setArePlaying] = useState(true);
  const [gameLabel, setGameLabel] = useState<string>("...");
  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);
  const [draw, setDraw] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setBoard((prev) =>
      prev.map((val, index) => (index === selectedIndex ? (turn ? 1 : 0) : val))
    );
    setTurn((prev) => !prev);
  };

  useEffect(() => {
    const winner = isThereAWinner(board);
    if (~winner) {
      setGameLabel(`Gano ${winner === 0 ? "O" : "X"}`);
      if (winner === 0) setWins((prev) => prev + 1);
      else setLoses((prev) => prev + 1);
      setArePlaying(false);
    } else if (!board.some((value) => value === -1)) {
      setGameLabel("Empate");
      setDraw((prev) => prev + 1);
      setArePlaying(false);
    }
  }, [board]);

  const handleRestore = () => {
    setBoard(Array(9).fill(-1));
    setGameLabel("...");
    setArePlaying(true);
  };

  return (
    <>
      <p style={{ fontSize: "3rem", color: "white", textAlign: "center" }}>
        {gameLabel}
      </p>
      <div className="board-options">
        {board.map((value, index) => (
          <SquareButton
            key={index}
            onClick={() => handleSelect(index)}
            disabled={!!~value || !arePlaying}
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
      <div className="score-info">
        <ScoreLabel title="X (YOU)" score={wins} />
        <ScoreLabel title="TIES" score={draw} />
        <ScoreLabel title="O (CPU)" score={loses} />
      </div>
      <SquareButton
        disabled={arePlaying}
        onClick={handleRestore}
        style={{ color: "white" }}
      >
        Reiniciar
      </SquareButton>
    </>
  );
};
