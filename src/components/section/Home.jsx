import React, { useState, useEffect } from "react";
//import Image from "./assets/africa.jpeg"; // Adjust the path as necessary

const Home = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "left",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="font-bold text-4xl mb-4">{greeting}, Welcome to the Bead Shop!</h1>
      <p className="text-lg mb-6">
        Explore our collection of handmade jewelry and accessories. We offer a wide range of
        products to suit your style and preferences.
      </p>
      <div className="flex gap-4 flex-wrap">
        <button className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600 transition duration-300 cursor-pointer">
          Shop
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition duration-300 cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;