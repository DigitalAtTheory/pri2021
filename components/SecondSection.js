import SectionBGVideo from "./SectionBGVideo";
import styles from "../styles/secondSection.module.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function SecondSection() {
  const { scrollYProgress } = useViewportScroll();
  const headingOpacity = useTransform(scrollYProgress, [0.411, 0.427], [0, 1]);
  const overlayScale = useTransform(scrollYProgress, [0.427, 0.459], [0, 1]);
  const firstParagraph = useTransform(scrollYProgress, [0.46, 0.48], [0, 1]);
  const secondParagraph = useTransform(scrollYProgress, [0.48, 0.5], [0, 1]);
  return (
    <div className={styles.sectionContainer}>
      <div className="h-screen text-white sticky top-0 overflow-hidden w-full flex items-end justify-end">
        <SectionBGVideo videoURL="/Tech-Video-Asset-2-Slowed.mp4" />
        <motion.h2
          style={{ opacity: headingOpacity }}
          className="text-white text-7xl xl:text-8xl font-light relative z-40 text-right mr-12 pb-12"
        >
          Fighting Friction. <br /> Winning
        </motion.h2>
        <motion.div
          style={{ scaleX: overlayScale, originX: 0 }}
          className={`text-white text-xl leading-8 text-left absolute top-0 z-30 w-full h-full ${styles.textOverlay}`}
        >
          <div className="w-96 flex flex-col gap-4 pl-8 items-center justify-center h-full">
            <motion.p style={{ opacity: firstParagraph }}>
              11,000 Horsepower of 1/4 mile-tested power. While the TRD powered
              Funny Car can make a run in about 3.5 seconds it is under immense
              pressure.
            </motion.p>
            <motion.p style={{ opacity: secondParagraph }}>
              With engine pressure exceeding 20,000 PSI, temperatures rising to
              180 to 280 degrees Fahrenheit, and 4 gallons of oil used per run,
              persecision and the right parts are needed.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
