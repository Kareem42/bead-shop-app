import React, { useState, useEffect } from "react";
import "./index.css";
import Home from "./components/section/Home";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import FeaturedProducts from "./components/section/FeaturedProducts";
import Stats from "./components/section/Stats";
import Designers from "./components/section/Designers";
import Contact from "./components/section/Contact";



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
          <FeaturedProducts />
          <Stats />
          <Designers />
          <Contact />

        </>
      )}
    </>
  );
}

export default App;
