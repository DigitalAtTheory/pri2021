import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from "../styles/firstSection.module.css";
import DriverGraphic from "./DriverGraphic";

export default function FirstSection() {
  const { scrollYProgress } = useViewportScroll();
  const overlay = useTransform(scrollYProgress, [0.077, 0.108], [0, 0.35]);
  const driverScale = useTransform(scrollYProgress, [0.077, 0.2], [4, 0]);
  const driverOpacity = useTransform(scrollYProgress, [0.108, 0.145], [0, 1]);
  const DOBScale = useTransform(scrollYProgress, [0.198, 0.3], [4, 0]);
  const DOBOpacity = useTransform(scrollYProgress, [0.198, 0.265], [0, 1]);
  const hometownScale = useTransform(scrollYProgress, [0.299, 0.4], [4, 0]);
  const hometownOpacity = useTransform(scrollYProgress, [0.299, 0.369], [0, 1]);
  const firstAAScale = useTransform(scrollYProgress, [0.399, 0.5], [4, 0]);
  const firstAAOpacity = useTransform(scrollYProgress, [0.399, 0.477], [0, 1]);
  const bothWinsScale = useTransform(scrollYProgress, [0.499, 0.6], [4, 0]);
  const bothWinsOpacity = useTransform(scrollYProgress, [0.499, 0.578], [0, 1]);
  const careerWinsScale = useTransform(scrollYProgress, [0.599, 0.7], [4, 0]);
  const careerWinsOpacity = useTransform(
    scrollYProgress,
    [0.599, 0.662],
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
