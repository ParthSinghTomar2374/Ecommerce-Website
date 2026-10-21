import React, { useContext, useState } from 'react'
import "./CItems.css"
import remove_icon from "../../assets/remove.webp"
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

const CItems = () => {
  const { getTotalCartAmount, all_product, cartItems, addTocart, removeFromCart, getTotalCartItems } = useContext(ShopContext);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const totalItemsCount = getTotalCartItems ? getTotalCartItems() : 0;
  const rawSubtotal = getTotalCartAmount();

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoCode.trim()) return;

    if (promoCode.trim().toUpperCase() === "SAVE15" || promoCode.trim().toUpperCase() === "VIP") {
      setDiscount(0.15);
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid code. Try using 'SAVE15'");
      setDiscount(0);
      setPromoApplied(false);
    }
  };

  const discountAmount = rawSubtotal * discount;
  const finalTotal = Math.max(0, rawSubtotal - discountAmount);

  if (totalItemsCount === 0) {
    return (
      <div className="cart-empty-container">
        <div className="cart-empty-card">
          <div className="cart-empty-icon">🛍️</div>
          <h2>Your Shopping Cart is Empty</h2>
          <p>Explore our latest designer drops and add your favorite pieces to the bag.</p>
          <Link to="/" className="cart-empty-btn">
            Explore New Arrivals
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='cart-page-wrapper'>
      <div className="cart-header-title">
        <h1>Your Shopping Bag</h1>
        <span>({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'})</span>
      </div>

      <div className="cart-layout-grid">
        <div className="cart-items-column">
          <div className="cart-table-header">
            <span>Product</span>
            <span>Details</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span></span>
          </div>

          <div className="cart-items-list">
            {all_product.map((item) => {
              if (cartItems[item.id] > 0) {
                const itemTotal = (item.new_price * cartItems[item.id]).toFixed(2);
                return (
                  <div key={item.id} className="cart-row-item">
                    <div className="cart-item-img-wrap">
                      <Link to={`/product/${item.id}`}>
                        <img src={item.image} alt={item.name} />
                      </Link>
                    </div>

                    <div className="cart-item-title-col">
                      <Link to={`/product/${item.id}`} className="cart-item-name">
                        {item.name}
                      </Link>
                      <span className="cart-item-cat">Category: {item.category}</span>
                    </div>

                    <div className="cart-item-unit-price">
                      ${Number(item.new_price).toFixed(2)}
                    </div>

                    <div className="cart-item-qty-stepper">
                      <button 
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="qty-btn"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="qty-number">{cartItems[item.id]}</span>
                      <button 
                        type="button"
                        onClick={() => addTocart(item.id)}
                        className="qty-btn"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <div className="cart-item-subtotal">
                      ${itemTotal}
                    </div>

                    <div className="cart-item-remove-col">
                      <button 
                        type="button"
                        className="cart-remove-btn" 
                        onClick={() => removeFromCart(item.id)}
                        title="Remove from cart"
                      >
                        <img src={remove_icon} alt="Remove" />
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="cart-summary-column">
          <div className="cart-summary-card">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${rawSubtotal.toFixed(2)}</span>
            </div>

            {promoApplied && (
              <div className="summary-row discount-row">
                <span>Promo Discount (15%)</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="summary-row">
              <span>Estimated Shipping</span>
              <span className="free-shipping-tag">FREE</span>
            </div>

            <div className="summary-divider" />

            <div className="summary-row total-row">
              <span>Estimated Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>

            <form onSubmit={handleApplyPromo} className="promo-form-wrap">
              <div className="promo-input-group">
                <input
                  type="text"
                  placeholder="Enter promo code (e.g. SAVE15)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button type="submit" className="promo-apply-btn">
                  Apply
                </button>
              </div>
              {promoApplied && <p className="promo-success">✓ 15% discount successfully applied!</p>}
              {promoError && <p className="promo-error">{promoError}</p>}
            </form>

            <button 
              className={`checkout-btn ${isCheckingOut ? 'checking-out' : ''}`}
              onClick={() => {
                setIsCheckingOut(true);
                setTimeout(() => setIsCheckingOut(false), 3000);
              }}
            >
              {isCheckingOut ? "Connecting to Secure Gateway..." : "Proceed to Checkout →"}
            </button>

            <div className="summary-trust-bullets">
              <span>🔒 256-Bit Bank Level Encryption</span>
              <span>⚡ Free 2-Day Express Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CItems;