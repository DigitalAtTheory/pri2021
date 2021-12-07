import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

export default function ScrollDownButton() {
  return (
    <>
      <Link to="firstSection" smooth={true}>
        <motion.button
          animate={{ y: ["15%", "-15%"] }}
          transition={{
            y: {
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
            },
          }}
          className="text-white text-4xl"
        >
          <FaChevronDown />
        </motion.button>
      </Link>
    </>
  );
}
