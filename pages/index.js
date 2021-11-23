import { useState, useEffect } from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import LockUp from "../components/LockUp";
import { AnimatePresence, useViewportScroll } from "framer-motion";
import HeroGraphic from "../components/HeroGraphic";
import FirstSection from "../components/FirstSection";
import ScrollDownButton from "../components/ScrollDownButton";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import { useMediaQuery } from "react-responsive";
import MobileSecondSection from "../components/MobileSecondSection";
import MobileThirdSection from "../components/MobileThirdSection";
import FourthSection from "../components/FourthSection";

export default function Home() {
  const [donePlaying, setDonePlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const { scrollYProgress } = useViewportScroll();

  const handleDonePlaying = () => {
    setDonePlaying(true);
  };

  useEffect(() => {
    if (isMobileScreen) {
      setIsMobile(true);
    }
  }, [isMobileScreen]);

  return (
    <>
      <div className="h-screen w-full">
        {donePlaying && <LockUp />}
        <AnimatePresence>
          {!donePlaying && (
            <BackgroundVideo handleDonePlaying={handleDonePlaying} />
          )}
        </AnimatePresence>
        {donePlaying && <HeroGraphic />}
        {donePlaying && <ScrollDownButton />}
      </div>
      <FirstSection />
      {isMobile ? <MobileSecondSection /> : <SecondSection />}
      {isMobile ? <MobileThirdSection /> : <ThirdSection />}
      <FourthSection />
      <SecondSection />
      <button
        className="sticky bottom-0 left-0 bg-red-500 text-white py-4 px-8 z-50"
        onClick={() => console.log(scrollYProgress.current)}
      >
        Log scroll progress
      </button>
    </>
  );
}
