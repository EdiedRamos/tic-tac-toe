import React, { useState } from "react";

import { UIContext } from "@/contexts";

type UIProviderProps = {
  children: React.ReactNode;
};

export const UIProvider = ({ children }: UIProviderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [body, setBody] = useState<React.ReactNode>(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const setBodyContent = (body: React.ReactNode) => {
    setBody(body);
  };

  const values = {
    showModal,
    openModal,
    closeModal,
    body,
    setBodyContent,
  };

  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
};
