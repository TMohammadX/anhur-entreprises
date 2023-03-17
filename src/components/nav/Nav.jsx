import React from "react";
import "./nav.css";
import logo from "../../assets/loogo.png";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo-con">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links">
          <Link2 to="about" spy smooth duration={500} className="nav-link">
            About Us
          </Link2>
          <a href="/Services" className="nav-link">
            Services
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>
      <Link className="nav-cta">Book Now</Link>
    </div>
  );
}
