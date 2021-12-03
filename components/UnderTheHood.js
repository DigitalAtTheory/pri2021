import styles from "../styles/fourthSection.module.css";
import ReactPlayer from "react-player";

export default function UnderTheHood() {
  return (
    <div className="mb-24 max-w-3xl mx-auto px-4">
      <h2 className="text-white text-center font-bold text-4xl lg:text-5xl mb-12">
        Go under the hood
      </h2>
      <div className={`${styles.videoContainer} border border-white`}>
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
      </div>
    </div>
  );
}
