import { createContext, useEffect, useState } from "react";

import { Player } from "@/models";
import type { MarkType, PlayerType, ScreenType } from "@/types";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { WINNING_MOVES } from "@/utils/constants";

interface GameContextI {
  board: Array<number>;
  screen: ScreenType;
  draws: number;
  currentMark: MarkType;
  playerA: Player;
  playerB: Player;
  handleMark: (mark: MarkType) => void;
  handleStart: (playerBType: PlayerType) => void;
  handleSelect: (selectedIndex: number) => void;
}

export const GameContext = createContext<GameContextI | undefined>(undefined);

interface GameProviderI {
  children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderI): JSX.Element => {
  const [screen, setScreen] = useState<ScreenType>("menu");
  const [board, setBoard] = useState<Array<number>>(Array(9).fill(-1));
  const [currentMark, setCurrentMark] = useState<MarkType>("x");
  const [draws, setDraws] = useState(0);

  const [playerA, setPlayerA] = useState<Player>(
    new Player("playerA", "human", "x")
  );
  const [playerB, setPlayerB] = useState<Player>(
    new Player("playerB", "human", "o")
  );

  const handleMark = (mark: MarkType) => {
    setPlayerA((player) => {
      const newPlayer = new Player(player.getLabel, player.getType, mark);
      return newPlayer;
    });
  };

  const setTheWinner = (
    player: Player,
    setter: Dispatch<SetStateAction<Player>>
  ) => {
    const newPlayer = new Player(
      player.getLabel,
      player.getType,
      player.getMark,
      player.getScore
    );
    newPlayer.wins();
    setter(newPlayer);
  };

  const handleSelect = (selectedIndex: number) => {
    setBoard((prev) =>
      prev.map((val, index) =>
        index === selectedIndex ? (currentMark === "x" ? 1 : 0) : val
      )
    );
    setCurrentMark((prev) => (prev === "x" ? "o" : "x"));
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

  const isThereAWinner = (board: Array<number>): number => {
    for (const move of WINNING_MOVES) {
      const [a, b, c] = move;
      if (board[a] === board[b] && board[b] === board[c] && ~board[a]) {
        return board[a];
      }
    }
    return -1;
  };

  useEffect(() => {
    const winner = isThereAWinner(board);
    // * There is a winner
    if (~winner) {
      if (playerA.getMark !== currentMark) {
        setTheWinner(playerA, setPlayerA);
      } else {
        setTheWinner(playerB, setPlayerB);
      }
      setBoard(Array(9).fill(-1));
    }
    // * It is a draw
    else if (!board.some((value) => value === -1)) {
      setDraws((prev) => prev + 1);
      setBoard(Array(9).fill(-1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);

  return (
    <GameContext.Provider
      value={{
        draws,
        screen,
        currentMark,
        playerA,
        playerB,
        handleMark,
        handleStart,
        board,
        handleSelect,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
