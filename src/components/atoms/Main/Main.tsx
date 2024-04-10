import "./Main.scss";

type PropsType = {
  children: React.ReactNode;
};

export const Main = ({ children }: PropsType): JSX.Element => {
  return <main className="main__container">{children}</main>;
};
