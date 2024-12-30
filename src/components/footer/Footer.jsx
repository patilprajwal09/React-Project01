import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {

  return (

    <div className='footer' id='footer'>
      <div className="footer_content">
        <div className="footer_content_left">

          <div className='comp_name'>
            <h2>Hungry Hippo</h2>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, obcaecati
            sint! Nam ullam eveniet autem, animi accusamus, odit in voluptatem enim provident
            explicabo harum nulla soluta facilis dolorum expedita inventore?
          </p>

          <div className="footer_social_icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>

        </div>

        <div className="footer_content_center">

          <h2>COMPANY</h2>

          <ul>
            <li>Home</li>
            <li>Abou Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>

        </div>

        <div className="footer_content_right">

          <h2>GET IN TOUCH</h2>

          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@hungryhippo.com</li>
          </ul>

        </div>

      </div>

      <hr />

      <p className='footer_copyright'>
        Copyright 2024 @ HungryHippo.com - All Rights Are Reserved
      </p>

    </div>
  )
}

export default Footer;
