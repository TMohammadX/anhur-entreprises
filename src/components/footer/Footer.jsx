import React from "react";
import "./footer.css";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { Newsletter } from "./Newsletter";
import { Link as Link2 } from "react-scroll";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <h1 className="footer-links-title">Links</h1>
        <a href="/" className="footer-link">
          Home
        </a>
        <Link2 to="services" className="footer-link">
          Services
        </Link2>
        <a href="/" className="footer-link">
          Contact
        </a>
        <a href="/" className="footer-link">
          Book Now
        </a>
        <a href="/" className="footer-link">
          Privacy Policy
        </a>
      </div>
      <h3 className="copyright">
        © Anhur Enterprises 2022. All rights reserved.
      </h3>
      <Newsletter />
    </div>
  );
}
