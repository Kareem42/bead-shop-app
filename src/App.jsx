import React, { useState, useEffect } from "react";
import "./index.css";
import Home from "./components/section/Home";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Matches the duration of the loading animation

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <div className="fade-in">
            <Home />
          </div>
        </>
      )}
    </>
  );
}

export default App;
