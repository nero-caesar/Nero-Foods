import React from "react"
import { ToastContainer } from "react-toastify"
import MenuPlus from "../../Component/Menu/menuplus.tsx"
import Footer from "../../Component/Footer/Footer.tsx"
import type { Product } from "../../Component/Cart/carttypes.ts"
import "react-toastify/dist/ReactToastify.css"
import "./menu.css"

interface Props {
  onAddToCart: (product: Product) => void
}

const Menu: React.FC<Props> = ({ onAddToCart }) => {
  return (
    <div className="menu-container">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="menu-header">
        <h1 className="menu-title">
          Our <span>Menu</span>
        </h1>
        <p className="menu-description">
          Discover our delicious selection of freshly prepared meals, made with the finest ingredients and delivered hot
          to your door.
        </p>
      </div>

      <div className="menu-content">
        <MenuPlus onAddToCart={onAddToCart} />
      </div>

      <Footer />
    </div>
  )
}

export default Menu
