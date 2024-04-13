import { createContext, useEffect, useState } from "react";

import { Player } from "@/models";
import type { MarkType, PlayerType, ScreenType } from "@/types";
import type { ReactNode } from "react";
import { boardStatus, generateArray, getOppositeMark } from "./utils";

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
  handleReset: () => void;
}

export const GameContext = createContext<GameContextI | undefined>(undefined);

interface GameProviderI {
  children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderI): JSX.Element => {
  const [screen, setScreen] = useState<ScreenType>("menu");
  const [board, setBoard] = useState<Array<number>>(generateArray(9, -1));
  const [currentMark, setCurrentMark] = useState<MarkType>("x");
  const [draws, setDraws] = useState(0);

  const [playerA, setPlayerA] = useState<Player>(Player.createBasePlayerA());
  const [playerB, setPlayerB] = useState<Player>(Player.createBasePlayerB());

  const resetBoard = () => {
    setBoard(generateArray(9, -1));
  };

  const handleReset = () => {
    resetBoard();
    setCurrentMark("x");
    setPlayerA((player) => player.setScore(0));
    setPlayerB((player) => player.setScore(0));
  };

  const handleMark = (mark: MarkType) => {
    setPlayerA((player) => player.updateMark(mark));
  };

  const handleSelect = (selectedIndex: number) => {
    setBoard((prev) =>
      prev.map((val, index) =>
        index === selectedIndex ? (currentMark === "x" ? 1 : 0) : val
      )
    );
    setCurrentMark((prev) => getOppositeMark(prev));
  };

  const handleStart = (playerBType: PlayerType) => {
    const freeMark = getOppositeMark(playerA.getMark);
    setPlayerB((player) => player.updateTypeAndMark(playerBType, freeMark));
    setPlayerB(playerB);
    setScreen("game");
  };

  const handleWinner = () => {
    if (playerA.getMark !== currentMark) {
      setPlayerA((player) => player.wins());
    } else {
      setPlayerB((player) => player.wins());
    }
  };

  useEffect(() => {
    if (screen === "menu") return;
    const status = boardStatus(board);
    if (status.winner === null && status.isThereAFreeSquare) return;
    if (status.winner !== null) {
      handleWinner();
    } else {
      setDraws((prev) => prev + 1);
    }
    resetBoard();
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
        handleReset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
