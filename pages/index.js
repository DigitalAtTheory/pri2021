import { useState, useEffect } from "react";
import Head from "next/head";
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
import FormSection from "../components/FormSection";
import MobileHeroGraphic from "../components/MobileHeroGraphic";

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
        {donePlaying && <ScrollDownButton />}
      </div>
      <FirstSection />
      {isMobile ? <MobileSecondSection /> : <SecondSection />}
      {isMobile ? <MobileThirdSection /> : <ThirdSection />}
      <FourthSection />
      <FormSection />
      {/* <button
        className="sticky bottom-0 left-0 bg-red-500 text-white py-4 px-8 z-50"
        onClick={() => console.log(scrollYProgress.current)}
      >
        Log scroll progress
      </button> */}
    </>
  );
}
