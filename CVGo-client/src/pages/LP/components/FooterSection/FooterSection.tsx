import "./FooterSection.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>News</li>
            <li>Help desk</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>CV Creation</li>
            <li>Job Auto-Apply</li>
            <li>Email Tracking</li>
            <li>Portfolio Management</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact us</h4>
          <p>support@cvgo.ai</p>
          <p>+972-54-123-4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 CVGo. All rights reserved.</p>
        <div className="social-icons">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
}
