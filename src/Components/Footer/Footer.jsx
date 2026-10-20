import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.webp"
import instagram_icon from "../../assets/instagram.png"
import facebook_icon from "../../assets/facebook.png"
import whatsapp_icon from "../../assets/whatsapp.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-badge">
              <img src={logo} alt="Shopify Logo" />
            </div>
            <span>Shopify</span>
          </Link>
          <p className="footer-brand-desc">
            Your destination for contemporary fashion, timeless luxury essentials, and trend-setting styles for everyone.
          </p>
          <div className='footer-social-icons'>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon-wrap" aria-label="Instagram">
              <img src={instagram_icon} alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon-wrap" aria-label="Facebook">
              <img src={facebook_icon} alt="Facebook" />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="footer-icon-wrap" aria-label="WhatsApp">
              <img src={whatsapp_icon} alt="WhatsApp" />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="footer-links-col">
          <h4>Collections</h4>
          <ul>
            <li><Link to="/mens">Men's Apparel</Link></li>
            <li><Link to="/womens">Women's Collection</Link></li>
            <li><Link to="/kids">Kids & Youth</Link></li>
            <li><Link to="/">Latest Arrivals</Link></li>
            <li><Link to="/">Seasonal Drops</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="footer-links-col">
          <h4>Customer Care</h4>
          <ul>
            <li><Link to="/cart">My Shopping Cart</Link></li>
            <li><a href="#orders">Track Order</a></li>
            <li><a href="#shipping">Shipping & Returns</a></li>
            <li><a href="#sizing">Size Guide</a></li>
            <li><a href="#support">Help & Support</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-links-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Shopify</a></li>
            <li><a href="#sustainability">Sustainability</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {new Date().getFullYear()} Shopify Inc. All rights reserved.</p>
          <div className="footer-badges">
            <span className="footer-badge">🔒 256-Bit SSL Encryption</span>
            <span className="footer-badge">✨ 100% Authentic Quality</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer