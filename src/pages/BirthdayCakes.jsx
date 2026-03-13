import React from "react";

// Images
import chocolatebirthdayImg from "../assets/chocobrithday.jpg"; 
import vanillabirthdayImg from "../assets/vanillabirthday.jpg"; 
import angelbirthdayImg from "../assets/angel.jpg";
import chocowhippedImg from "../assets/chocowhipping.jpg";
import nakedCake from "../assets/nakes.jpg";
import redvelvetImg from "../assets/redvelvet.jpg";
import indianWhipped from "../assets/indian.jpg";
import coffeecake from "../assets/coffee.jpg";
import swissroll from "../assets/swissroll.jpg";
import cheeseCake from "../assets/cheesecake.jpg";
import custardCake from "../assets/custard.jpg";
import blueberrycake from "../assets/blueberrycake.jpg";

import "./CategoryPage.css";

export default function BirthdayCakes() {
  const cakes = [
    { name: "Chocolate with Praline Cake", price: "₹750 per half kg", img: chocolatebirthdayImg },
    { name: "Vanilla Cake with Whipping Cream / Angel Food Cake", price: "₹550 per half kg", img: angelbirthdayImg },
    { name: "Chocolate Cake with Whipping Cream", price: "₹600 per half kg", img: chocowhippedImg },
    { name: "Naked Cake with Swiss Meringue", price: "₹850 per half kg", img: nakedCake },
    { name: "Red Velvet Cake with Cream Cheese Frosting", price: "₹850 per half kg", img: redvelvetImg },
    { name: "Chocolate Cake with Indian Buttercream Frosting", price: "₹360 per half kg", img: indianWhipped },
    { name: "Vanilla Cake with Coffee Buttercream", price: "₹380 per half kg", img: coffeecake },
    { name: "Chocolate Swiss Roll", price: "₹800 per half kg", img: swissroll },
    { name: "Japanese Cheesecake", price: "₹180 per piece", img: cheeseCake },
    { name: "Classic Custard Cake", price: "₹750 per half kg", img: custardCake },
    { name: "Blueberry Cake ", price: "₹850 per half kg", img: blueberrycake },
  ];

  return (
    <div className="category-page">
      <h1 className="category-header">Birthday Cakes</h1>
      <div className="cake-grid">
        {cakes.map((cake, index) => (
          <div className="cake-card" key={index}>
            <img src={cake.img} alt={cake.name} className="cake-image" />
            <h3 className="cake-name">{cake.name}</h3>
            <p className="cake-price">{cake.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}