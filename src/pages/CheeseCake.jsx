// src/pages/DryCakes.jsx
import React from "react";
import strawberryimg from "../assets/strawberrycheesecake.jpg"; // Strawberry Cheesecake
import blueberryimg from "../assets/blueberrycheesecake.jpg"; // Blueberry Cheesecake
import chocomouse from "../assets/chocomouse.jpg"; // Chocolate Mousse
import "./CategoryPage.css"; // optional, for styling

export default function BreakfastSeries() {
  const cakes = [
    { name: "Strawberry Cheesecake", price: "₹230 per piece", img: strawberryimg },
    { name: "Blueberry Cheesecake", price: "₹230 per piece", img: blueberryimg },
    { name: "Chocolate Mousse", price: "₹230 per piece", img: chocomouse },
  ];
   return (
    <div className="category-page">
      <h1 className="category-header">Cheese Cakes</h1>
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