import React, { useContext, useState } from 'react'
import "./ProductDisplay.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addTocart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("M");
  const [activeImage, setActiveImage] = useState(product?.image);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const currentImg = activeImage || product.image;
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const discountSavings = product.old_price && product.old_price > product.new_price
    ? (product.old_price - product.new_price).toFixed(2)
    : null;

  const handleAddToCart = () => {
    addTocart(product.id);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className='productdisplay-container'>
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            {[1, 2, 3].map((_, idx) => (
              <div 
                key={idx} 
                className={`thumb-wrap ${currentImg === product.image ? 'active-thumb' : ''}`}
                onClick={() => setActiveImage(product.image)}
              >
                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </div>

          <div className='productdisplay-main-wrap'>
            {discountSavings && (
              <span className="product-save-badge">
                Save ${discountSavings}
              </span>
            )}
            <img className='productdisplay-main-img' src={currentImg} alt={product.name} />
          </div>
        </div>

        <div className="productdisplay-right">
          <div className="product-category-tag">
            {product.category === 'kid' ? 'Kids Fashion' : product.category === 'men' ? "Men's Wear" : "Women's Collection"}
          </div>

          <h1 className="product-main-title">{product.name}</h1>

          <div className="productdisplay-right-star">
            <div className="star-icons">
              <img src={star_icon} alt="Star" />
              <img src={star_icon} alt="Star" />
              <img src={star_icon} alt="Star" />
              <img src={star_icon} alt="Star" />
              <img src={star_dull_icon} alt="Star Dull" />
            </div>
            <span className="star-reviews-count">(130 verified reviews)</span>
          </div>

          <div className="productdisplay-right-prices">
            <span className="productdisplay-right-price-new">
              ${Number(product.new_price).toFixed(2)}
            </span>
            {product.old_price && (
              <span className="productdisplay-right-price-old">
                ${Number(product.old_price).toFixed(2)}
              </span>
            )}
          </div>

          <p className="productdisplay-right-description">
            Tailored from ultra-breathable, premium fabric. Designed for all-day comfort with modern minimalist tailoring and durable stitching for lasting style.
          </p>

          <div className='productdisplay-right-size'>
            <div className="size-header-row">
              <h3>Select Size</h3>
              <span className="size-guide-btn">Size Guide</span>
            </div>
            <div className="productdisplay-right-sizes">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`size-box ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-actions-wrap">
            <button 
              className={`product-add-btn ${isAdded ? 'added' : ''}`} 
              onClick={handleAddToCart}
            >
              {isAdded ? "✓ Added to Cart!" : "Add To Shopping Bag"}
            </button>
          </div>

          <div className="product-trust-grid">
            <div className="trust-item">
              <span className="trust-icon">🚚</span>
              <div>
                <strong>Free Express Shipping</strong>
                <p>On all domestic orders over $50</p>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🔄</span>
              <div>
                <strong>30-Day Hassle-Free Returns</strong>
                <p>Exchange or refund anytime</p>
              </div>
            </div>
          </div>

          <div className="product-meta-row">
            <span><strong>Category:</strong> {product.category.toUpperCase()}, Premium Streetwear, Modern Apparel</span>
            <span><strong>Tags:</strong> Trending, Best Seller, New In, Sustainable</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay