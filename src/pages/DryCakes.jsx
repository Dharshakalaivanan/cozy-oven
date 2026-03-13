// src/pages/DryCakes.jsx
import React from "react";
import teaCakeImg from "../assets/teacake.jpg"; // Tea Cake
import vanchoCakeImg from "../assets/vanchocake.jpg"; // Vancho Cake
import butterCakeImg from "../assets/buttercake.jpg"; // Butter Cake
import chocolateCakeImg from "../assets/chocolatecake.jpg"; // Chocolate Cake
import almondCoconutImg from "../assets/almondcake.jpg"; // Almond Coconut Cake
import carrotCakeImg from "../assets/carrot.jpg"; // Carrot Cake
import bananaCakeImg from "../assets/bananacake.jpg"; // Banana Cake
import pineappleCakeImg from "../assets/pineapple.jpg"; 
import brownieImg from "../assets/brownie.jpg"; // Brownie
import blondeqImg from "../assets/blonde.jpg"; // Blondie
import "./CategoryPage.css"; // optional, for styling

export default function DryCakes() {
 const cakes = [

    { name: "Tea Cake", price: "₹16", img: teaCakeImg },
    { name: "Vancho Cake", price: "₹20", img: vanchoCakeImg },
    { name: "Butter Cake", price: "₹35", img: butterCakeImg },
    { name: "Chocolate Cake", price: "₹25", img: chocolateCakeImg },
    { name: "Carrot Cake", price: "₹38", img: carrotCakeImg },
    { name: "Banana Cake", price: "₹38", img: bananaCakeImg },
    { name: "Almond Coconut Cake", price: "₹55", img: almondCoconutImg },
    { name: "Pineapple Upside Down Cake", price: "₹45", img: pineappleCakeImg },
    {name: "Brownie", price: "₹75", img: brownieImg },
    {name:"Blondie", price: "₹80", img: blondeqImg }
  ];
   return (
    <div className="category-page">
      <h1 className="category-header">Dry Cakes</h1>

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