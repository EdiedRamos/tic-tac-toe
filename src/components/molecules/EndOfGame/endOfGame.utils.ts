import type { Player } from "@/models";

export function getTitle(winner: Player | null): string {
  if (!winner) {
    return "WAS A DRAW!";
  }
  if (winner.getLabel === "playerA") {
    return "FIRST PLAYER WON!";
  }
  return "SECOND PLAYER WON!";
}

export function getText(winner: Player | null): string {
  if (!winner) {
    return "XO";
  }
  return `${winner.getMark} TAKES THE ROUND`;
}
