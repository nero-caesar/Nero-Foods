// src/Pages/Menu/menu.tsx
import React from "react";
import menuData from "./menudata.ts";
import MenuItem from "./menuitem.tsx";
import type { Product } from "../../Component/Cart/carttypes.ts";
import "./menustyle.css";

interface Props {
  onAddToCart: (product: Product) => void;
}

const MenuPlus: React.FC<Props> = ({ onAddToCart }) => {
  return (
    <div className="menu-grid">
      {menuData.map((item) => (
        <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default MenuPlus;
