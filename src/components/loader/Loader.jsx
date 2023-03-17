import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./loader.css";

export default function Loader() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prevPercentage) => {
        const nextPercentage = prevPercentage + 1;
        return nextPercentage > 100 ? 100 : nextPercentage;
      });
    }, 40);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="loader">
      <motion.h1 className="quote">
        "If you are <b>not willing</b> to{" "}
        <b>
          risk <br />
          the usual
        </b>
        , you will have to <br />
        settle for the <b>ordinary</b>."
      </motion.h1>
      <h1 className="perc">{percentage}%</h1>
    </div>
  );
}
