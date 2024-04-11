import { ScoreLabel } from "@/components/atoms";

import "./ScoreInfo.scss";

export const ScoreInfo = () => {
  return (
    <div className="score-info">
      <ScoreLabel className="background-secondary" title="X (YOU)" score={1} />
      <ScoreLabel className="background-quaternary" title="TIES" score={2} />
      <ScoreLabel className="background-ternary" title="O (CPU)" score={3} />
    </div>
  );
};
