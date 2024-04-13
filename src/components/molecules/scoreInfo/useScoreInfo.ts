import { useGame } from "@/hooks";

export const useScoreInfo = () => {
  const { playerA, playerB } = useGame();

  const getXPlayer = () => {
    return playerA.getMark === "x" ? playerA : playerB;
  };

  const getOPlayer = () => {
    return playerA.getMark === "o" ? playerA : playerB;
  };

  const getXLabel = (): string => {
    return `X ${getXPlayer()?.getLabel}`;
  };

  const getOLabel = (): string => {
    return `O ${getOPlayer()?.getLabel}`;
  };

  const getXScore = (): number => {
    return getXPlayer()?.getScore ?? 0;
  };

  const getOScore = (): number => {
    return getOPlayer()?.getScore ?? 0;
  };

  return {
    getXLabel,
    getOLabel,
    getXScore,
    getOScore,
  };
};
