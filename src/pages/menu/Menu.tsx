import { Logo } from "@/components/atoms";
import { GameMode, PlayerPicker } from "@/components/molecules";

export const Menu = () => {
  return (
    <section>
      <Logo />
      <PlayerPicker />
      <GameMode />
    </section>
  );
};
