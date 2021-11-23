import heroImage from "../public/funny-car.png";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/heroGraphic.module.css";

export default function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className={`grid place-content-center h-screen absolute top-5 w-full ${styles.image}`}
    ></motion.div>
  );
}
