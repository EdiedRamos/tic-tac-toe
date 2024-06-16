import type { MarkType, PlayerType, ScreenType } from "@/types";
import { boardStatus, generateArray, getOppositeMark } from "./utils";
import { createContext, useEffect, useState } from "react";

import { EndOfGame } from "@/components/molecules";
import { Player } from "@/models";
import type { ReactNode } from "react";
import { useUI } from "@/hooks";

interface GameContextI {
  isOver: boolean;
  board: Array<number>;
  screen: ScreenType;
  draws: number;
  currentMark: MarkType;
  playerA: Player;
  playerB: Player;
  winner: Player | null;
  isMachineTurn: boolean;
  handleMark: (mark: MarkType) => void;
  handleStart: (playerBType: PlayerType) => void;
  handleSelect: (selectedIndex: number) => void;
  handleReset: () => void;
  resetBoard: () => void;
  quitGame: () => void;
  nextRound: () => void;
}

export const GameContext = createContext<GameContextI | undefined>(undefined);

interface GameProviderI {
  children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderI): JSX.Element => {
  const { setBodyContent, openModal, closeModal } = useUI();

  const [isOver, setIsOver] = useState(false);
  const [screen, setScreen] = useState<ScreenType>("menu");
  const [board, setBoard] = useState<Array<number>>(generateArray(9, -1));
  const [currentMark, setCurrentMark] = useState<MarkType>("x");
  const [draws, setDraws] = useState(0);

  const [isMachineTurn, setIsMachineTurn] = useState<boolean>(false);

  const [playerA, setPlayerA] = useState<Player>(Player.createBasePlayerA());
  const [playerB, setPlayerB] = useState<Player>(Player.createBasePlayerB());
  const [winner, setWinner] = useState<Player | null>(null);

  // console.log({ playerA, playerB });
  // console.log({ winner });

  const resetBoard = () => {
    setBoard(generateArray(9, -1));
  };

  const handleReset = () => {
    resetBoard();
    setCurrentMark("x");
    setPlayerA((player) => player.setScore(0));
    setPlayerB((player) => player.setScore(0));
    setIsOver(false);
    setDraws(0);
    setWinner(null);
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
  };

  const handleStart = (playerBType: PlayerType) => {
    const freeMark = getOppositeMark(playerA.getMark);
    setPlayerB((player) => player.updateTypeAndMark(playerBType, freeMark));
    setScreen("game");
  };

  const handleWinner = () => {
    if (playerA.getMark === currentMark) {
      setPlayerA((player) => {
        const newPlayerA = player.wins();
        setWinner(newPlayerA);
        return newPlayerA;
      });
    } else {
      setPlayerB((player) => {
        const newPlayerB = player.wins();
        setWinner(newPlayerB);
        return newPlayerB;
      });
    }
  };

  const quitGame = () => {
    closeModal();
    setScreen("menu");
    handleReset();
  };

  const nextRound = () => {
    resetBoard();
    setIsOver(false);
    closeModal();
    setCurrentMark((prev) => getOppositeMark(prev));
  };

  useEffect(() => {
    if (screen === "menu") return;
    const status = boardStatus(board);
    if (status.isEmpty) return;
    if (status.winner === null && status.isThereAFreeSquare) {
      setCurrentMark((prev) => getOppositeMark(prev));
      return;
    }
    if (status.winner !== null) {
      handleWinner();
    } else {
      setDraws((prev) => prev + 1);
      setWinner(null);
    }
    setBodyContent(<EndOfGame />);
    openModal();
    setIsOver(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);

  // * Control machine
  useEffect(() => {
    // * The machine always will be the playerB
    if (isOver) return;
    if (!playerB.isMachine || playerB.getMark !== currentMark) return;

    // ! EASY MACHINE | TEMPORAL HERE
    const machineMove = board.findIndex((value) => !~value);
    if (~machineMove) handleSelect(machineMove);
  }, [currentMark, playerB]);

  return (
    <GameContext.Provider
      value={{
        isOver,
        draws,
        screen,
        currentMark,
        playerA,
        playerB,
        winner,
        isMachineTurn,
        handleMark,
        handleStart,
        board,
        handleSelect,
        handleReset,
        resetBoard,
        quitGame,
        nextRound,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
