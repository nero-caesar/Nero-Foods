import React from "react";
import "./home.css";
import Hero from "../../Component/Home/Hero/hero";
import Section1 from "../../Component/Home/Section1/section1";
import Section2 from "../../Component/Home/Section2/section2";

const Home: React.FC = () => {
  return (
    <main>
         <Hero />
        <Section1 />
        <Section2 />
    </main>
  );
};

export default Home;
