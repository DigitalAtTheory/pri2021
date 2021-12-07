import Head from "next/head";
import UnderTheHood from "../../components/UnderTheHood";
export default function VirtualWallpapers() {
  return (
    <div className="max-w-4xl mx-auto text-center my-6">
      <Head>
        <title>Wallpapers | Our Proof is on the Podium</title>
      </Head>
      <UnderTheHood />
      <h1 className="text-gray-50 mb-8 text-4xl font-bold mb-12">
        Download your wallpaper
      </h1>
      <img src="/jr-todd-wallpaper.jpg" alt="Porsche Mobile Wallpaper" />
      <img src="/funny-car-wallpaper.jpg" alt="Porsche Mobile Wallpaper" />
    </div>
  );
}
