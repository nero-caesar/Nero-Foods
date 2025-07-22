import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./hero.css";

const Hero: React.FC = () => (
  <section className="hero">
      <div>
        <h1>Welcome to Nero Foods</h1>
        <h2>Delicious Food</h2>
        <h2>Delivered Fast</h2>
      </div>
      <p>Craving something delicious? Order from our premium selection of meals and get them delivered hot and fresh to your doorstep.</p>
      <button
        onClick={() => window.location.href = "/menu"}
      >
        Order Now
        <FaArrowRightLong />
      </button>
  </section>
);

export default Hero;
