import React from "react";
import "./home.css";
import main from "../../assets/main.jpg";

export default function Home() {
  return (
    <main className="home">
      <section className="main">
        <h1 className="main-title">
          <b>Elevate Your Brand </b>With Premium <br />
          Services That We Offer.
        </h1>
        <div className="main-img-con">
          <img src={main} alt="" className="main-img" />
        </div>
      </section>
      <section className="about"></section>
    </main>
  );
}
