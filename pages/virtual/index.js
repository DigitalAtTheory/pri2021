import { useState, useEffect } from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

import BackgroundVideo from "../../components/BackgroundVideo";
import LockUp from "../../components/LockUp";
import HeroGraphic from "../../components/HeroGraphic";
import FirstSection from "../../components/FirstSection";
import ScrollDownButton from "../../components/ScrollDownButton";
import SecondSection from "../../components/SecondSection";
import ThirdSection from "../../components/ThirdSection";
import MobileSecondSection from "../../components/MobileSecondSection";
import MobileThirdSection from "../../components/MobileThirdSection";
import FourthSection from "../../components/FourthSection";
import DigitalForm from "../../components/DigitalForm";
import MobileHeroGraphic from "../../components/MobileHeroGraphic";

export default function VirtualPage() {
  const [donePlaying, setDonePlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const handleDonePlaying = () => {
    setDonePlaying(true);
  };

  useEffect(() => {
    if (isMobileScreen) {
      setIsMobile(true);
    }
  }, [isMobileScreen]);

  const handleScrolledToBottom = () => {
    setAtBottom(true);
  };

  useBottomScrollListener(handleScrolledToBottom, {
    offset: 100,
  });

  return (
    <>
      <Head>
        <title>Mobil 1 x TRD | Our Proof is on the Podium</title>
      </Head>
      <div className="h-screen w-full">
        {donePlaying && <LockUp />}
        <AnimatePresence>
          {!donePlaying && (
            <BackgroundVideo handleDonePlaying={handleDonePlaying} />
          )}
        </AnimatePresence>
        {donePlaying && !isMobile && <HeroGraphic />}
        {donePlaying && isMobile && <MobileHeroGraphic />}
      </div>
      <FirstSection />
      {isMobile ? <MobileSecondSection /> : <SecondSection />}
      {isMobile ? <MobileThirdSection /> : <ThirdSection />}
      <FourthSection />
      <DigitalForm />

      {donePlaying && !atBottom && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{
              opacity: {
                duration: 4,
              },
              y: {
                duration: 2,
              },
            }}
            className="sticky bottom-0 w-full text-center z-50"
          >
            <ScrollDownButton />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
