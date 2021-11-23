import { motion } from "framer-motion";

export default function BackgroundVideo({ handleDonePlaying }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="absolute top-0 w-full h-full z-0"
    >
      <video
        src="/Tech-Video-Hero-Background.mp4"
        muted
        autoPlay
        playsInline
        className="relative top-0 h-full w-full object-cover"
        onEnded={handleDonePlaying}
      />
    </motion.div>
  );
}
