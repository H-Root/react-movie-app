import React from "react";
import { motion } from "framer-motion";
const pageVarients = {
  start: {
    x: "100vw",
    opacity: 0,
  },
  default: {
    x: 0,
    opacity: 1,
  },
  end: {
    x: "-100vw",
    opacity: 0,
  },
};

const AnimationCard = ({ children }) => {
  return (
    <motion.div
      variants={pageVarients}
      initial="start"
      animate="default"
      exit="end"
    >
      {children}
    </motion.div>
  );
};

export default AnimationCard;
