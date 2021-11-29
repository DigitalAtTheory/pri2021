import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../public/lockup-toyota.png";
export default function LockUp() {
  return (
    <motion.div
      className="relative z-10 w-full text-center pt-4 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <div className="w-3/4 lg:w-1/4 mx-auto">
        <Image
          src={logo}
          priority
          placeholder="blur"
          alt="Mobil 1/Toyota logo"
        />
      </div>
    </motion.div>
  );
}
