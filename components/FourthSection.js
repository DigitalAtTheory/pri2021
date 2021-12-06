import Image from "next/image";
import trdLogo from "../public/mobil-1-trd-lockup-reverse-rgb-01.png";
import { motion } from "framer-motion";
import styles from "../styles/fourthSection.module.css";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";

export default function FourthSection() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
  });
  const [logoRef, logoInView] = useInView({
    triggerOnce: true,
  });
  const [firstLIRef, firstLIInView] = useInView({
    triggerOnce: true,
  });
  const [secondLIRef, secondLIInView] = useInView({
    triggerOnce: true,
  });
  const [thirdLIRef, thirdLIInView] = useInView({
    triggerOnce: true,
  });

  const [hoodTitleRef, hoodTitleInView] = useInView({
    triggerOnce: true,
  });

  const [videoRef, videoInView] = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <div>
        <motion.div
          ref={logoRef}
          animate={{ opacity: logoInView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="mt-6 w-1/2 mx-auto"
        >
          <Image src={trdLogo} priority placeholder="blur" alt="TRD Logo" />
        </motion.div>
        <motion.h2
          ref={titleRef}
          animate={{ scale: titleInView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-white text-center text-4xl lg:text-7xl mt-24 font-bold"
        >
          Mobil 1 & Toyota: History in the making
        </motion.h2>
        <ul className="flex flex-wrap justify-center mx-auto max-w-5xl gap-8 my-24">
          <motion.li
            ref={firstLIRef}
            animate={{
              x: firstLIInView ? 0 : -200,
              opacity: firstLIInView ? 1 : 0,
            }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
            className="bg-black w-72"
          >
            <h3 className="text-white uppercase font-bold text-center py-4">
              Mobil 1 x Kalitta Motorsports
            </h3>
            <hr className="border-red-600 border-4 my-2" />
            <p className="px-4 py-2 leading-8 text-white">
              {`Since 2020, Mobil 1 and Kalitta Motorsports have collaborated to help build on Connie Kalitta's 60 year pedigree of NHRA success.`}
            </p>
          </motion.li>
          <motion.li
            ref={secondLIRef}
            animate={{
              x: secondLIInView ? 0 : -200,
              opacity: secondLIInView ? 1 : 0,
            }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
            className="bg-black w-72"
          >
            <h3 className="text-white uppercase font-bold text-center py-4">
              Starting off with a win
            </h3>
            <hr className="border-red-600 border-4 my-2" />
            <p className="px-4 py-2 leading-8 text-white">
              Our relationship kicked off with a victory in the season opening
              2020 Winternationals by Doug Kalitta in Top Fuel.
            </p>
          </motion.li>
          <motion.li
            ref={thirdLIRef}
            animate={{
              x: thirdLIInView ? 0 : -200,
              opacity: thirdLIInView ? 1 : 0,
            }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
            className="bg-black w-72"
          >
            <h3 className="text-white uppercase font-bold text-center py-4">
              And the wins just keep on coming:
            </h3>
            <hr className="border-red-600 border-4 my-2" />
            <p className="px-4 py-2 text-white">
              Mobil 1 and Kalitta Motorsports have since taken home a Wally at:
              <br />
              <br /> 2020 MidWest Nationals with Doug Kalitta in Top Fuel.
              <br />
              <br /> 2020 U.S. Nationals with Shawn Langdon in Top Fuel. <br />
              <br />
              2021 Gatornationals with J.R. Todd in Funny Car.
            </p>
          </motion.li>
        </ul>
      </div>
      <div className="mb-24 max-w-3xl mx-auto px-2">
        <motion.h2
          ref={hoodTitleRef}
          animate={{ opacity: hoodTitleInView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-white text-center font-bold text-4xl lg:text-5xl mb-24"
        >
          Go under the hood
        </motion.h2>
        <motion.div
          ref={videoRef}
          animate={{
            y: videoInView ? 0 : 200,
            opacity: videoInView ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className={`${styles.videoContainer} border border-white`}
        >
          <ReactPlayer
            url="https://player.vimeo.com/video/651717261?h=700623a48b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            config={{
              vimeo: {
                playerOptions: {
                  controls: true,
                  byline: false,
                  color: "#e82725",
                },
              },
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
