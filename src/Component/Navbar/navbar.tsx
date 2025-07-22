import React from "react";
import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import type { CartItem } from "../Cart/carttypes.ts";
import "./navbar.css";

interface NavbarProps {
  cart: CartItem[];
}

const Navbar: React.FC<NavbarProps> = ({ cart }) => {
  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav>
        <h1>
            {/* <img src={img} alt="Logo" /> */}
            <span>N</span>ero<span>F</span>oods
        </h1>
        <div className="nav-links">
            <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
              <CiHome
                style={{ 
                  fontSize: "20px", 
                }}
                strokeWidth={1}
              />
              Home
            </NavLink>
            <NavLink to="/menu" className={({ isActive }) => isActive ? "active" : ""}>
              <IoMdMenu
               style={{ 
                 fontSize: "20px", 
               }}
               strokeWidth={1}
              />
              Menu
            </NavLink>
            <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>
              <LuShoppingCart
                style={{
                  fontSize: "20px",
                }}
                strokeWidth={2}
              />
              Cart
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </NavLink>
        </div>
    </nav>
  );
};

export default Navbar;
