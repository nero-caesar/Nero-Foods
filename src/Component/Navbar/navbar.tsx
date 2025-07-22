import type React from "react"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { CiHome } from "react-icons/ci"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { LuShoppingCart } from "react-icons/lu"
import type { CartItem } from "../Cart/carttypes.ts"
import "./navbar.css"

interface NavbarProps {
  cart: CartItem[]
}

const Navbar: React.FC<NavbarProps> = ({ cart }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <NavLink to="/" className="navbar-brand" onClick={closeMobileMenu}>
        <h1 className="navbar-logo">
          <span>N</span>ero<span>F</span>oods
        </h1>
      </NavLink>

      <button className="navbar-mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
        <IoMdMenu />
      </button>

      <div className={`navbar-links ${mobileMenuOpen ? "open" : ""}`}>
        {mobileMenuOpen && (
          <button className="navbar-close" onClick={closeMobileMenu} aria-label="Close navigation menu">
            <IoMdClose />
          </button>
        )}

        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
          onClick={closeMobileMenu}
        >
          <CiHome className="navbar-icon" />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
          onClick={closeMobileMenu}
        >
          <IoMdMenu className="navbar-icon" />
          <span>Menu</span>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "navbar-link active cart-link" : "navbar-link cart-link")}
          onClick={closeMobileMenu}
          aria-label={`Shopping cart with ${totalItems} items`}
        >
          <LuShoppingCart className="navbar-icon" />
          <span>Cart</span>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
