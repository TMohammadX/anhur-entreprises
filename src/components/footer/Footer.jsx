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
        <a href="/getstarted" className="footer-link">
          Get Started
        </a>
        <a
          href="https://www.instagram.com/anhur_enterprises/"
          className="footer-link"
          target="_blank"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/people/Anhur-Enterprises/100090777584131/"
          className="footer-link"
          target="_blank"
        >
          Facebook
        </a>
      </div>
      <h3 className="copyright">
        © Anhur Enterprises 2022. All rights reserved.
      </h3>
      <Newsletter />
    </div>
  );
}
