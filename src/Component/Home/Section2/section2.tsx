import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./section2.css";

const Section2: React.FC = () => {
  return (
    <main className="section2">
        <h1>Ready to Taste the Difference?</h1>
        <p>Browse our menu and experience the best in healthy, organic food in just a few clicks.</p>
        <button
            onClick={() => window.location.href = "/menu"}
        >View Menu
        <FaArrowRightLong />
        </button> 
    </main>
  );
}
export default Section2;