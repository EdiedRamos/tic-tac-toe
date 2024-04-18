import { Main } from "./components/atoms";
import { ErrorBoundary, Modal, PageManager } from "./components/molecules";
import { GameProvider } from "./contexts";
import { UIProvider } from "./providers";

const App = () => {
  return (
    <ErrorBoundary>
      <UIProvider>
        <GameProvider>
          <Modal />
          <Main>
            <PageManager />
          </Main>
        </GameProvider>
      </UIProvider>
    </ErrorBoundary>
  );
};

export default App;
