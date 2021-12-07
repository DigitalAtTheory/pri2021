import { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from "../styles/firstSection.module.css";
import DriverGraphic from "./DriverGraphic";
import { useMediaQuery } from "react-responsive";
import MobileDriverGraphic from "./MobileDriverGraphic";

export default function FirstSection() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const { scrollYProgress } = useViewportScroll();
  const overlay = useTransform(scrollYProgress, [0.05, 0.08], [0, 0.35]);
  const driverScale = useTransform(scrollYProgress, [0.1, 0.2], [4, 0]);
  const driverOpacity = useTransform(scrollYProgress, [0.1, 0.175], [0, 1]);
  const firstAAScale = useTransform(scrollYProgress, [0.2, 0.3], [4, 0]);
  const firstAAOpacity = useTransform(scrollYProgress, [0.2, 0.284], [0, 1]);
  const bothWinsScale = useTransform(scrollYProgress, [0.3, 0.39], [4, 0]);
  const bothWinsOpacity = useTransform(scrollYProgress, [0.3, 0.37], [0, 1]);

  useEffect(() => {
    if (isMobileScreen) {
      setIsMobile(true);
    }
  }, [isMobileScreen]);

  return (
    <div id="firstSection" className={styles.flyInContainer}>
      <div className={styles.stickyContainer}>
        <motion.div
          className="h-full w-full bg-black relative z-10"
          style={{ opacity: overlay }}
        />
        {!isMobile && <DriverGraphic />}
        {isMobile && <MobileDriverGraphic />}
        <motion.div
          style={{ scale: driverScale, opacity: driverOpacity }}
          className={`${styles.textFlyIn} z-20`}
        >
          <p className="text-white text-7xl text-center font-bold">
            Driver: <br /> <span className="font-light">J.R. Todd </span>
          </p>
        </motion.div>

        <motion.div
          style={{ scale: firstAAScale, opacity: firstAAOpacity }}
          className={`${styles.textFlyIn} z-20`}
        >
          <p className="text-white text-7xl text-center font-bold">
            1st: <br />{" "}
            <span className="font-light">
              African-American driver to win a NHRA Funny Car championship
            </span>
          </p>
        </motion.div>
        <motion.div
          style={{ scale: bothWinsScale, opacity: bothWinsOpacity }}
          className={`${styles.textFlyIn} z-20`}
        >
          <p className="text-white text-7xl text-center font-bold">
            1 of 17: <br />{" "}
            <span className="font-light">
              Drivers to earn both Funny Car and Top Fuel wins
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
