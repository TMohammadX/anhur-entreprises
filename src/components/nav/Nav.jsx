import React from "react";
import "./nav.css";
import logo from "../../assets/loogo.png";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-inner">
        <a href="/" className="logo-con">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link2 to="about" smooth duration={500} className="nav-link">
            About Us
          </Link2>
          <a href="/services" className="nav-link">
            Services
          </a>
        </div>
      </div>
      <Link to="/getstarted" className="nav-cta">
        Get Started
      </Link>
    </div>
  );
}
