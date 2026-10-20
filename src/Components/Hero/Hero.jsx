import React from 'react';
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import men from "../../assets/p8.webp";
import { Link } from 'react-router-dom';
import "./Hero.css";

const Hero = () => {
  const scrollToCollections = () => {
    const el = document.getElementById('new-collections-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }
  };

  return (
    <section className='hero'>
      <div className="hero-ambient-glow" />
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-tag-pill">
            <span className="hero-pulse-dot" />
            <span>Spring / Summer 2026 Collection</span>
          </div>

          <h1 className="hero-title">
            Redefining <span className="hero-highlight">Modern Elegance</span> For Everyone
            <img className="hero-sparkle" src={hand_icon} alt="Sparkle" />
          </h1>

          <p className="hero-description">
            Discover curated luxury apparel crafted for unmatched comfort, timeless style, and effortless everyday sophistication.
          </p>

          <div className="hero-actions">
            <button className="hero-primary-btn" onClick={scrollToCollections}>
              <span>Explore Collection</span>
              <div className="hero-btn-arrow">
                <img src={arrow_icon} alt="Arrow" />
              </div>
            </button>
            <Link to="/womens" className="hero-secondary-btn">
              Shop Women
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="hero-stat-number">50k+</span>
              <span className="hero-stat-label">Happy Clients</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <span className="hero-stat-number">4.9 ★</span>
              <span className="hero-stat-label">Customer Rating</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Authentic Design</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-card">
            <div className="hero-image-backdrop" />
            <img className="hero-model-img" src={men} alt="Fashion Showcase" />
            <div className="hero-float-badge badge-top">
              <span className="badge-icon">🔥</span>
              <div>
                <strong>Trending Now</strong>
                <p>Top Rated Collection</p>
              </div>
            </div>
            <div className="hero-float-badge badge-bottom">
              <span className="badge-icon">⚡</span>
              <div>
                <strong>Special Edition</strong>
                <p>Limited Stock Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
