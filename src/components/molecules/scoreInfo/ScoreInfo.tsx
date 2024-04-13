import { ScoreLabel } from "@/components/atoms";
import { useScoreInfo } from "./useScoreInfo";

import "./ScoreInfo.scss";

export const ScoreInfo = () => {
  const { getXLabel, getOLabel, getXScore, getOScore } = useScoreInfo();

  return (
    <div className="score-info">
      <ScoreLabel
        className="background-secondary"
        title={getXLabel()}
        score={getXScore()}
      />
      <ScoreLabel className="background-quaternary" title="TIES" score={0} />
      <ScoreLabel
        className="background-ternary"
        title={getOLabel()}
        score={getOScore()}
      />
    </div>
  );
};
