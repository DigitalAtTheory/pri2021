import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/heroGraphic.module.css";
import funnyCar from "../public/funny-car-v1.png";

export default function MobileHeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className={`grid place-content-center h-screen absolute top-0 w-full ${styles.mobileImage}`}
    >
      <div>
        <Image src={funnyCar} priority />
      </div>
    </motion.div>
  );
}
