import SectionBGVideo from "./SectionBGVideo";
import styles from "../styles/thirdSection.module.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function MobileThirdSection() {
  const { scrollYProgress } = useViewportScroll();
  const headingOpacity = useTransform(scrollYProgress, [0.632, 0.66], [0, 1]);
  const overlayScale = useTransform(scrollYProgress, [0.66, 0.69], [0, 1]);
  const firstParagraph = useTransform(scrollYProgress, [0.69, 0.7], [0, 1]);
  const secondParagraph = useTransform(scrollYProgress, [0.71, 0.72], [0, 1]);
  const thirdParagraph = useTransform(scrollYProgress, [0.72, 0.73], [0, 1]);
  return (
    <div className={styles.sectionContainer}>
      <div className="h-screen text-white sticky top-0 overflow-hidden w-full flex items-start justify-center">
        <SectionBGVideo videoURL="/Tech-Video-Asset-3-Slowed.mp4" />n
        <motion.h2
          style={{ opacity: headingOpacity }}
          className="text-white text-4xl font-bold relative z-40 text-center py-4 pb-12"
        >
          Mobil 1 Nitro™ 70WT
        </motion.h2>
        <motion.div
          style={{ scaleY: overlayScale, originY: 1 }}
          className={`text-white text-xl leading-8 text-right absolute top-0 z-30 w-full h-full ${styles.mobileOverlay}`}
        >
          <div className="w-full flex flex-col gap-6 px-4 items-center justify-center mt-12 h-full">
            <motion.p style={{ opacity: firstParagraph }}>
              Did you know that Mobil 1 engineers worked closely with Kalitta
              Motorsports to develop Mobil 1 Racing Nitro 70WT?
            </motion.p>
            <motion.p style={{ opacity: secondParagraph }}>
              Using four gallons of oil per run, this bespoke synthetic motor
              oil helps protect against the extremes unique to the rigors of
              NHRA competition.
            </motion.p>
            <motion.p style={{ opacity: thirdParagraph }}>
              {`Ultimately, this technical collaboration has helped Kalitta Motorsports increase the lifespan of their parts by 25 percent.`}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
