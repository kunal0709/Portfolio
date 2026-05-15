


import React, { useState } from "react";
import "../stylesheet/nav.css";
import { PiHamburgerLight } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5"; // Close icon ke liye
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  // State mobile menu open/close karne ke liye
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Link click hone par menu band karne ke liye function
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="main-nav">
      {/* Top Glow Shadow Effect (Original) */}
      <div className="shadow-le">
        <div className="shadow-1"></div>
      </div>

      <div className="left-nav">
        <Link to="/" onClick={closeMenu}>
          <h2 className="logo">Kunal<span>.</span></h2>
        </Link>
      </div>

      {/* Added dynamic class 'active' based on state */}
      <ul className={`center-nav ${isMenuOpen ? "active" : ""}`}>


         <li>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/skills" className="nav-link" onClick={closeMenu}>Skills</Link>
        </li>
        <li>
          <Link to="/project" className="nav-link" onClick={closeMenu}>Projects</Link>
        </li>
      </ul>

      <div className="right-nav">
        <button className="menu-btn" onClick={toggleMenu}>
          {/* Icon toggles between Hamburger and Close */}
          {isMenuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;