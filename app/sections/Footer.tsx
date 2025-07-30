import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0a25] border-t bg-[#0d0a25]/60 backdrop-blur-md  text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Text */}
        <div className="text-lg opacity-70 text-center md:text-left">
          © {new Date().getFullYear()} ADmyBRAND AI Suite. All rights reserved.
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex gap-6 items-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors duration-200"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaTwitter size={25} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="mailto:hello@admybrand.com"
            className="hover:text-red-400 transition-colors duration-200"
          >
            <FaEnvelope size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
