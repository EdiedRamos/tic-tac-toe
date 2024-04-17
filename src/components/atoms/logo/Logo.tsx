import "./Logo.scss";

import { Icons } from "@/general/icons";

export const Logo = () => {
  return (
    <div className="logo__container">
      <Icons.LetterX className="letter-x" />
      <Icons.LetterO className="letter-o" />
    </div>
  );
};
