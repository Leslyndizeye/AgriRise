import React from 'react';
import logo from "../assets/logo.png"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section: AgriRise Brand */}
        <div className="flex flex-col items-center lg:items-start">
          <img 
            src={logo} 
            alt="AgriRise Logo" 
            className="h-16 mb-4"
          />
          <p className="text-lg font-semibold mb-2 text-white">AgriRise: Empowering Farmers, Enriching Futures</p>
          <p className="text-sm text-center lg:text-left text-white">
            Bringing innovative solutions for sustainable agriculture. Together, we grow.
          </p>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="flex flex-col mt-8 lg:mt-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Our Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Right Section: Social Media */}
        <div className="flex flex-col mt-8 lg:mt-0 items-center lg:items-end">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm">
        <p className="text-white">&copy; {new Date().getFullYear()} AgriRise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;