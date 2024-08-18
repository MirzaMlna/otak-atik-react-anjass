import { useState } from "react";
import NavbarAnjay from "./components/NavbarAnjay";

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
      <br></br>
      <div className="mx-5 my-3"></div>
    </>
  );
}

export default App;
