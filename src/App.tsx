import { useState } from "react";
import "./index.css";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  // for mobile device state
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("environment: ", import.meta.env);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-200:" : "opacity-0"
          } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
