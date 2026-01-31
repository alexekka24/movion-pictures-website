import { motion, useScroll, useVelocity, useTransform } from "framer-motion";
import { useRef } from "react";

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

export default function Carousel3DFixedAxis() {
  const ref = useRef(null);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  // Scroll speed → rotation speed
  const rotation = useTransform(
    velocity,
    [-3000, 0, 3000],
    [120, 0, -120]
  );

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-full"
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          rotateY: rotation,
          rotateX: -12, // camera above
        }}
      >
        {images.map((src, i) => (
          <CarouselCard key={i} src={src} index={i} />
        ))}
      </motion.div>
    </motion.div>
  );
}


function CarouselCard({ src, index }) {
  const angle = (360 / 4) * index;
  const radius = 260;

  return (
    <motion.div
      className="absolute w-48 h-64 rounded-xl overflow-hidden shadow-xl bg-white"
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
        className="w-full h-full object-cover"
        draggable={false}
      />
    </motion.div>
  );
}
