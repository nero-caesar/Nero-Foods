import type React from "react"
import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">
              <span>N</span>ero<span>F</span>oods
            </h2>
            <p className="footer-description">
              Delicious food delivered fast to your doorstep. Quality ingredients, exceptional taste, and speedy
              delivery.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="footer-social-link" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3 className="footer-links-title">Company</h3>
              <ul className="footer-links-list">
                <li className="footer-link">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="footer-link">
                  <Link to="/careers">Careers</Link>
                </li>
                <li className="footer-link">
                  <Link to="/partners">Partners</Link>
                </li>
                <li className="footer-link">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-links-title">Support</h3>
              <ul className="footer-links-list">
                <li className="footer-link">
                  <Link to="/help">Help Center</Link>
                </li>
                <li className="footer-link">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="footer-link">
                  <Link to="/faq">FAQs</Link>
                </li>
                <li className="footer-link">
                  <Link to="/delivery">Delivery Info</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-links-title">Legal</h3>
              <ul className="footer-links-list">
                <li className="footer-link">
                  <Link to="/terms">Terms of Service</Link>
                </li>
                <li className="footer-link">
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li className="footer-link">
                  <Link to="/cookies">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© {new Date().getFullYear()} NeroFoods. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">
              Terms
            </a>
            <a href="#" className="footer-legal-link">
              Privacy
            </a>
            <a href="#" className="footer-legal-link">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
