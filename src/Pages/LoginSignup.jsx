import React, { useState } from 'react'
import "../CSS/LoginSignup.css"
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [agreed, setAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className='loginsignup-page'>
      <div className="loginsignup-ambient-orb" />
      <div className="loginsignup-card">
        <div className="loginsignup-header">
          <span className="auth-badge">{isLogin ? "Welcome Back" : "Get Started"}</span>
          <h1>{isLogin ? "Account Login" : "Create Account"}</h1>
          <p>{isLogin ? "Enter your credentials to access your orders & wishlist." : "Join thousands of members enjoying exclusive fashion drops."}</p>
        </div>

        <form className='loginsignup-fields' onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="auth-input-group">
              <label>Full Name</label>
              <input 
                type='text' 
                placeholder='e.g. John Doe'
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required={!isLogin}
              />
            </div>
          )}

          <div className="auth-input-group">
            <label>Email Address</label>
            <input 
              type='email' 
              placeholder='name@example.com'
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <input 
              type='password' 
              placeholder='••••••••••••'
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          {!isLogin && (
            <div className='loginsignup-agree'>
              <input 
                type='checkbox' 
                id='agree-terms'
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
              />
              <label htmlFor='agree-terms'>
                By continuing, I agree to the <a href="#terms">Terms of Service</a> & <a href="#privacy">Privacy Policy</a>.
              </label>
            </div>
          )}

          <button type="submit" className="auth-submit-btn">
            {submitted ? "✓ Authenticating..." : isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="loginsignup-toggle">
          {isLogin ? (
            <p>
              Don't have an account yet?{' '}
              <button type="button" onClick={() => setIsLogin(false)}>Sign up now</button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button type="button" onClick={() => setIsLogin(true)}>Login here</button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginSignup