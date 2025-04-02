import { Routes } from "./Routes";
import { ThemeProvider } from "./theme/ThemeProvider";

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
