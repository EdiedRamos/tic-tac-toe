import { useContext } from "react";

import { GameContext } from "@/contexts";

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must to be in a game context");
  }
  return context;
};
