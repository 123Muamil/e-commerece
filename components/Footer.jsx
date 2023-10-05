import React from 'react'
import Image from 'next/image'
import company from '../src/assets/company.jpg'
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr'
import logo2 from '../src/assets/download.png'



const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='logo'>
          <Image src={company} width={100} height={100} alt='Rafeed logo' />

          <p>
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className='icon-container'>
            <div>
              <GrTwitter size={20} />
            </div>
            <div>
              <GrFacebookOption size={20} />
            </div>
            <div>
              <GrLinkedinOption size={20} />
            </div>
          </div>
        </div>

        <div className='footer-links'>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Support</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Get In Touch</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>
        <div className='footer-links'>
          <h3>Contact</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <p>© Copyright 2023 Rafeed - All Rights Reserved</p>
        {/* <p>
         <span></span>
        </p>
        <p>
          Code by. <span></span>
        </p> */}
      </div>
    </footer>
  )
}

export default Footer
