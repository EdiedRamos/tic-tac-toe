import { Logo } from "@/components/atoms";
import { GameMode, PlayerPicker } from "@/components/molecules";

import "./Menu.scss";

export const Menu = () => {
  return (
    <section className="menu">
      <Logo />
      <PlayerPicker />
      <GameMode />
    </section>
  );
};
