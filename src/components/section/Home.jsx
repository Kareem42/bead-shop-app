import React, { useState, useEffect } from "react";
import Image from "./africa.jpeg"; // Adjust the path as necessary

export default function Home () {
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
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5%", // Use relative padding
      }}
    >
      <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
        {greeting}, Welcome to the Bead Shop!
      </h1>
      <p className="text-base sm:text-lg lg:text-xl mb-4 text-white max-w-2xl">
        <strong className="text-white">
          Unleash your creativity! Explore our collection of beads, charms, and tools to design your own custom bracelets. 
          You can also select from our premade designs. Whether you're crafting for yourself or creating a gift, we have everything you need to bring your vision to life.
        </strong>
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button className="bg-indigo-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-indigo-600 transition duration-300 cursor-pointer">
          Start Designing
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-gray-600 transition duration-300 cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
};
