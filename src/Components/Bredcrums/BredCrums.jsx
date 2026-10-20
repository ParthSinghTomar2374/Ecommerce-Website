import React from 'react'
import "./BredCrums.css";
import arrow_icon from "../../assets/arrow_icon.png"
import { Link } from 'react-router-dom';

const Bredcrums = (props) => {
  const { product } = props;
  if (!product) return null;

  const categoryPath = product.category === 'kid' ? '/kids' : `/${product.category}s`;

  return (
    <nav className='bredcrums-nav' aria-label="Breadcrumb">
      <div className='bredcrums-container'>
        <Link to="/" className="breadcrumb-item">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <Link to="/" className="breadcrumb-item">Shop</Link>
        <span className="breadcrumb-sep">/</span>
        <Link to={categoryPath} className="breadcrumb-item breadcrumb-cat">{product.category}</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">{product.name}</span>
      </div>
    </nav>
  )
}

export default Bredcrums