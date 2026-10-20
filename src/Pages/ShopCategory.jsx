import React, { useContext, useState } from 'react'
import "../CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortBy, setSortBy] = useState("default");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter products by category
  let categoryProducts = all_product.filter((item) => item.category === props.category);

  // Sorting logic
  if (sortBy === "low-to-high") {
    categoryProducts = [...categoryProducts].sort((a, b) => a.new_price - b.new_price);
  } else if (sortBy === "high-to-low") {
    categoryProducts = [...categoryProducts].sort((a, b) => b.new_price - a.new_price);
  } else if (sortBy === "name") {
    categoryProducts = [...categoryProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  const categoryName = props.category === "men" ? "Men's" : props.category === "women" ? "Women's" : "Kids'";

  return (
    <div className='shopcategory-container'>
      {/* Banner */}
      <div className="shopcategory-banner-card">
        <img className='shopcategory-banner' src={props.banner} alt={`${categoryName} Collection Banner`} />
        <div className="shopcategory-banner-overlay">
          <span className="banner-tag">Exclusive 2026 Season</span>
          <h1>{categoryName} Collection</h1>
          <p>Curated looks designed for contemporary comfort & premium style.</p>
        </div>
      </div>

      {/* Filter / Sort Bar */}
      <div className='shopcategory-indexSort'>
        <p className="shopcategory-count">
          Showing <span>1-{categoryProducts.length}</span> of {categoryProducts.length} products
        </p>

        <div className='shopcategory-sort-wrapper'>
          <button 
            type="button"
            className='shopcategory-sort-btn' 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>Sort: {sortBy === "low-to-high" ? "Price: Low to High" : sortBy === "high-to-low" ? "Price: High to Low" : sortBy === "name" ? "Name" : "Featured"}</span>
            <img 
              src={dropdown_icon} 
              alt="Toggle" 
              className={`sort-arrow ${isDropdownOpen ? 'open' : ''}`} 
            />
          </button>

          {isDropdownOpen && (
            <div className="shopcategory-dropdown">
              <div 
                className={`dropdown-option ${sortBy === "default" ? "selected" : ""}`}
                onClick={() => { setSortBy("default"); setIsDropdownOpen(false); }}
              >
                Featured
              </div>
              <div 
                className={`dropdown-option ${sortBy === "low-to-high" ? "selected" : ""}`}
                onClick={() => { setSortBy("low-to-high"); setIsDropdownOpen(false); }}
              >
                Price: Low to High
              </div>
              <div 
                className={`dropdown-option ${sortBy === "high-to-low" ? "selected" : ""}`}
                onClick={() => { setSortBy("high-to-low"); setIsDropdownOpen(false); }}
              >
                Price: High to Low
              </div>
              <div 
                className={`dropdown-option ${sortBy === "name" ? "selected" : ""}`}
                onClick={() => { setSortBy("name"); setIsDropdownOpen(false); }}
              >
                Alphabetical: A-Z
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="shopcategory-products">
        {categoryProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {/* Explore More Button */}
      <div className="shopcategory-loadmore-wrap">
        <button className="shopcategory-loadmore" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to Top ↑
        </button>
      </div>
    </div>
  )
}

export default ShopCategory