import type { ButtonHTMLAttributes, ReactNode } from "react";

import "./squareButton.scss";

type PropsType = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const SquareButton = ({ children, ...rest }: PropsType): JSX.Element => {
  return (
    <button className="square-button" {...rest}>
      {children}
    </button>
  );
};
