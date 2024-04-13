import { MarkType } from "@/types";
import { WINNING_MOVES } from "@/utils/constants";

interface BoardStatus {
  winner: number | null;
  isThereAFreeSquare: boolean;
}

export const boardStatus = (board: Array<number>): BoardStatus => {
  const response: BoardStatus = {
    winner: null,
    isThereAFreeSquare: false,
  };
  for (const move of WINNING_MOVES) {
    const [a, b, c] = move;
    if (!~board[a] || !~board[b] || !~board[c]) {
      response.isThereAFreeSquare = true;
    } else if (board[a] === board[b] && board[b] === board[c]) {
      response.winner = board[a];
    }
  }
  return response;
};

export const getOppositeMark = (mark: MarkType): MarkType => {
  return mark === "x" ? "o" : "x";
};
