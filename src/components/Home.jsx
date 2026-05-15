

import React, { useEffect, useRef } from "react";
import "../stylesheet/home.css";
import { FiArrowDownRight, FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered animation for a more premium feel
      gsap.from(".animate-hero", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" id="home" ref={heroRef}>
      {/* Background Huge Text */}
      <div className="hero-bg-text-wrapper">
        <h1 className="hero-bg-text">KUNAL KUMAR</h1>
      </div>

      <div className="hero-content">
        {/* Top Row */}
        <div className="hero-top-row animate-hero">
          <div className="status-pill">
            <span className="pulse-dot"></span> Available for Projects
          </div>

          <p className="location-tag">
            Based in India / {new Date().getHours() >= 12 ? "PM" : "AM"}
          </p>
        </div>

        <div className="hero-main-grid">
          {/* Left Side */}
          <div className="hero-intro animate-hero">
            <h2>
              Creative <span>Developer</span> & Designer.
            </h2>
          </div>

          {/* Right Side */}
          <div className="hero-description animate-hero">
            <p>
              I build high-end digital experiences that blend aesthetic
              excellence with technical precision. Specialized in React &
              Node.js.
            </p>

            <div className="hero-btns">
              <Link to="/contact">
                <button className="primary-btn">
                  HIRE ME <FiArrowRight />
                </button>
              </Link>

              <button className="secondary-btn">
                Resume <FiArrowDownRight />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="hero-bottom-stats animate-hero">
          <div className="stat-item">

            <p>Experience</p>

            <span>Building Modern Web Experiences</span>


          </div>

          <div className="stat-item">
            <p>Projects Done</p>
            <span>3+ Real Projects complated</span>

          </div>

          <div className="stat-item">

            <p>Stack Specialist</p>
            <span>Frontend Developer | React.js</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
