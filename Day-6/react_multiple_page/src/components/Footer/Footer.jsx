import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between px-4">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Company</h4>
          <p>Blue Sky Booking</p>
          <p>123 Hotel St, Suite 100</p>
          <p>City, State, 12345</p>
          <p>Email: info@blueskybooking.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/service" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Blue Sky Booking. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
