import "./RestartGame.scss";
import { RestartGameController } from "./RestartGameController";

export const RestartGame = () => {
  const { handleAccept, handleCancel } = RestartGameController();

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
