import React, { useEffect, useState } from "react";
import "../index.css";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (!isVisible) return null; // Hide the loading screen after 3 seconds

  return (
    <div className="loading-container">
      <div className="rolling-bracelet">
        {[...Array(10)].map((_, index) => (
          <React.Fragment key={index}>
            <div
              className="bead"
              style={{ "--index": index }}
            ></div>
            <div
              className="string"
              style={{
                "--index": index,
                transform: `rotate(calc(${index} * 45deg)) translate(40px)`,
              }}
            ></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;