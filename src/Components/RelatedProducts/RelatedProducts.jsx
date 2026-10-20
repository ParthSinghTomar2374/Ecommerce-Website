import React from 'react'
import "./RelatedProducts.css"
import Item from '../Item/Item'
import data_product from '../../assets/data'

const RelatedProducts = () => {
  return (
    <section className='relatedproducts-section'>
      <div className="section-header">
        <span className="section-badge">Complete Your Look</span>
        <h2 className="section-title">Related Products</h2>
        <div className="section-indicator" />
        <p className="section-subtitle">
          Customers who viewed this piece also loved these coordinating essentials.
        </p>
      </div>

      <div className="relatedproducts-grid">
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

export default RelatedProducts