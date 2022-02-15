import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import OMDPContext from "../../context/OMDPContext";

const errorVaients = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: "100vw",
  },
};

const Error = () => {
  const { error } = useContext(OMDPContext);

  return (
    <motion.div
      variants={errorVaients}
      initial="hidden"
      animate="animate"
      exit="exit"
      className="absolute top-0 flex flex-row items-center gap-2"
    >
      <div className="flex h-5 w-5 flex-row items-center justify-center rounded-full bg-red-100 p-1 text-red-700">
        <FaTimes size={20} />
      </div>
      {error.msg}
    </motion.div>
  );
};

export default Error;
