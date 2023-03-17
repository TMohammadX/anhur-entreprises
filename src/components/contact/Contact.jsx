import React from "react";
import "./contact.css";
import Transition from "../transition/Transition";
import gsap from "gsap";

export default function Contact() {
  const contact = gsap.timeline();
  return (
    <div className="contact">
      <Transition timeline={contact} />
      <h1></h1>
    </div>
  );
}
