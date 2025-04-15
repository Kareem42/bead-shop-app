import React, { useState, useEffect } from "react";

const Home = () => {
  const [greeting, setGreeting] = useState("");
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Set dynamic greeting based on the time of day
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }

    // Simulate fetching featured products
    const fetchFeaturedProducts = async () => {
      const products = [
        { id: 1, name: "Beaded Necklace", price: "$25" },
        { id: 2, name: "Bracelet Set", price: "$15" },
        { id: 3, name: "Earrings", price: "$10" },
      ];
      setFeaturedProducts(products);
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 className="font-bold">{greeting}, Welcome to the Bead Shop!</h1>
      <p>Explore our collection of handmade jewelry and accessories.</p>

      <h2 className="font-bold items-center">Featured Products</h2>
      <div className="featured-products">
        {featuredProducts.map((product) => (
          <div key={product.id} className="product-card hover:shadow-lg">
            <h3>{product.name}</h3>
            <p className="font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;