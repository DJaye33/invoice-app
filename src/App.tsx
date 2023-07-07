import { AppContainer, AppBar, AppMain } from "./Components";
import { Home } from "./Components/pages";

function App() {
  return (
    <>
      <AppContainer>
        <AppBar />
        <AppMain>
          <Home />
        </AppMain>
      </AppContainer>
    </>
  );
}

export default App;
