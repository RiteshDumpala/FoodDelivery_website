import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Discover the ultimate convenience with YUmmIT, your go-to food ordering website. Our user-friendly platform ensures a seamless ordering experience, whether you're craving a quick snack or a gourmet meal. Join our community of food lovers and enjoy exclusive deals and promotions. YUmmIT satisfying your cravings.
            Follow us on Facebook, Twitter, and LinkedIn for the latest updates and exclusive offers!
            </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-706-306-xxxx</li>
                <li>contact@YummIT.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © YummIT.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
