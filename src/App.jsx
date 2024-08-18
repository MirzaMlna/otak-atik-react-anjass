import { useState } from "react";
import NavbarAnjay from "./components/NavbarAnjay";
import HeroSection from "./sections/HeroSection";

const useTheme = () => {
  const [lightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => setLightTheme(!lightTheme);
  return { lightTheme, toggleTheme };
};

function App() {
  const { lightTheme, toggleTheme } = useTheme();
  return (
    <>
      <NavbarAnjay lightTheme={lightTheme} toggleTheme={toggleTheme} />
      <HeroSection lightTheme={lightTheme}></HeroSection>
    </>
  );
}

export default App;
