import Image from "next/image";
import trdLogo from "../public/mobil-1-trd-lockup-reverse-rgb-01.png";
import { motion } from "framer-motion";
import styles from "../styles/fourthSection.module.css";
import ReactPlayer from "react-player";

export default function FourthSection() {
  return (
    <div>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="mt-24 w-1/2 mx-auto"
        >
          <Image src={trdLogo} priority placeholder="blur" />
        </motion.div>
        <h2 className="text-white text-center text-4xl lg:text-7xl mt-24">
          Mobil 1 & Toyota: History in the making
        </h2>
        <ul className="flex flex-wrap justify-center mx-auto max-w-5xl gap-8 my-24">
          <li className="bg-black w-72 rounded border-white border-2">
            <h3 className="bg-white text-black uppercase font-bold text-center py-4">
              Mobil 1 x Kalitta Motorsports
            </h3>
            <p className="px-4 py-2 leading-8 text-white">
              Since 2020, Mobil 1 has been proud partners with Kalitta
              Motorsports, joining forces with a team that has competed in NHRA
              for over 60 years.
            </p>
          </li>
          <li className="bg-black w-72 rounded border-white border-2">
            <h3 className="bg-white text-black uppercase font-bold text-center py-4">
              Starting with a win
            </h3>
            <p className="px-4 py-2 leading-8 text-white">
              Fittingly the relationship kicked off with a victory in the season
              opening 2020 Winternationals by Doug Kalitta in Top Fuel.
            </p>
          </li>
          <li className="bg-black w-72 rounded border-white border-2">
            <h3 className="bg-white text-black uppercase font-bold text-center py-4">
              Adding more victories
            </h3>
            <p className="px-4 py-2 text-white">
              Since that eventful first race, Mobil 1 and Kalitta have claimed 3
              victories, the 2020 MidWest Nationals with Doug Kalitta in Top
              Fuel, the 2020 U.S. Nationals with Shawn Langdon in Top Fuel and
              the 2021 Gatornationals with J.R. Todd in Funny Car.
            </p>
          </li>
        </ul>
      </div>
      <div className="mb-24 max-w-3xl mx-auto px-2">
        <h2 className="text-white text-center text-4xl lg:text-5xl mb-24">
          Go under the hood
        </h2>
        <div
          className={`${styles.videoContainer} p-0.5 bg-white rounded border-2 border-red-500`}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=pPNkSDhyZtY"
            config={{
              youtube: {
                playerVars: {
                  controls: 1,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
