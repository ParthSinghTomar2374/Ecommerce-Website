import React from "react";
import "./Offers.css";
import exclusive from "../../assets/exclu.webp";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <section className="offers-section">
      <div className='offers-card'>
        <div className="offers-ambient" />
        <div className="offers-left">
          <span className="offers-tag">Exclusive Member Access</span>
          <h2 className="offers-title">
            Special Deals <br />
            <span>Up to 50% Off</span>
          </h2>
          <p className="offers-desc">
            Available only on our most coveted best-seller styles. Elevate your wardrobe today.
          </p>

          <div className="offers-perks">
            <span className="perk-pill">✨ Premium Quality</span>
            <span className="perk-pill">⚡ Limited Stock</span>
          </div>

          <Link to="/womens" className="offers-btn">
            Explore Deals Now
          </Link>
        </div>

        <div className="offers-right">
          <div className="offers-image-glow" />
          <img src={exclusive} alt="Exclusive Fashion Offer" className="offers-img" />
        </div>
      </div>
    </section>
  );
};

export default Offers;