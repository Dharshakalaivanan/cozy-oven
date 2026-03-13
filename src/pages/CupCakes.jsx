// src/pages/DryCakes.jsx
import React from "react";
import chocoCupcakeImg from "../assets/chocolatecupcake.jpg"; // Chocolate Cupcake
import vanillaCupcakeImg from "../assets/vanilla.jpg";
import strawberryCupcakeImg from "../assets/strawberry.jpg"; // Strawberry Cupcake
import chocomuffinImg from "../assets/chocomuffic.jpg"; // Chocolate Muffin
import blueberryMuffinImg from "../assets/blueberrymuffin.jpg"; // Blueberry Muffin

import "./CategoryPage.css"; // optional, for styling

export default function CupCakes() {
 const cakes = [

    { name: "Chocolate Cupcake", price: "₹60", img: chocoCupcakeImg },
    { name: "Vanilla Cupcake", price: "₹55", img: vanillaCupcakeImg },
    { name: "Strawberry Cupcake", price: "₹65", img: strawberryCupcakeImg },
    { name: "Chocolate Muffin", price: "₹65", img: chocomuffinImg },
    { name: "Blueberry Muffin", price: "₹70", img: blueberryMuffinImg }
  ];
   return (
    <div className="category-page">
      <h1 className="category-header">Cup Cakes & Muffins</h1>

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