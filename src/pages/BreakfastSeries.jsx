// src/pages/DryCakes.jsx
import React from "react";
import crepe from "../assets/crepe.jpg"; // Crepe
import pancake from "../assets/pancake.jpg"; // Pancake
import granola from "../assets/granola.jpg"; // Granola Bowl
import granolabar from "../assets/granolabar.jpg"; // Granola Bar
import "./CategoryPage.css"; // optional, for styling

export default function BreakfastSeries() {
  const cakes = [
    { name: "Crepe", price: "₹200 ", img: crepe },
    { name: "Pancake", price: "₹220 ", img: pancake },
    { name: "Granola Bowl", price: "₹300 per bowl", img: granola },
    { name: "Granola Bar", price: "₹70 per piece", img: granolabar },
  ];
   return (
    <div className="category-page">
      <h1 className="category-header">Breakfast</h1>

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