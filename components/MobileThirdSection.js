import SectionBGVideo from "./SectionBGVideo";
import styles from "../styles/thirdSection.module.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function MobileThirdSection() {
  const { scrollYProgress } = useViewportScroll();
  const headingOpacity = useTransform(scrollYProgress, [0.572, 0.594], [0, 1]);
  const overlayScale = useTransform(scrollYProgress, [0.595, 0.6], [0, 1]);
  const firstParagraph = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);
  const secondParagraph = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);
  return (
    <div className={styles.sectionContainer}>
      <div className="h-screen text-white sticky top-0 overflow-hidden w-full flex items-start justify-center">
        <SectionBGVideo videoURL="/Tech-Video-Asset-3-Slowed.mp4" />
        <motion.h2
          style={{ opacity: headingOpacity }}
          className="text-white text-4xl font-light relative z-40 text-right pb-12"
        >
          Mobil 1 Nitro™ 70WT
        </motion.h2>
        <motion.div
          style={{ scaleY: overlayScale, originY: 1 }}
          className={`text-white text-xl leading-8 text-right absolute top-0 z-30 w-full h-full ${styles.mobileOverlay}`}
        >
          <div className="w-full flex flex-col gap-4 px-4 items-center justify-center mt-12 h-full">
            <motion.p style={{ opacity: firstParagraph }}>
              Did you know that Mobil 1 worked closely with Kalitta Motorsports
              to create Mobil 1 Nitro 70WT? The technology that helped produce
              victories for Kalitta Motorsports since 2020.
            </motion.p>
            <motion.p style={{ opacity: secondParagraph }}>
              With four gallons of oil used per run, the use of Mobil 1 Nitro
              needs to withstands the extremes of the track. Through it's use
              Kalitta has seen their part lifespan increased 25%.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
