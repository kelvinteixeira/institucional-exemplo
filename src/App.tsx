import { Routes } from "./Routes";
import { ThemeProvider } from "./theme/MaterialUi";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
