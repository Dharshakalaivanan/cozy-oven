import cake from "../assets/pastries.jpg";
import "./Home.css";
import storyImg from "../assets/story.jpg";
import offerImg from "../assets/offer.jpg";
import healthyImg from "../assets/healthy.jpg";
import customImg from "../assets/custom.jpg";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate=useNavigate();
   return(
    <div className="home-container">
    <div className="home">

        {/* Background Image */}
        <img src={cake} alt="cake" className="home-image"/>

        {/* Header */}
        <div className="header">
            <h2 className="logo">The Cozy Oven</h2>
            <p className="phone">+91 </p>
        </div>

        {/* Hero Text Section */}
        <div className="hero-text">
            <h3>We Bake With </h3>
            <h3>Love</h3>
            <p>Freshly baked pastries, golden from the oven and crafted with love to bring sweetness to every moment.</p>
            <button className="explore-btn" onClick={()=> navigate("/explore")}>Explore</button>
        </div>

    </div>
    <div className="quote-section">
    <div className="quote-box">
        <h1 className="quote-header">Welcome to The Cozy Oven by Dhanya</h1>
        <p className="quote-text">Founded by Dhanya, this home bakery offers a delightful range of freshly baked breads, brownies, cookies, cakes, and desserts made in small batches to ensure homemade quality and rich flavors. Along with indulgent treats, The Cozy Oven by Dhanya also provides healthier baking options specially made for children, people on diet plans, individuals managing diabetes, and elderly customers who prefer lighter, more balanced sweets. Each creation is thoughtfully prepared to bring comfort, nourishment, and joy in every bite, making every moment a little sweeter and cozier</p>
    </div>
    </div>
   <div className="cards-section">
  <div className="card">
    <img src={storyImg} alt="Our Story" />
    <div className="card-content">
      <h2>Our Story</h2>
      <p>
        The Cozy Oven by Dhanya was created from a deep passion for baking and the joy of sharing homemade goodness with others. What started as a love for creating fresh breads, cakes, and desserts in a home kitchen has grown into a place where every bake is made with care and attention to detail.
      </p>
    </div>
  </div>

  <div className="card">
    <img src={offerImg} alt="What We Offer" />
    <div className="card-content">
      <h2>🍪 What We Offer</h2>
      <ul>
        <li>Cakes for special occasions</li>
        <li>Brownies and dessert bars</li>
        <li>Fresh breads and buns</li>
        <li>Cookies and tarts</li>
        <li>Seasonal and specialty desserts</li>
      </ul>
    </div>
  </div>

  <div className="card">
    <img src={healthyImg} alt="Healthy Baking" />
    <div className="card-content">
      <h2>🌿 Healthy Baking Options</h2>
      <ul>
        <li>Children</li>
        <li>People following diet plans</li>
        <li>Individuals managing diabetes</li>
        <li>Elderly customers who prefer lighter desserts</li>
      </ul>
    </div>
  </div>

  <div className="card">
    <img src={customImg} alt="Custom Orders" />
    <div className="card-content">
      <h2>🎂 Custom Orders</h2>
      <p>
        We also accept custom orders for birthdays, celebrations, and small gatherings, where each cake and dessert is designed to match your occasion and taste preferences.
      </p>
    </div>
  </div>
</div>
    </div>
   );
}