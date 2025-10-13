import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart from "../../assets/cart_icon.png"
import { href, Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu]=useState("home")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="50px"/>
        <p>Shopify </p>
      </div>
      <ul className='nav-menu'>
      <li onClick={()=>{setMenu("home")}} > <Link to="/" style={{textDecoration:"none", color:"#626262"}}>Home </Link> {menu=="home"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none", color:"#626262"}} to="/mens">Men</Link> {menu=="mens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("womens")}}><Link to="/womens" style={{textDecoration:"none", color:"#626262"}}> Women</Link> {menu=="womens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link to="/kids" style={{textDecoration:"none", color:"#626262"}}>Kids </Link> {menu=="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart">
        <img src={cart} alt="" height="50px"/>
        <div className='nav-cart-count'>0 </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Navbar
