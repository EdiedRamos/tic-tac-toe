import { Logo, SmallButton, TurnLabel } from "@/components/atoms";

import { Icons } from "@/general/icons";

import "./BoardOptions.scss";

const { LetterO, LetterX } = Icons;

export const BoardOptions = () => {
  return (
    <div className="board-options__container">
      <Logo />
      <TurnLabel>
        {<LetterO className="icon" style={{ fontSize: "1.5rem" }} />}{" "}
        {<LetterX className="icon" style={{ fontSize: "1.5rem" }} />} TURN
      </TurnLabel>
      <SmallButton disabled={false} onClick={() => {}}>
        <Icons.Reload className="icon" style={{ fontSize: "1.5rem" }} />
      </SmallButton>
    </div>
  );
};
