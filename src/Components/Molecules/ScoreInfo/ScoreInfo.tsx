import { ScoreLabel } from "@/Components/Atoms";
import "./ScoreInfo.scss";

export const ScoreInfo = () => {
  return <></>;
  return (
    <div className="score-info">
      <ScoreLabel title="X (YOU)" score={14} />
      <ScoreLabel title="TIES" score={32} />
      <ScoreLabel title="O (CPU)" score={11} />
    </div>
  );
};
