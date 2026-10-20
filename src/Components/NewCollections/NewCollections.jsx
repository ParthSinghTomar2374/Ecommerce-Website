import React from 'react'
import "./NewCollections.css"
import new_collections from '../../assets/newcollections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <section className='newcollections-section' id="new-collections-section">
      <div className="section-header">
        <span className="section-badge">Fresh Off The Runway</span>
        <h2 className="section-title">New Collections</h2>
        <div className="section-indicator" />
        <p className="section-subtitle">
          Unveil the newest seasonal silhouettes, contemporary textures, and statement pieces.
        </p>
      </div>

      <div className='newcollections-grid'>
        {new_collections.map((item, i) => {
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

export default NewCollections