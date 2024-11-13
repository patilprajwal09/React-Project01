import React, { useState } from 'react';
import './loginpopup.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Login");

  return (

    <div className='login_popup'>

      <form className="login_popup_container">

        <div className="login_popup_title">

          <h2>{currState}</h2>

          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="Close" 
            className="close_icon"
          />

        </div>

       
        <div className="login_popup_inputs">

          {currState === "Sign Up" && (
            <input 
              type="text" 
              placeholder='Your Name' 
              required 
            />
          )}

          <input 
            type="email" 
            placeholder='Your Email' 
            required 
          />

          <input 
            type="password" 
            placeholder='Password' 
            required 
          />

        </div>

        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="login_popup_condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account? 
            <span onClick={() => setCurrState("Sign Up")}> Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account? 
            <span onClick={() => setCurrState("Login")}> Login here</span>
          </p>
        )}

      </form>
      
    </div>
  );
};

export default LoginPopUp;
