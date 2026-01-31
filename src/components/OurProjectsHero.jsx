import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroProjectsHero = ({title, subtitle}) => {
  const sectionRef = useRef(null);

  // Track scroll only for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/src/assets/images/who-we-are/image1.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        y: bgY,
      }}
    >
      {/* Overlay fade */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-6 text-white"
        style={{ y: textY, opacity: textOpacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >
        <motion.h1
          className="lg:text-9xl md:text-6xl font-bold font-[Rubik]"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {title || "Our Projects"}
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-white/80"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Stories crafted with purpose, creativity, and impact.
        </motion.p>
      </motion.div>
    </section>
  );
};
