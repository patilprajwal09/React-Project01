import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("Home");
  const {getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className='navbar'>

      {/* <img src={assets.logo} className='logo' /> */}
      <div className='project_name'>
        <h2>Hungry Hippo </h2>
      </div>

      <ul className='navbar_menu'>

        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
          <Link  to={"/"}>
            Home
          </Link> 
        </li>

        <a href='#food_display' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>
          Menu
        </a>

        <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>
          Contact Us
        </a>

      </ul>

      <div className='navbar_right'>

        <img src={assets.search_icon} alt="" />

        <div className='navbar_search_icon'>

          <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>

        </div>

        <button onClick={()=>setShowLogin(true)}>
          Sign in
        </button>

      </div>

    </div>
  )
}

export default Navbar;
