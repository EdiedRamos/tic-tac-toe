import { useGame } from "@/hooks/Game/useGame";
import { Game, Menu } from "@/pages";

export const PageManager = () => {
  const { screen } = useGame();
  return <>{screen === "menu" ? <Menu /> : <Game />}</>;
};
