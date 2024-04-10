import "./GameMode.scss";

export const GameMode = () => {
  return (
    <div className="game-mode__container">
      <button className="vs-cpu">NEW GAME (VS CPU)</button>
      <button className="vs-player">NEW GAME (VS PLAYER)</button>
    </div>
  );
};
