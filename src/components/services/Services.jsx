import React from "react";
import "./services.css";
import Transition from "../transition/Transition";
import gsap from "gsap";

export default function Services() {
  const services = gsap.timeline();
  return (
    <div className="services">
      <Transition timeline={services} />
    </div>
  );
}
