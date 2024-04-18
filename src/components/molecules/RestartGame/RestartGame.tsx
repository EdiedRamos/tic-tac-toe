import { useUI } from "@/hooks";

import "./RestartGame.scss";

export const RestartGame = () => {
  const { closeModal } = useUI();

  const handleAccept = () => {
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="restart-game restart-game__container">
      <h1 className="restart-game__title">RESTART GAME?</h1>
      <div className="restart-game__controls">
        <button className="restart-game__cancel" onClick={handleCancel}>
          NO, CANCEL
        </button>
        <button className="restart-game__restart" onClick={handleAccept}>
          YES, RESTART
        </button>
      </div>
    </div>
  );
};
