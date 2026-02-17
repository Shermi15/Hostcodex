import { useState, useEffect } from "react";
import Home from "./pages/Home";
import IntroLogo from "./components/IntroLogo";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "auto";
  }, [showIntro]);

  return (
    <>
      {showIntro && <IntroLogo onFinish={() => setShowIntro(false)} />}
      {!showIntro && <Home />}
    </>
  );
}

export default App;
