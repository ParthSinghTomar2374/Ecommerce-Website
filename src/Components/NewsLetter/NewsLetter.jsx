import React, { useState } from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() && email.includes("@")) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className='newsletter-section'>
      <div className='newsletter-card'>
        <div className="newsletter-ambient" />
        <span className="newsletter-badge">Stay Connected</span>
        <h2 className="newsletter-title">Get 15% Off Your First Order</h2>
        <p className="newsletter-subtitle">
          Subscribe to the Shopify newsletter for exclusive collection releases, insider perks, and VIP private sales.
        </p>

        {subscribed ? (
          <div className="newsletter-success">
            <span className="success-icon">✨</span>
            <div>
              <strong>Welcome to the VIP Club!</strong>
              <p>Check your email for your exclusive 15% discount code.</p>
            </div>
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="newsletter-input-wrap">
              <span className="newsletter-input-icon">✉️</span>
              <input
                type='email'
                placeholder='Enter your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="newsletter-submit-btn">
              Subscribe
            </button>
          </form>
        )}

        <p className="newsletter-guarantee">
          🔒 We treat your information with care. Unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  )
}

export default NewsLetter
