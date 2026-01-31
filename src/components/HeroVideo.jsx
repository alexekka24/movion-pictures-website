import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import { forwardRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const HeroVideoa = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="relative h-screen w-screen overflow-hidden">
      {/* video content */}
    </section>
  );
});

const HeroVideo = () => {
  const ref = useRef(null);
  const heroRef = useRef(null);

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const [showHint, setShowHint] = useState(true);

  const isHeroInView = useInView(heroRef, { amount: 0.3 });

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.muted = isMuted || volume === 0;
    videoRef.current.volume = volume;
  }, [isMuted, volume]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 🎥 Video motion
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const videoX = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // 🌫 Overlay darken
  //   const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.65]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 1.5]);

  // 📝 Text motion
  const textY = useTransform(scrollYProgress, [0, 1], [0, 280]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section
      ref={ref}
      // className="relative h-screen w-screen overflow-hidden z-0"
      className="relative w-full overflow-hidden
    aspect-video
    md:aspect-video
    lg:h-screen lg:aspect-auto" 
    >
      <motion.div
        className="absolute bottom-8 left-8 z-40 flex items-center gap-3"
        initial="closed"
        whileHover="open"
      >
        {/* Mute Button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          aria-label={isMuted || volume === 0 ? "Unmute video" : "Mute video"}
          className="p-3 rounded-full bg-black/80 backdrop-blur-md border border-black/40 hover:bg-black/40 transition"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="h-5 w-5 text-white" />
          ) : (
            <Volume2 className="h-5 w-5 text-white" />
          )}
        </button>
        <motion.input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => {
            setVolume(parseFloat(e.target.value));
            setIsMuted(false);
            setShowHint(false);
          }}
          className="accent-white cursor-pointer"
          variants={{
            closed: { width: 0, opacity: 0 },
            open: { width: 96, opacity: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </motion.div>

      {/* 🎥 Background Video */}
      <motion.video
        ref={videoRef}
        // className="absolute inset-0 h-full w-full object-cover z-0"
        className="
    absolute inset-0 w-full h-full
    object-contain
    lg:object-cover
  "
        src="/src/assets/video/showreel.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          scale: videoScale,
          y: videoY,
          x: videoX,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* 🌫 Overlay */}
      <motion.div
        className="absolute inset-0 bg-black z-20"
        style={{
          opacity: overlayOpacity,
          scale: videoScale,
          y: videoY,
          x: videoX,
        }}
      />

      {/* 📝 Hero Content */}
      <motion.div
        className="relative z-30 flex h-full items-end justify-center text-center text-white px-4 gap-5"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* <div className="">
          <Button variant="primary" size="ex_lg">
            Explore Our Projects
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </Button>
        </div> */}
      </motion.div>
    </section>
  );
};

export default HeroVideo;
