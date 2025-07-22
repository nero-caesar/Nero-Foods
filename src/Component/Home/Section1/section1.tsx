import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import "./section1.css";

const Section1: React.FC = () => {
  return (
    <main className="section1">
      <div className="container">
        <h2>Why choose <span>Nero Foods</span> ?</h2>
        <p className="gradient-text">Nero Foods offers a wide variety of organic and healthy food options.</p>
      </div>
      <section className="section1-content">
        <div className="div">
            <div className="icon"><FaRegStar /></div>
            <h3>Premium Quality</h3>
            <p>We source the finest ingredients and work with top-rated restaurants to ensure every meal meets our high standards.</p>
        </div>
        <div className="div">
            <div className="icon"><MdOutlineAccessTime /></div>
            <h3>Fast Delivery</h3>
            <p>Get your favorite meals delivered in 30 minutes or less. Hot, fresh, and ready to enjoy.</p>
        </div>
        <div className="div">
            <div className="icon"><RiCustomerService2Line /></div>
            <h3>Customer Support</h3>
            <p>Our dedicated support team is available 24/7 to assist you with any inquiries or issues.</p>
        </div>
      </section>
    </main>
  );
};

export default Section1;
