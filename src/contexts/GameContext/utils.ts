import type { Dispatch, SetStateAction } from "react";

import { Player } from "@/models";
import { WINNING_MOVES } from "@/utils/constants";

export const isThereAWinner = (board: Array<number>): number => {
  for (const move of WINNING_MOVES) {
    const [a, b, c] = move;
    if (board[a] === board[b] && board[b] === board[c] && ~board[a]) {
      return board[a];
    }
  }
  return -1;
};

export const setTheWinner = (
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
