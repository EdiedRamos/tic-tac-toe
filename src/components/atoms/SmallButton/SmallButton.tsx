import type { ButtonHTMLAttributes, ReactNode } from "react";

import "./SmallButton.scss";

type PropsType = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const SmallButton = ({
  children,
  className = "",
  ...rest
}: PropsType): JSX.Element => {
  return (
    <button className={`button small-button ${className}`} {...rest}>
      {children}
    </button>
  );
};
