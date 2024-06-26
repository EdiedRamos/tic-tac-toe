import { MarkType } from "@/types";
import { WINNING_MOVES } from "@/utils/constants";

interface BoardStatus {
  winner: number | null;
  isThereAFreeSquare: boolean;
  isEmpty: boolean;
}

export const boardStatus = (board: Array<number>): BoardStatus => {
  const response: BoardStatus = {
    winner: null,
    isThereAFreeSquare: false,
    isEmpty: true,
  };
  for (const move of WINNING_MOVES) {
    const [a, b, c] = move;
    if (!~board[a] || !~board[b] || !~board[c]) {
      response.isThereAFreeSquare = true;
    } else if (board[a] === board[b] && board[b] === board[c]) {
      response.winner = board[a];
    }
  }
  if (board.some((value) => ~value)) response.isEmpty = false;
  return response;
};

export const getOppositeMark = (mark: MarkType): MarkType => {
  return mark === "x" ? "o" : "x";
};

export const generateArray = (
  length: number,
  initialValue: number
): Array<number> => {
  return Array(length).fill(initialValue);
};
