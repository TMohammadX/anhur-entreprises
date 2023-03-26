import React from "react";
import "./services.css";
import Transition from "../transition/Transition";
import gsap from "gsap";

export default function Services() {
  const services = gsap.timeline();
  return (
    <div className="services-s">
      <Transition timeline={services} />
      <section className="services">
        <h1 className="service-title">services</h1>
        <div className="service-boxs">
          <div className="service-box">
            <div className="blackk" />
          </div>
          <div className="service-box">
            <div className="blackk" />
          </div>
          <div className="service-box">
            <div className="blackk" />
          </div>
          <div className="service-box">
            <div className="blackk" />
          </div>
          <div className="service-box">
            <div className="blackk" />
          </div>
          <div className="service-box">
            <div className="blackk" />
          </div>
        </div>
      </section>
    </div>
  );
}
