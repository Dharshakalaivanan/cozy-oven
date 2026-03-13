// src/pages/DryCakes.jsx
import React from "react";
import redcookies from "../assets/red.jpg"; // Red Velvet Cookies
import crack from "../assets/crack.jpg"; // Crack Cookies
import chocolateChip from "../assets/chip.jpg";
import meltedChocolate from "../assets/melting.jpg";
import butter from "../assets/butter.jpg";
import "./CategoryPage.css"; // optional, for styling

export default function Cookies() {
  const cakes = [
    { name: "Red Velvet Cookies", price: "₹60 per piece", img: redcookies },
    { name: "Crack Cookies", price: "₹60 per piece", img: crack },
    { name: "Chocolate Chip Cookies", price: "₹60 per piece", img: chocolateChip },
    { name: "Melted Chocolate Cookies", price: "₹60 per piece", img: meltedChocolate },
    { name: "Butter Cookies", price: "₹60 per piece", img: butter },
  ];
   return (
    <div className="category-page">
      <h1 className="category-header">Cookies</h1>

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