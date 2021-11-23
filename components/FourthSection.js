import Image from "next/image";
import trdLogo from "../public/mobil-1-trd-lockup-reverse-rgb-01.png";

export default function FourthSection() {
  return (
    <div>
      <div className="mt-12 w-1/2 mx-auto">
        <Image src={trdLogo} priority placeholder="blur" />
      </div>
      <h2 className="text-white text-center text-7xl mt-6">
        Mobil 1 & Toyota: History in the making
      </h2>
    </div>
  );
}
