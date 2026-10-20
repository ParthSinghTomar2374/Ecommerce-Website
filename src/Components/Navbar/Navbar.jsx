import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart from "../../assets/cart_icon.png"
import { Link, useLocation } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const location = useLocation()
  const { getTotalCartItems } = useContext(ShopContext)
  const [activeMenu, setActiveMenu] = useState("home")

  useEffect(() => {
    const path = location.pathname
    if (path === "/") setActiveMenu("home")
    else if (path.startsWith("/mens")) setActiveMenu("mens")
    else if (path.startsWith("/womens")) setActiveMenu("womens")
    else if (path.startsWith("/kids")) setActiveMenu("kids")
    else setActiveMenu("")
  }, [location.pathname])

  const cartCount = getTotalCartItems ? getTotalCartItems() : 0

  return (
    <header className='navbar-wrapper'>
      <nav className='navbar'>
        <Link to="/" className="nav-logo" onClick={() => setActiveMenu("home")}>
          <div className="nav-logo-badge">
            <img src={logo} alt="Shopify Logo" />
          </div>
          <div className="nav-logo-text">
            <span>Shopify</span>
            <span className="nav-logo-sub">Premium Store</span>
          </div>
        </Link>

        <ul className='nav-menu'>
          <li className={activeMenu === "home" ? "active" : ""}>
            <Link to="/" onClick={() => setActiveMenu("home")}>
              Home
              <span className="nav-indicator" />
            </Link>
          </li>
          <li className={activeMenu === "mens" ? "active" : ""}>
            <Link to="/mens" onClick={() => setActiveMenu("mens")}>
              Men
              <span className="nav-indicator" />
            </Link>
          </li>
          <li className={activeMenu === "womens" ? "active" : ""}>
            <Link to="/womens" onClick={() => setActiveMenu("womens")}>
              Women
              <span className="nav-indicator" />
            </Link>
          </li>
          <li className={activeMenu === "kids" ? "active" : ""}>
            <Link to="/kids" onClick={() => setActiveMenu("kids")}>
              Kids
              <span className="nav-indicator" />
            </Link>
          </li>
        </ul>

        <div className="nav-login-cart">
          <Link to="/login" className="nav-login-btn">
            Login
          </Link>
          <Link to="/cart" className="nav-cart-btn" aria-label="Cart">
            <div className="nav-cart-icon-wrap">
              <img src={cart} alt="Shopping Cart" />
              <span className={`nav-cart-count ${cartCount > 0 ? 'has-items' : ''}`}>
                {cartCount}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
