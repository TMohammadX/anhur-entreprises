import React, { useRef, useEffect } from "react";
import "./transition.css";
import { gsap, Power4 } from "gsap";
import { motion } from "framer-motion";

function Transition({ timeline }) {
  const trans1 = useRef(null);
  const trans2 = useRef(null);
  const trans3 = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.to(trans1.current, {
      duration: 2.5,
      y: -2000,
      ease: Power4.easeInOut,
    });
  });

  return (
    <React.Fragment>
      <motion.div ref={trans1} className="transition-effect1"></motion.div>
    </React.Fragment>
  );
}

export default Transition;
