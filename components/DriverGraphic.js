import Image from "next/image";
import graphic from "../public/jr-todd.png";
import styles from "../styles/firstSection.module.css";
export default function DriverGraphic() {
  return (
    <div
      className={`h-screen w-full absolute top-0 flex items-center justify-center lg:py-16`}
    >
      <div className={`h-full w-full  ${styles.driverGraphic}`}></div>
    </div>
  );
}
