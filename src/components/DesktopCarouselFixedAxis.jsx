// import { motion, useTransform } from "framer-motion";

const images = [
  "/assets/images/who-we-are/image1.jpg",
  "/assets/images/who-we-are/image1.jpg",
  "/assets/images/who-we-are/image1.jpg",
  "/assets/images/who-we-are/image1.jpg",
  "/assets/images/who-we-are/image1.jpg",
  "/assets/images/who-we-are/image1.jpg",
  "/assets/images/who-we-are/image1.jpg",
  "/assets/images/who-we-are/image1.jpg",
];
import {
  motion,
  useTransform,
  useTime,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function DesktopCarouselFixedAxis({ scrollYProgress }) {
  const time = useTime();
  const [isIdle, setIsIdle] = useState(true);
  const idleTimeout = useRef(null);

  // Scroll-based rotation (main driver)
  const scrollRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 360]
  );

  // Ultra-slow idle spin (1 full rotation in ~120s)
  const idleRotate = useTransform(time, (t) => (t / 1000) * 3);

  // Smooth idle on/off
  const idleFactor = useSpring(isIdle ? 1 : 0, {
    stiffness: 60,
    damping: 20,
  });

  // Final blended rotation
  const rotateY = useTransform(
    [scrollRotate, idleRotate, idleFactor],
    ([s, i, f]) => s + i * f
  );

  // Detect scroll activity
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", () => {
      setIsIdle(false);
      clearTimeout(idleTimeout.current);

      idleTimeout.current = setTimeout(() => {
        setIsIdle(true);
      }, 1200); // resume idle after scroll stops
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div
      className="relative w-full h-115 flex items-center justify-center"
      style={{ perspective: "1400px" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          rotateY,
          rotateX: -10,
        }}
      >
        {images.map((src, i) => (
          <CarouselCard
            key={i}
            src={src}
            index={i}
            total={images.length}
          />
        ))}
      </motion.div>
    </div>
  );
}

function CarouselCard({ src, index, total }) {
  const angle = (360 / total) * index;
  const radius = 320;

  return (
    <div
      className="absolute left-1/2 top-1/2 w-56 h-72 -translate-x-1/2 -translate-y-1/2"
      style={{
        transform: `
          rotateY(${angle}deg)
          translateZ(${radius}px)
        `,
      }}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover rounded-xl shadow-2xl"
        draggable={false}
      />
    </div>
  );
}
