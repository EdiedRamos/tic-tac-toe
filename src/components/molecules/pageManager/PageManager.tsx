import { useGame } from "@/hooks";
import { Game, Menu } from "@/pages";

export const PageManager = () => {
  const { screen } = useGame();
  return <>{screen === "menu" ? <Menu /> : <Game />}</>;
};
