import { Main } from "./components/atoms";
import { ErrorBoundary, PageManager } from "./components/molecules";
import { GameProvider } from "./contexts";

const App = () => {
  return (
    <ErrorBoundary>
      <Main>
        <GameProvider>
          <PageManager />
        </GameProvider>
      </Main>
    </ErrorBoundary>
  );
};

export default App;
