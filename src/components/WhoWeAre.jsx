// import { useRef } from "react";
// import { useScroll, useTransform } from "framer-motion";
// import Carousel3D from "./Carousel3D";
// import Button from "./Button";
// import { ArrowRight } from "lucide-react";
// import useIsDesktop from "./📄 useIsDesktop";
// import Carousel3DFixedAxis from "./Carousel3DFixedAxis";
// import { WhoWeArePoints } from "./WhoWeArePoints";
// import DesktopCarouselFixedAxis from "./DesktopCarouselFixedAxis";

// const images = [
//   "/src/assets/images/who-we-are/image1.jpg",
//   "/src/assets/images/who-we-are/image1.jpg",
//   "/src/assets/images/who-we-are/image1.jpg",
//   "/src/assets/images/who-we-are/image1.jpg",
//   "/src/assets/images/who-we-are/image1.jpg",
//   "/src/assets/images/who-we-are/image1.jpg",
//   "/src/assets/images/who-we-are/image1.jpg",
//   "/src/assets/images/who-we-are/image1.jpg",
// ];

// export const WhoWeAre = () => {
//   const wrapperRef = useRef(null);
//   const isDesktop = useIsDesktop();

//   const { scrollYProgress } = useScroll({
//     target: wrapperRef,
//     offset: ["start start", "end end"],
//   });

//   const fadeOut = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

//   return (
//     <section
//       ref={wrapperRef}
//       className="relative h-[300vh] bg-linear-to-b from-[#dcdcdc] to-white"
//     >
//       <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-16">
//         <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
//           WHO WE ARE
//         </h1>

//         <DesktopCarouselFixedAxis scrollYProgress={scrollYProgress} />

//         <WhoWeArePoints />
//       </div>
//     </section>
//   );
// };

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export const WhoWeAre = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "center start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

//   return (
//     <section
//       ref={ref}
//       className="
//         relative min-h-screen overflow-hidden
//         flex items-center justify-center
//         bg-gradient-to-b from-black via-neutral-900 to-neutral-950
//         text-white
//       "
//     >
//       {/* Ambient glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px]
//           -translate-x-1/2 rounded-full
//           bg-purple-500/20 blur-[140px]" />
//       </div>

//       <motion.div
//         style={{ y, opacity }}
//         className="relative z-10 max-w-5xl text-center px-6"
//       >
//         <WhoWeAreContent />
//       </motion.div>
//     </section>
//   );
// };

// const WhoWeAreContent = () => {
//   return (
//     <>
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         className="
//           text-5xl md:text-7xl font-semibold tracking-tight
//           bg-gradient-to-b from-white to-white/60
//           bg-clip-text text-transparent
//         "
//       >
//         We don’t just create films.
//         <br />
//         <span className="text-white">We shape emotion.</span>
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//         className="
//           mt-8 text-lg md:text-xl
//           text-white/70 leading-relaxed
//         "
//       >
//         A story-first production studio crafting cinematic narratives
//         rooted in culture, detail, and human truth.
//       </motion.p>

//       <OrbitingImages />
//     </>
//   );
// };

// const images = [
//   "/src/assets/images/who-we-are/image1.jpg",
//   "/src/assets/images/who-we-are/image1.jpg",
//   "/src/assets/images/who-we-are/image1.jpg",
//   "/src/assets/images/who-we-are/image1.jpg",
// ];

// const OrbitingImages = () => {
//   return (
//     <div className="relative mt-20 h-[360px] w-full flex items-center justify-center">
//       <motion.div
//         className="absolute inset-0"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
//       >
//         {images.map((src, i) => {
//           const angle = (360 / images.length) * i;
//           return (
//             <div
//               key={i}
//               className="absolute left-1/2 top-1/2"
//               style={{
//                 transform: `
//                   rotate(${angle}deg)
//                   translateX(220px)
//                 `,
//               }}
//             >
//               <img
//                 src={src}
//                 className="
//                   w-40 h-56 object-cover rounded-xl
//                   shadow-2xl opacity-90
//                 "
//                 draggable={false}
//               />
//             </div>
//           );
//         })}
//       </motion.div>

//       {/* Center text */}
//       <div className="absolute text-sm uppercase tracking-widest text-white/50">
//         WHO WE ARE
//       </div>
//     </div>
//   );
// };

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const WhoWeAre = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, 1, 1]);

  return (
    <section
      ref={ref}
      className="
        relative min-h-screen w-full overflow-hidden
        flex items-center justify-center
        bg-neutral-950 text-white
      "
    >
      {/* Cinematic glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3
          h-[600px] w-[600px] -translate-x-1/2
          rounded-full bg-purple-600/20 blur-[160px]"
        />
      </div>

      {/* Film grain */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.035]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl px-6 text-center"
      >
        <CinematicContent />
      </motion.div>
    </section>
  );
};

const CinematicContent = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-6 text-sm tracking-[0.35em] text-white/50 uppercase"
      >
        Who We Are
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          text-5xl md:text-7xl lg:text-8xl
          font-semibold tracking-tight leading-[1.05]
          bg-gradient-to-b from-white to-white/60
          bg-clip-text text-transparent
        "
      >
        Stories that stay
        <br />
        long after the screen fades.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="
          mt-10 max-w-2xl mx-auto
          text-lg md:text-xl text-white/70
          leading-relaxed
        "
      >
        We are a story-first production studio.
        Rooted in culture. Obsessed with detail.
        Crafting cinematic narratives that feel human,
        intimate, and timeless.
      </motion.p>

      <CinematicOrbit />
    </>
  );
};

const images = [
  "/assets/images/who-we-are/image1.jpg",
  "/assets/images/who-we-are/image1.jpg",
  "/assets/images/who-we-are/image1.jpg",
];

const CinematicOrbit = () => {
  return (
    <div className="relative mt-24 h-[380px] w-full flex items-center justify-center">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        {images.map((src, i) => {
          const angle = (360 / images.length) * i;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                  rotate(${angle}deg)
                  translateX(240px)
                `,
              }}
            >
              <img
                src={src}
                alt=""
                draggable={false}
                className="
                  w-44 h-64 object-cover rounded-xl
                  shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                  opacity-90
                "
              />
            </div>
          );
        })}
      </motion.div>

      {/* Center marker */}
      <div className="absolute text-xs tracking-[0.4em] text-white/40">
        EST. STORIES
      </div>
    </div>
  );
};

