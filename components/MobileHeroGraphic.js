import { motion } from "framer-motion";
import styles from "../styles/heroGraphic.module.css";

export default function MobileHeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className={`grid place-content-center h-screen absolute top-5 w-full ${styles.mobileImage}`}
    ></motion.div>
  );
}
