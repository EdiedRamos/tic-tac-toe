import { useGame, useUI } from "@/hooks";

export const RestartGameController = () => {
  const { closeModal } = useUI();
  const { handleReset } = useGame();

  const handleAccept = () => {
    handleReset();
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return {
    handleAccept,
    handleCancel,
  };
};
