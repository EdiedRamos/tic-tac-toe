import { UIContext } from "@/contexts/UIContext/UIContext";
import { useContext } from "react";

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must to be in  a UI context");
  }
  return context;
};
