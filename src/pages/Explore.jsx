import { Link } from "react-router-dom";
import "./Explore.css";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DryCakes from "./DryCakes";

// Category images
import dryCakeImg from "../assets/dry.jpg";
import cupcakesImg from "../assets/cupcake.jpg";
import muffinsImg from "../assets/muffin.jpg";
import cookiesImg from "../assets/cookies.jpg";
import breadsImg from "../assets/breads.jpg";
import birthdayCakeImg from "../assets/birthday-cake.jpg";

// Featured slider images
import featured1 from "../assets/featured1.jpg";
import featured2 from "../assets/featured2.jpg";
import featured3 from "../assets/featured3.jpg";
import Pizza from "./Pizza";
import BreakfastSeries from "./BreakfastSeries";
import pizzaImg from "../assets/pizza.jpg";
import breakfastSeriesImg from "../assets/breakfast.jpg";
import CheeseCake from "./CheeseCake";
import cheesecakeImg from "../assets/cheesecake.jpg";
import tier from "../assets/2tier.jpg";
import blue from "../assets/blue.jpg";

export default function Explore() {
    const Slider = SliderImport.default || SliderImport;
  const categories = [
    { name: "Dry Cakes", img: dryCakeImg },
    { name: "Cupcakes", img: cupcakesImg },
    { name: "Cookies", img: cookiesImg },
    { name: "Breads", img: breadsImg },
    { name: "Birthday Cakes", img: birthdayCakeImg },
    { name: "Pizza", img: pizzaImg },
    { name: "Breakfast Series", img: breakfastSeriesImg },
    {name: "Cheese Cake", img: cheesecakeImg }
  ];
 

  const featuredImages = [featured1, featured2, featured3, tier, blue];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="explore-page">
      {/* Page Header */}
      <h1 className="explore-header">Explore Our Menu!</h1>

      {/* Category Cards */}
      <div className="category-cards">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/${cat.name.toLowerCase().replace(/\s/g, "-")}`}
            className="category-card"
          >
            <img src={cat.img} alt={cat.name} className="category-image" />
            <h3 className="category-title">{cat.name}</h3>
          </Link>
        ))}
      </div>

      {/* Featured Slider */}
      <div className="featured-slider">
        <Slider {...sliderSettings}>
          {featuredImages.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Featured ${index + 1}`}
                className="featured-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Cozy Quotes */}
      <div className="explore-quotes">
        <p>"Baking is love made visible. Every bite tells a story."</p>
        <p>"Our treats are freshly baked, handcrafted, and made to bring joy!"</p>
      </div>
    </div>
  );
}