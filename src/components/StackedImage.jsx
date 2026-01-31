import { motion, useTransform, useMotionValue } from "framer-motion";

export default function StackedImage({ src, index, scrollYProgress }) {
  const start = 0.18 + index * 0.18;
  const end = start + 0.25;

  const baseX = useTransform(scrollYProgress, [start, end], [0, -150]);
  const opacity = useTransform(scrollYProgress, [start, start + 0.08], [0, 1]);
  const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);

  // mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <motion.img
      src={src}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.05;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.05;
        mouseX.set(x);
        mouseY.set(y);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        x: baseX,
        y: mouseY,
        opacity,
        scale,
        translateX: mouseX,
      }}
      className="absolute top-0 left-2/3 -translate-x-1/2
                 w-140 h-180 object-cover rounded-2xl shadow-xl
                 will-change-transform"
      alt=""
    />
  );
}
