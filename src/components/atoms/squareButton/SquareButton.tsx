import type { ButtonHTMLAttributes, ReactNode } from "react";

import "./SquareButton.scss";

type PropsType = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const SquareButton = ({
  children,
  className = "",
  ...rest
}: PropsType): JSX.Element => {
  return (
    <button className={`button square-button ${className}`} {...rest}>
      {children}
    </button>
  );
};
