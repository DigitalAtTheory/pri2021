import SectionBGVideo from "./SectionBGVideo";
import styles from "../styles/secondSection.module.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function MobileSecondSection() {
  const { scrollYProgress } = useViewportScroll();
  const headingOpacity = useTransform(scrollYProgress, [0.454, 0.49], [0, 1]);
  const overlayScale = useTransform(scrollYProgress, [0.49, 0.52], [0, 1]);
  const firstParagraph = useTransform(scrollYProgress, [0.52, 0.55], [0, 1]);
  const secondParagraph = useTransform(scrollYProgress, [0.55, 0.56], [0, 1]);
  return (
    <div className={styles.sectionContainer}>
      <div className="h-screen text-white sticky top-0 overflow-hidden w-full flex items-start justify-center mt-12">
        <SectionBGVideo videoURL="/Tech-Video-Asset-2-Slowed.mp4" />
        <motion.h2
          style={{ opacity: headingOpacity }}
          className="text-white text-4xl font-bold relative z-40 text-center w-full py-4 pb-12"
        >
          Fighting Friction. <br /> Winning Races.
        </motion.h2>
        <motion.div
          style={{ scaleY: overlayScale, originY: 1 }}
          className={`text-white text-xl leading-8 text-left absolute top-0 z-30 w-full h-full ${styles.mobileOverlay}`}
        >
          <div className="w-full flex flex-col gap-4 px-4 items-center justify-center mt-12 h-full">
            <motion.p style={{ opacity: firstParagraph }}>
              This TRD-powered funny car uses its 11,000 horsepower
              nitromethane-powered V8 to run down 1,000 feet in under four
              seconds.
            </motion.p>
            <motion.p style={{ opacity: secondParagraph }}>
              With engine pressure exceeding 20,000 PSI, and temperatures rising
              from 180 to 280 degrees during the course of a run, only the most
              well designed components can survive.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
