import styles from "../styles/firstSection.module.css";
export default function MobileDriverGraphic() {
  return (
    <div
      className={`h-screen w-full absolute top-0 flex items-center justify-center lg:py-16`}
    >
      <div className={`h-full w-full  ${styles.MobileDriverGraphic}`}></div>
    </div>
  );
}
