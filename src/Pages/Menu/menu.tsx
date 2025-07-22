import React from "react";
import MenuPlus from "../../Component/Menu/menuplus.tsx";
import "./menu.css";
import type { Product } from "../../Component/Cart/carttypes.ts";

interface Props {
  onAddToCart: (product: Product) => void;
}

const Menu: React.FC<Props> = ({ onAddToCart }) => {
  return (
    <main className="menu">
      <div className="menu-text">
        <h1>Our <span>Menu</span></h1>
        <p>Discover our delicious selection of freshly prepared meals, made with the finest ingredients and delivered hot to your door.</p>
      </div>
        <MenuPlus onAddToCart={onAddToCart} />
    </main>
  );
};

export default Menu;
