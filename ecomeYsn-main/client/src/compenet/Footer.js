import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <div className="general-footer" id="Cardes">
        <footer>
          <div className="footer">
          <div className="foo">
              <div className="foo1" >
               <h5>YSN-Gamming</h5>
               <p> Welcome to YSN-Gamming Stock, Your One-Stop Shop for all
                 Gaming needs and . Explore our Products and enjoy Gaming and Computer HardWare like never Before.</p>
              </div>
              <div className="foo1" >
               <h5>Let US Help</h5>
               <p>Your Account</p><p>Your Orders</p><p>Manage Your Content And devices</p>
               <p>Help</p>
              </div>
              <div className="foo1" >
               <h5>Make Money</h5>
               <p>Sell Products on  Our Website</p><p>Advertise Your Products</p><p>Become An affilliate</p>
               <p>Selph-Publish</p>
              </div>
              <div className="foo1" >
               <h5>Contacts</h5>
               <p>Morocco, City , 70000</p>
            <p><a href="#" class="text-white text-decoration-none">example@gmail.com</a></p>
            <p>+212 654321789</p><p>+02 692980345</p>
              </div>
          </div>
          <div className="copyright">
               Copyright © 2024  - All rights reserved || Designed By :  <strong class="text-black">Yassin Hammouche</strong> 
            </div>
            <div className="social-icons">
              <a href="https://example.com"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://example.com"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://example.com"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="https://example.com"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
            
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
