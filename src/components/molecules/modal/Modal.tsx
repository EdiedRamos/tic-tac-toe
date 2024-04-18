import ReactDom from "react-dom";

import { useUI } from "@/hooks";

import "./Modal.scss";

export const Modal = () => {
  const { showModal, closeModal, body } = useUI();

  if (!showModal) return null;
  return ReactDom.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={closeModal}>
          Cerrar
        </button>
        {body}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};
