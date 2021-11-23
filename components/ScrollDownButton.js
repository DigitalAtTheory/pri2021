import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function ScrollDownButton() {
  return (
    <div className="absolute bottom-0 w-full text-center z-50">
      <Link to="firstSection" smooth={true}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ y: ["15%", "-15%"], opacity: 1 }}
          transition={{
            y: {
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
            },
            opacity: { duration: 4 },
          }}
          className="text-white text-4xl"
        >
          <FaChevronDown />
        </motion.button>
      </Link>
    </div>
  );
}
