// TODO: Implement this
import { createContext, useState } from "react";

import { Player } from "@/models";
import type { MarkType, PlayerType, ScreenType } from "@/types";
import type { ReactNode } from "react";

interface GameContextI {
  screen: ScreenType;
  turn: Player | null;
  currentMark: MarkType;
  playerA: Player;
  playerB: Player | null;
  handleMark: (mark: MarkType) => void;
  handleStart: (playerBType: PlayerType) => void;
}

export const GameContext = createContext<GameContextI | undefined>(undefined);

interface GameProviderI {
  children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderI): JSX.Element => {
  const [screen, setScreen] = useState<ScreenType>("menu");
  const [turn, setTurn] = useState<Player | null>(null);
  const [currentMark, setCurrentMark] = useState<MarkType>("x");
  const [playerA, setPlayerA] = useState<Player>(
    new Player("playerA", "human", "x")
  );
  const [playerB, setPlayerB] = useState<Player | null>(null);

  const handleMark = (mark: MarkType) => {
    setPlayerA((player) => {
      const newPlayer = new Player(player.getLabel, player.getType, mark);
      return newPlayer;
    });
  };

  const handleStart = (playerBType: PlayerType) => {
    const freeMark: MarkType = playerA.getMark === "o" ? "x" : "o";
    let playerB: Player;
    if (playerBType === "cpu") {
      playerB = new Player("playerB", "cpu", freeMark);
    } else {
      playerB = new Player("playerB", "human", freeMark);
    }
    setPlayerB(playerB);
    setScreen("game");
  };

  return (
    <GameContext.Provider
      value={{
        screen,
        turn,
        currentMark,
        playerA,
        playerB,
        handleMark,
        handleStart,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// const [board, setBoard] = useState<Array<number>>(Array(9).fill(-1));
//   const [turn, setTurn] = useState<boolean>(false);
//   const [arePlaying, setArePlaying] = useState(true);
//   const [gameLabel, setGameLabel] = useState<string>("...");
//   const [wins, setWins] = useState(0);
//   const [loses, setLoses] = useState(0);
//   const [draw, setDraw] = useState(0);

// const handleSelect = (selectedIndex: number) => {
//   setBoard((prev) =>
//     prev.map((val, index) => (index === selectedIndex ? (turn ? 1 : 0) : val))
//   );
//   setTurn((prev) => !prev);
// };

// useEffect(() => {
//   const winner = isThereAWinner(board);
//   if (~winner) {
//     setGameLabel(`Gano ${winner === 0 ? "O" : "X"}`);
//     if (winner === 0) setWins((prev) => prev + 1);
//     else setLoses((prev) => prev + 1);
//     setArePlaying(false);
//   } else if (!board.some((value) => value === -1)) {
//     setGameLabel("Empate");
//     setDraw((prev) => prev + 1);
//     setArePlaying(false);
//   }
// }, [board]);

// const isThereAWinner = (board: Array<number>): number => {
//   for (const move of WINNING_MOVES) {
//     const [a, b, c] = move;
//     if (board[a] === board[b] && board[b] === board[c] && ~board[a]) {
//       return board[a];
//     }
//   }
//   return -1;
// };
