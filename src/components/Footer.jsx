
import React from "react";
import "../stylesheet/footer.css";
import { FaGithub, FaTwitter, FaChevronUp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Decorative Top Line */}
      <div className="footer-line"></div>

      <div className="footer-container">
        {/* LEFT: Logo & About */}
        <div className="footer-about">
          <h2 className="footer-logo">Kunal<span>.</span></h2>
          <p>
            Building high-performance digital experiences. Let's create something 
            extraordinary together.
          </p>
        </div>

        {/* CENTER: Navigation */}
        <div className="footer-links">
          <h3>Sitemap</h3>
          <ul>
            
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT: Socials & Back to Top */}
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/kunal0709" target="_blank" rel="noreferrer" title="Github"><FaGithub /></a>
            <a href="https://x.com/kunal_kunal09" target="_blank" rel="noreferrer" title="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/_its_kuku_09/" target="_blank" rel="noreferrer" title="Instagram"><IoLogoInstagram /></a>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer" title="WhatsApp"><PiWhatsappLogoDuotone /></a>
          </div>
          <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to Top">
            <FaChevronUp />
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p>© {new Date().getFullYear()} Kunal Singh. All rights reserved.</p>
          <div className="footer-status">
            <span className="dot"></span> Available for new opportunities
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;