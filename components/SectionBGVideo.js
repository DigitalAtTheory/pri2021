import styles from "../styles/sectionBGVideo.module.css";

export default function SectionBGVideo({ videoURL }) {
  return (
    <div className="absolute top-0 h-full w-full">
      <div className={`${styles.overlay} absolute top-0 h-full w-full z-10`} />
      <video
        src={videoURL}
        className="relative h-full w-full z-0 object-cover"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
}
