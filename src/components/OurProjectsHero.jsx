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
      className="relative overflow-hidden"
      // style={{
      //   backgroundImage: "url('/assets/images/who-we-are/image1.jpg')",
      //   backgroundSize: "contain",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "fixed",
      //   y: bgY,
      // }}
    >
      {/* Overlay fade */}
      {/* <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      /> */}

      {/* Content */}
      {/* <motion.div
        className="relative z-10 w-full px-6 text-black"
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
          className="lg:text-[1500%] md:text-[1500%] text-[500%] font-[Montserrat]"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {title || "Our Projects"}
        </motion.h1>
      </motion.div> */}
      <div className="absolute top-0 w-full h-[50vh] bg-amber-400"></div>
      <div className="center w-full h-[50vh] bg-white"></div>
      <div className="absolute bottom-0 w-full h-[50vh] bg-lime-400"></div>
    </section>
  );
};
