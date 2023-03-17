import React from "react";
import "./home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="main">
        <h1 className="main-title">
          <b>Elevate Your Brand </b>With Premium <br />
          Services That We Offer.
        </h1>
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
