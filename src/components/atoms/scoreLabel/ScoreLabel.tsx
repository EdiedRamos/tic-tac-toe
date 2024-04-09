import "./scoreLabel.scss";

type PropsType = {
  title: string;
  score: number;
};

export const ScoreLabel = ({ title, score }: PropsType): JSX.Element => {
  return (
    <div className="score-label">
      <p>{title}</p>
      <p>{score}</p>
    </div>
  );
};
