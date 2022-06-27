import './footer.css'
import Img1 from '../../assets/trustPilot-footer.png'
import Img2 from '../../assets/payment-cards.jpg'
import Img3 from '../../assets/certif-footer.png'

import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">

        <div className="upper-footer">

          <div className="trust-pilot">
            <a href="https://www.trustpilot.com/review/bookshop.org?utm_medium=trustbox&utm_source=Mini" target="_blank" rel="noreferrer"><img src={Img1} alt="" /></a>
          </div>

          <div className="footer-nav">
            <ul className="footer-nav-list">
              <li><a href="">About</a></li>
              <li><a href="">Support / Help</a></li>
              <li><a href="">Become an Affiliate</a></li>
              <li><a href="">Gift Cards</a></li>
              <li><a href="">Bookshop For Authors</a></li>
              <li><a href="">Bookshop For Bookstores</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Returns and Refund Policy</a></li>
            </ul>
          </div>

          <div className="footer-options">

            <div className="socials-media">
              <h6>Follow us </h6>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FiInstagram/></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
            </div>
            <div className="payment-methods">
              <h6>Payments Accepted</h6>
              <div>
                <img src={Img2} alt="" className="payment-cards"/>
              </div>
              
            </div>
            <div className="footer-certif">
              <a className="certification" href="https://www.bcorporation.net/en-us/find-a-b-corp/company/bookshoporg/" target="_blank" rel="noreferrer"><img src={Img3} alt=""/></a>
            </div>

          </div>
        </div>

        <div className="sub-footer">
          <div className="copy-right">
            <small>&copy; 2022 All rights reserved.</small>
          </div>
          <div className="terms-of-use">
            <a href="">Terms of Use</a>
          </div>
          <div className="notice">
            <a href="">Privacy Notice</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer