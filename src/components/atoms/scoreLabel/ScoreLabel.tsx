import "./ScoreLabel.scss";

type PropsType = {
  title: string;
  score: number;
  className?: string;
};

export const ScoreLabel = ({
  title,
  score,
  className = "",
}: PropsType): JSX.Element => {
  return (
    <div className={`score-label ${className}`}>
      <p>{title}</p>
      <p>{score}</p>
    </div>
  );
};
