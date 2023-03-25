import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./loader.css";

export default function Loader() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prevPercentage) => {
        const nextPercentage = prevPercentage + 1;
        return nextPercentage > 100 ? 100 : nextPercentage;
      });
    }, 20);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="loader">
      <AnimatePresence>
        <motion.div className="quote">
          <motion.h1
            className="q-s"
            initial={{ y: 20, opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            "If you are <b>not willing</b> to <b>risk </b> <br />
          </motion.h1>
          <motion.h1
            className="q-s"
            initial={{ y: 20, opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <b>the usual</b>, you will have to <br />
          </motion.h1>
          <motion.h1
            className="q-s"
            initial={{ y: 20, opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            settle for the <b>ordinary</b>."
          </motion.h1>
        </motion.div>
      </AnimatePresence>
      <h1 className="perc">{percentage}%</h1>
    </div>
  );
}
