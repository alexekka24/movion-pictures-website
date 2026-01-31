import {
  motion,
  useTransform,
  useVelocity,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";

export default function DesktopCarousel3D({ images, scrollYProgress }) {
  /* ---------------- SCROLL ROTATION ---------------- */

  const baseRotation = useTransform(scrollYProgress, [0, 1], [0, -360]);

  const velocity = useVelocity(scrollYProgress);
  const momentum = useSpring(velocity, { stiffness: 60, damping: 20 });
  const momentumRotation = useTransform(momentum, [-0.5, 0.5], [40, -40]);

  const rotation = useTransform(
    [baseRotation, momentumRotation],
    ([r, m]) => r + m
  );

  /* ---------------- MOUSE PARALLAX ---------------- */

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  useEffect(() => {
    const onMove = (e) => {
      tiltX.set((e.clientY / window.innerHeight - 0.5) * -8);
      tiltY.set((e.clientX / window.innerWidth - 0.5) * 8);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* ---------------- GEOMETRY ---------------- */

  const radius = 380;
  const step = 360 / images.length;

  return (
    <div
      className="relative w-full h-[520px] flex items-center justify-center"
      style={{ perspective: "1400px" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          rotateY: rotation,
          rotateX: tiltX,
          rotateZ: tiltY,
        }}
      >
        {images.map((src, i) => (
          <CarouselCard
            key={i}
            src={src}
            index={i}
            step={step}
            radius={radius}
            rotation={rotation}
          />
        ))}
      </motion.div>
    </div>
  );
}


function CarouselCard({ src, index, step, radius, rotation }) {
  const angle = index * step;

  /* Distance from camera-facing position (0deg) */
  const distanceFromCenter = useTransform(rotation, (r) => {
    const normalized = ((angle + r) % 360 + 360) % 360;
    const dist = Math.min(normalized, 360 - normalized);
    return dist;
  });

  /* Depth effects */
  const blur = useTransform(distanceFromCenter, (d) => {
  if (d < 90) return `blur(${(d / 90) * 2}px)`;
  return `blur(${2 + ((d - 90) / 90) * 4}px)`;
});

  const opacity = useTransform(distanceFromCenter, [0, 120, 180], [1, 0.6, 0.25]);
  const scale = useTransform(distanceFromCenter, [0, 120, 180], [1.08, 0.95, 0.85]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `
          rotateY(${angle}deg)
          translateZ(${radius}px)
          translate(-50%, -50%)
        `,
        filter: blur,
        opacity,
        scale,
      }}
    >
      <img
        src={src}
        className="w-56 h-72 rounded-xl object-cover shadow-2xl"
        alt=""
      />
    </motion.div>
  );
}
