import React, { createContext } from "react";

type BodyType = React.ReactNode;

interface UIContextI {
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  body: BodyType;
  setBodyContent: (body: BodyType) => void;
}

export const UIContext = createContext<UIContextI | undefined>(undefined);
