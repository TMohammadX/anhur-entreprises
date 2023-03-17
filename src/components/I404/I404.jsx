import React from "react";
import "./I404.css";
import Transition from "../transition/Transition";
import gsap from "gsap";

export default function I404() {
  const i404 = gsap.timeline();

  return (
    <div className="i404">
      <Transition timeline={i404} />
      <h1 className="t4">404</h1>
      <h2 className="p4">Page Not Found</h2>
    </div>
  );
}
