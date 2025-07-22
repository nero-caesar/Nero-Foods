import React from "react";
import type { MenuItemType } from "./menudata.ts";
import type { Product } from "../Cart/carttypes.ts";
import "./menustyle.css";

type Props = {
  item: MenuItemType;
  onAddToCart: (product: Product) => void;
};

const MenuItem: React.FC<Props> = ({ item, onAddToCart }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="menu-image" />
      <h3 className="menu-title">{item.name}</h3>
      <p className="menu-desc">{item.description}</p>
      <p className="menu-price">₦{item.price}</p>
      <button className="menu-button" onClick={() => onAddToCart(item)}> {item.buttonText}</button>
    </div>
  );
};

export default MenuItem;