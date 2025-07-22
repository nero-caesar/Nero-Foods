import type React from "react"
import { FaPlus } from "react-icons/fa"
import { toast } from "react-toastify"
import type { MenuItemType } from "./menudata.ts"
import type { Product } from "../Cart/carttypes.ts"
import "./menuitem.css"

type Props = {
  item: MenuItemType
  onAddToCart: (product: Product) => void
}

const MenuItem: React.FC<Props> = ({ item, onAddToCart }) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      currencyDisplay: "symbol",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleAddToCart = () => {
    onAddToCart(item)
    toast.success(`${item.name} added to your cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  return (
    <div className="menu-item">
      <div className="menu-image-container">
        <img src={item.image || "/placeholder.svg"} alt={`${item.name} - ${item.description}`} className="menu-image" />
      </div>
      <div className="menu-content">
        <h3 className="menu-title">{item.name}</h3>
        <p className="menu-desc">{item.description}</p>
        <div className="menu-footer">
          <p className="menu-price">{formatPrice(item.price)}</p>
          <button className="menu-button" onClick={handleAddToCart} aria-label={`Add ${item.name} to cart`}>
            <FaPlus className="menu-button-icon" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
