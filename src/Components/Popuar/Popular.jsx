import React from 'react'
import "./Popular.css"
import Item from "../Item/Item"
import data_product from '../../assets/data'

const Popular = () => {
  return (
    <section className='popular-section'>
      <div className="section-header">
        <span className="section-badge">Curated Collection</span>
        <h2 className="section-title">Popular in Women</h2>
        <div className="section-indicator" />
        <p className="section-subtitle">
          Explore the most-loved styles and seasonal favorites this week.
        </p>
      </div>

      <div className="popular-grid">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Popular
