import SectionBGVideo from "./SectionBGVideo";
import styles from "../styles/thirdSection.module.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function ThirdSection() {
  const { scrollYProgress } = useViewportScroll();
  const headingOpacity = useTransform(scrollYProgress, [0.632, 0.66], [0, 1]);
  const overlayScale = useTransform(scrollYProgress, [0.66, 0.69], [0, 1]);
  const firstParagraph = useTransform(scrollYProgress, [0.69, 0.72], [0, 1]);
  const secondParagraph = useTransform(scrollYProgress, [0.72, 0.755], [0, 1]);
  return (
    <div className={styles.sectionContainer}>
      <div className="h-screen text-white sticky top-0 overflow-hidden w-full flex items-end justify-start">
        <SectionBGVideo videoURL="/Tech-Video-Asset-3-Slowed.mp4" />
        <motion.h2
          style={{ opacity: headingOpacity }}
          className="text-white text-7xl xl:text-8xl font-bold relative z-40 text-right ml-6 pb-12"
        >
          Mobil 1 Nitro™ 70WT
        </motion.h2>
        <motion.div
          style={{ scaleX: overlayScale, originX: 1 }}
          className={`text-white text-xl leading-8 text-right absolute flex justify-end top-0 z-30 w-full h-full ${styles.textOverlay}`}
        >
          <div className="w-96 flex flex-col gap-4 pr-8 items-center justify-center h-full">
            <motion.p style={{ opacity: firstParagraph }}>
              Did you know that Mobil 1 worked closely with Kalitta Motorsports
              to create Mobil 1 Nitro 70WT? The technology that helped produce
              victories for Kalitta Motorsports since 2020.
            </motion.p>
            <motion.p style={{ opacity: secondParagraph }}>
              {`With four gallons of oil used per run, the use of Mobil 1 Nitro
              needs to withstands the extremes of the track. Through it's use
              Kalitta has seen their part lifespan increased 25%.`}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
