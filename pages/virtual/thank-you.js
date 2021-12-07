import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Lockup from "../../components/LockUp";
import UnderTheHood from "../../components/UnderTheHood";
import styles from "../../styles/thankYou.module.css";
import wallpaperMockup from "../../public/PRI-Wallpaper-Section-funnycar.png";

export default function VirtualThankYou() {
  return (
    <div>
      <Head>
        <title>Thank You! | Our Proof is on the Podium</title>
      </Head>
      <div className="max-w-3xl mx-auto lg:mb-12">
        <h1 className="text-white text-center my-12 text-4xl lg:text-5xl font-bold">{`You're in!`}</h1>
        <p className="text-white px-4 text-center pb-6">
          Even though we missed you in-person, we wanted to leave you with a
          little something to feel like you were here with us. Snag the PRI
          Show-exclusive wallpaper below, and check out some of the other
          content around Kalitta Motorsports below.
        </p>
        <p className="text-white px-4 text-center mb-2">
          Stay tuned for more exclusive content from us and our partners like
          Kalitta Motorsports in the near future.
        </p>
      </div>
      <div>
        <div className={`${styles.wallpaperBackground}`}>
          <div className="mx-auto max-w-3xl">
            <div className="w-1/2 mx-auto py-16">
              <Image src={wallpaperMockup} priority />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-3xl lg:mt-12">
          <Link href="/virtual/wallpapers">
            <a className="bg-red-600 text-center mb-12 text-white w-3/4 lg:w-1/2 mx-auto mt-6 py-3 rounded shadow-xl block cursor-pointer">
              Download the wallpaper
            </a>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-3xl">
        <UnderTheHood />
      </div>
      <Lockup />
    </div>
  );
}
