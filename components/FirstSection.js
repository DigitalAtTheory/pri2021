import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from "../styles/firstSection.module.css";
import DriverGraphic from "./DriverGraphic";

export default function FirstSection() {
  const { scrollYProgress } = useViewportScroll();
  const overlay = useTransform(scrollYProgress, [0.05, 0.08], [0, 0.35]);
  const driverScale = useTransform(scrollYProgress, [0.1, 0.15], [4, 0]);
  const driverOpacity = useTransform(scrollYProgress, [0.1, 0.121], [0, 1]);
  const DOBScale = useTransform(scrollYProgress, [0.15, 0.2], [4, 0]);
  const DOBOpacity = useTransform(scrollYProgress, [0.15, 0.181], [0, 1]);
  const hometownScale = useTransform(scrollYProgress, [0.2, 0.25], [4, 0]);
  const hometownOpacity = useTransform(scrollYProgress, [0.2, 0.233], [0, 1]);
  const firstAAScale = useTransform(scrollYProgress, [0.25, 0.3], [4, 0]);
  const firstAAOpacity = useTransform(scrollYProgress, [0.25, 0.288], [0, 1]);
  const bothWinsScale = useTransform(scrollYProgress, [0.3, 0.35], [4, 0]);
  const bothWinsOpacity = useTransform(scrollYProgress, [0.3, 0.338], [0, 1]);
  const careerWinsScale = useTransform(scrollYProgress, [0.35, 0.406], [4, 0]);
  const careerWinsOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.382],
    [0, 1]
  );

  return (
    <div id="firstSection" className={styles.flyInContainer}>
      <div className={styles.stickyContainer}>
        <motion.div
          className="h-full w-full bg-black relative z-10"
          style={{ opacity: overlay }}
        />
        <DriverGraphic />
        <motion.div
          style={{ scale: driverScale, opacity: driverOpacity }}
          className={`${styles.textFlyIn} z-20`}
        >
          <p className="text-white text-7xl text-center">Driver: J.R. Todd</p>
        </motion.div>
        <motion.div
          style={{ scale: DOBScale, opacity: DOBOpacity }}
          className={`${styles.textFlyIn} z-20`}
        >
          <p className="text-white text-7xl text-center">
            Date of Birth: December 16, 1981
          </p>
        </motion.div>
        <motion.div
          style={{ scale: hometownScale, opacity: hometownOpacity }}
          className={`${styles.textFlyIn} z-20`}
        >
          <p className="text-white text-7xl text-center">
            Hometown: Lawrenceburg, Indiana
          </p>
        </motion.div>
        <motion.div
          style={{ scale: firstAAScale, opacity: firstAAOpacity }}
          className={`${styles.textFlyIn} z-20`}
        >
          <p className="text-white text-7xl text-center">
            First African-American driver to win an NHRA Funny Car championship
          </p>
        </motion.div>
        <motion.div
          style={{ scale: bothWinsScale, opacity: bothWinsOpacity }}
          className={`${styles.textFlyIn} z-20`}
        >
          <p className="text-white text-7xl text-center">
            1 of 17 drivers to earn both Funny Car and Top Fuel wins
          </p>
        </motion.div>
        <motion.div
          style={{ scale: careerWinsScale, opacity: careerWinsOpacity }}
          className={`${styles.textFlyIn} z-20`}
        >
          <p className="text-white text-7xl text-center">
            10 career wins in Funny Car
          </p>
        </motion.div>
      </div>
    </div>
  );
}
