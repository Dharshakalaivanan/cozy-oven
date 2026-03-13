// src/pages/DryCakes.jsx
import React from "react";
import honeycombbun from "../assets/honeycombbun.jpg"; // Honeycomb Bun
import cinnamonroll from "../assets/cinnamonroll.jpg"; // Cinnamon Roll
import garlicbread from "../assets/breadloaf.jpg"; // Garlic Bread
import chocochipbun from "../assets/chocochipbun.jpg"; // Choco Chip Bun
import crossiant from "../assets/crossiant.jpg"; // Croissant
import butterbun from "../assets/butterbun.jpg"; // Butter Bun
import chocobun from "../assets/chocobun.jpg"; // Choco Bun
import focaccia from "../assets/focaccia.jpg"; // Focaccia
import multigrain from "../assets/multigrain.jpg"; // Multigrain Bread

import "./CategoryPage.css"; // optional, for styling

export default function Breads() {
 const cakes = [

   { name: "Honeycomb Bun", price: "₹180", img: honeycombbun },
    { name: "Cinnamon Roll", price: "₹120 per piece", img: cinnamonroll },
    { name: " Bread", price: "₹180", img: garlicbread },
    { name: "Choco Chip Bun", price: "₹70 per piece", img: chocochipbun },
    { name: "Croissant", price: "₹140 per piece", img: crossiant },
    { name: "Butter Bun", price: "₹70 per piece", img: butterbun },
    { name: "Choco Bun", price: "₹72 per piece", img: chocobun },
    { name: "Focaccia", price: "₹300", img: focaccia },
    {name: "Multigrain Bread", price: "₹230", img: multigrain }
  ];
   return (
    <div className="category-page">
      <h1 className="category-header">Breads</h1>

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