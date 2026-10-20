import React from "react";
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = (props) => {
  const discountPercent = props.old_price && props.old_price > props.new_price
    ? Math.round(((props.old_price - props.new_price) / props.old_price) * 100)
    : null;

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='item-card'>
      <div className="item-image-wrapper">
        <Link to={`/product/${props.id}`} onClick={handleScroll} className="item-image-link">
          <img src={props.image} alt={props.name} className="item-image" loading="lazy" />
        </Link>
        {discountPercent && (
          <span className="item-discount-badge">
            -{discountPercent}%
          </span>
        )}
        <div className="item-quick-overlay">
          <Link to={`/product/${props.id}`} onClick={handleScroll} className="item-quick-btn">
            View Details
          </Link>
        </div>
      </div>

      <div className="item-info">
        <h3 className="item-title">
          <Link to={`/product/${props.id}`} onClick={handleScroll}>
            {props.name}
          </Link>
        </h3>
        <div className='item-prices'>
          <span className="item-price-new">
            ${Number(props.new_price).toFixed(2)}
          </span>
          {props.old_price && (
            <span className="item-price-old">
              ${Number(props.old_price).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;