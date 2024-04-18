import { ternary } from "@/hooks";
import { Game, Menu } from "@/pages";

export const PageManager = () => {
  const { screen } = ternary();
  return <>{screen === "menu" ? <Menu /> : <Game />}</>;
};
