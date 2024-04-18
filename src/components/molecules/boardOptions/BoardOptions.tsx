import { Logo, SmallButton, TurnLabel } from "@/components/atoms";
import { Icons } from "@/general/icons";
import { useGame, useUI } from "@/hooks";

import "./BoardOptions.scss";
import { RestartGame } from "../RestartGame/RestartGame";

const { LetterO, LetterX } = Icons;

export const BoardOptions = () => {
  const { currentMark } = useGame();
  const { openModal, setBodyContent } = useUI();

  const handleRestart = () => {
    setBodyContent(<RestartGame />);
    openModal();
  };

  return (
    <div className="board-options__container">
      <Logo />
      <TurnLabel>
        {currentMark === "x" ? (
          <LetterX className="icon" style={{ fontSize: "1.5rem" }} />
        ) : (
          <LetterO className="icon" style={{ fontSize: "1.5rem" }} />
        )}
        <span style={{ marginLeft: "5px", background: "transparent" }}>
          TURN
        </span>
      </TurnLabel>
      <SmallButton disabled={false} onClick={handleRestart}>
        <Icons.Reload className="icon" style={{ fontSize: "1.5rem" }} />
      </SmallButton>
    </div>
  );
};
