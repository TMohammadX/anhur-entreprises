import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import Transition from "../transition/Transition";
import gsap from "gsap";

export default function Home() {
  const home = gsap.timeline();
  return (
    <main className="home">
      <section className="main">
        <motion.h1 className="main-title">
          <motion.span
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
          >
            <b>Elevate Your Brand </b>With Premium{" "}
          </motion.span>
          <br />
          <span>Services That We Offer.</span>
        </motion.h1>
        <div className="main-img-con">
          <div className="main-img"></div>
        </div>
      </section>
      <section className="about">
        <h1 className="about-title">- About</h1>
        <p className="about-p">
          At Anhur Enterprises, we are dedicated to providing top-quality
          services to help our clients succeed. Our team of experts works
          seamlessly to exceed your expectations and meet your evolving needs.
          We are committed to delivering excellence in digital marketing,
          product photography, copywriting, and more. Our mission is to provide
          you with premium services that will help you achieve your business
          objectives and thrive in a competitive environment.
        </p>
      </section>
    </main>
  );
}
