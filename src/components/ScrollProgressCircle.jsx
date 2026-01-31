import { motion, useTransform } from "framer-motion";

export const ScrollProgressCircle = ({ progress }) => {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  const dashOffset = useTransform(progress, [0, 1], [circumference, 0]);

  return (
    <svg
      width="64"
      height="64"
      className="absolute right-10 top-1/2 -translate-y-1/2"
    >
      <circle
        cx="32"
        cy="32"
        r={radius}
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="3"
        fill="none"
      />
      <motion.circle
        cx="32"
        cy="32"
        r={radius}
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeDasharray={circumference}
        style={{ strokeDashoffset: dashOffset }}
        strokeLinecap="round"
      />
    </svg>
  );
};
