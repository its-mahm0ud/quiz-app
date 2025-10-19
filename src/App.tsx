import MainPage from "./Pages/MainPage";
import { HeroUIProvider } from "@heroui/react";

function App() {
  return (
    <>
      <HeroUIProvider>
        <MainPage />
      </HeroUIProvider>
    </>
  );
}

export default App;
