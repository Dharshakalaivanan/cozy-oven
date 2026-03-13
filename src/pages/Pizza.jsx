// src/pages/DryCakes.jsx
import React from "react";
import vegPizza from "../assets/vegpizza.jpg"; // Veg Pizza
import nonVegPizza from "../assets/nonvegpizza.jpg"; // Non-Veg Pizza
import vegnonveg from "../assets/vegnon.jpg"; // Veg-NonVeg Pizza
import "./CategoryPage.css"; // optional, for styling

export default function Pizza() {
  const cakes = [
    { name: "Veg Pizza", price: "₹150 per piece", img: vegPizza },
    { name: "Non-Veg Pizza", price: "₹180 per piece", img: nonVegPizza },
    { name: "Veg-NonVeg Pizza", price: "₹200 per piece", img: vegnonveg },
  ];
   return (
    <div className="category-page">
      <h1 className="category-header">Pizza</h1>

      <div className="cake-grid">
        {cakes.map((cake, index) => (
          <div key={index} className="cake-card">
            <img src={cake.img} alt={cake.name} className="cake-image" />
            <h3 className="cake-name">{cake.name}</h3>
            <p className="cake-price">{cake.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}