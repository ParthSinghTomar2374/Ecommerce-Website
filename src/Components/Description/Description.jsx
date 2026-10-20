import React, { useState } from 'react'
import "./Description.css"

const Description = () => {
  const [activeTab, setActiveTab] = useState("desc")

  return (
    <div className='descriptionbox-container'>
      <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
          <button 
            type="button"
            className={`descriptionbox-nav-box ${activeTab === 'desc' ? 'active' : ''}`}
            onClick={() => setActiveTab('desc')}
          >
            Product Overview
          </button>
          <button 
            type="button"
            className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Verified Reviews (135)
          </button>
          <button 
            type="button"
            className={`descriptionbox-nav-box ${activeTab === 'shipping' ? 'active' : ''}`}
            onClick={() => setActiveTab('shipping')}
          >
            Shipping & Returns
          </button>
        </div>

        <div className="descriptionbox-description">
          {activeTab === 'desc' && (
            <div className="tab-pane">
              <p>
                Engineered for versatility, comfort, and enduring sophistication. Each garment is meticulously crafted utilizing ethically sourced textiles designed to retain shape, vibrant texture, and pristine softness through repeated wear.
              </p>
              <div className="features-checklist">
                <div>✓ 100% sustainably harvested fabric</div>
                <div>✓ Reinforced seam durability for active mobility</div>
                <div>✓ Pre-shrunk finish for dependable sizing</div>
                <div>✓ Machine washable with low-heat tumble dry</div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="tab-pane">
              <div className="review-stat-summary">
                <div className="rating-big">4.9</div>
                <div>
                  <strong>Overall Customer Satisfaction</strong>
                  <p>Based on 135 verified purchaser ratings worldwide.</p>
                </div>
              </div>
              <div className="sample-review">
                <div className="review-header">
                  <strong>Sarah M.</strong>
                  <span className="review-verified">✓ Verified Buyer</span>
                  <span className="review-rating">★★★★★</span>
                </div>
                <p>
                  "The texture and fit exceeded my expectations! Fits true to size and feels like top designer luxury fashion. Received multiple compliments on day one."
                </p>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="tab-pane">
              <p>
                <strong>Express Delivery:</strong> Orders placed before 2 PM EST are dispatched the same business day. Delivery takes 2-4 business days.
              </p>
              <p>
                <strong>Free Return Policy:</strong> If you are not completely satisfied, return items in original condition within 30 days for a full refund or direct size exchange with prepaid return shipping labels included in every box.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Description