import React, { useState } from "react";
import "./nav.css";
import logo from "../../assets/loogo.png";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { MdOutlinePhoneIphone, MdClose } from "react-icons/md";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [icons, setIcons] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          <Link to="/services" className="nav-link">
            Services
          </Link>
        </div>
      </div>
      <div className="nav-btns">
        <Link to="/getstarted" className="nav-cta">
          Get Started
        </Link>
        <div className="cta3" onClick={handleToggle}>
          <HiMenu size="2rem" />
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="menuNav"
          >
            <div className="cta-in" onClick={handleToggle}>
              <MdClose size="2rem" color="white" />
            </div>
            <div className="b-links">
              <Link to="/" className="nav-link-m" onClick={handleClose}>
                Home
              </Link>
              <Link2
                to="about"
                smooth
                duration={500}
                offset={50}
                className="nav-link-m"
                onClick={handleClose}
              >
                About Us
              </Link2>
              <Link to="/services" className="nav-link-m" onClick={handleClose}>
                Services
              </Link>
              <Link
                to="/getstarted"
                className="nav-link-m"
                onClick={handleClose}
              >
                Get Started
              </Link>
            </div>
            <div className="b-info">
              <h1 className="b-info-text">
                <IoMdMail />{" "}
                <a href="mailto:info@anhurenterprises.com">
                  info@anhurenterprises.com
                </a>
              </h1>
              <h1 className="b-info-text">
                <FaFacebook />{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100090777584131"
                  target="_blank"
                >
                  Anhur-Enterprises
                </a>
              </h1>

              <h1 className="b-info-text">
                <FaInstagram />{" "}
                <a
                  href="https://www.instagram.com/anhur_enterprises/"
                  target="_blank"
                >
                  anhur_enterprises
                </a>
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
