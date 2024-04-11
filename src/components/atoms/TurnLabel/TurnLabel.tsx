import "./TurnLabel.scss";

type PropsType = {
  children: React.ReactNode;
};

export const TurnLabel = ({ children }: PropsType) => {
  return <div className="turn-label__container">{children}</div>;
};
