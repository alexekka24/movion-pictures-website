// import {
//   useState,
//   useRef,
//   useEffect,
//   forwardRef,
//   useLayoutEffect,
// } from "react";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { Scroll, Volume2, VolumeX } from "lucide-react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
// import Button from "./Button";

// export const HeroVideo = () => {
//   const ref = useRef(null);

//   const [isMuted, setIsMuted] = useState(true);
//   const [volume, setVolume] = useState(0.3);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ref.current,
//           start: "top top",
//           end: "+=600%",
//           scrub: 1.5,
//           pin: true,
//           pinSpacing: true,
//           // markers: true,
//         },
//       });

//       // Scale video down to reveal white space
//       tl.to(".video", {
//         scale: 0.6,
//         borderRadius: "25px",
//         boxShadow: "0 20px 60px rgb(0, 0, 0)",
//         ease: "power3.out",
//         duration: 1,
//       });

//       // THINK (left)
//       tl.to(".think-text", {
//         opacity: 1,
//         y: -20,
//         duration: 0.6,
//       }).to(".think-text", {
//         opacity: 0,
//         y: -60,
//         duration: 0.5,
//         delay: 0.3,
//       });

//       // BUILD (right)
//       tl.fromTo(
//         ".build-text",
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, duration: 0.6 },
//       ).to(".build-text", {
//         opacity: 0,
//         y: -40,
//         duration: 0.5,
//         delay: 0.3,
//       });

//       // DELIVER (top)
//       tl.fromTo(
//         ".deliver-text",
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, duration: 0.8 },
//       );

//       tl.fromTo(
//         ".wipe-block",
//         { yPercent: 100 },
//         {
//           yPercent: 20,
//           stagger: 0.35,
//           duration: 1.2,
//           ease: "power4.inOut",
//         },
//         "-=0.5",
//       );
//       tl.fromTo(
//         ".wipe-text",
//         { opacity: 0, scale: 0.95 },
//         {
//           opacity: 1,
//           scale: 1,
//           stagger: 0.35,
//           duration: 0.6,
//           ease: "power3.out",
//         },
//         "<",
//       );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       {/* <section
//         ref={ref}
//         className="relative h-screen w-full bg-white overflow-hidden shadow-md"
//       > */}
//       <section
//         ref={ref}
//         className="
//     relative w-full bg-white overflow-hidden shadow-md
//     pt-[80px]
//     h-[85vh]
//     md:pt-0 md:h-screen
//   "
//       >
//         {/* TOP TEXT AREA */}
//         {/* <div
//           className="top-text absolute top-0 left-0 w-full h-[30vh]
//                   flex items-center justify-center overflow-hidden from-white to-white/60"
//         >
//           <h1 className="text top-text-1 text-[10vw]">Think</h1>
//           <h1 className="text top-text-2 absolute text-[10vw] opacity-0">
//             Build
//           </h1>
//           <h1 className="text top-text-3 absolute text-[10vw] opacity-0">
//             Deliver
//           </h1>
//         </div> */}

//         {/* TEXT ANCHORS */}
//         <div className="pointer-events-none absolute inset-0 z-30 hidden md:block">
//           {/* THINK – LEFT */}
//           <h1
//             className="think-text vertical-text absolute left-10 top-1/2 -translate-y-1/2
//                text-[8vw] opacity-0"
//           >
//             Think
//           </h1>

//           {/* BUILD – RIGHT */}
//           <h1
//             className="build-text vertical-text absolute right-10 top-1/2 -translate-y-1/2
//                text-[8vw] opacity-0"
//           >
//             Build
//           </h1>

//           {/* DELIVER – TOP */}
//           <h1
//             className="deliver-text absolute top-10 left-1/2 -translate-x-1/2
//                text-[10vw] opacity-0"
//           >
//             Deliver
//           </h1>
//         </div>

//         {/* VIDEO */}
//         {/* <div className="video-wrap absolute inset-0 flex items-center justify-center shadow-[0_20px_60px_rgb(0,0,0)]">
//           <video
//             className="video w-full h-full object-cover"
//             src="https://res.cloudinary.com/dxwadodnh/video/upload/v1769851472/shoreel-web_be3aty.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//         </div> */}
//         {/* VIDEO */}
//         <div className="video-wrap absolute inset-0 flex items-center justify-center">
//           <div
//             className="
//               video 
//               w-full 
//               md:h-full 
//               md:w-full
//               aspect-video 
//               md:aspect-auto
//               overflow-hidden
//               bg-black
//             "
//           >
//             <video
//               className="w-full h-full object-contain md:object-cover"
//               src="https://res.cloudinary.com/dxwadodnh/video/upload/v1769851472/shoreel-web_be3aty.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//             />
//           </div>
//         </div>

//         {/* BOTTOM TEXT AREA */}
//         {/* <div
//           className="wipe-text bottom-text absolute bottom-0 left-0 w-full h-[25vh]
//                   flex items-center justify-center overflow-hidden"
//         >
//           <p className="wipe-block sub text-9xl tracking-wide">
//             Design. Code. Ship.
//           </p>
//         </div> */}
//         <div
//           className="
//     wipe-text
//     absolute bottom-6 left-1/2 -translate-x-1/2 z-40
//     w-full flex items-center justify-center
//     md:bottom-0 md:left-0 md:translate-x-0 md:h-[25vh]
//   "
//         >
//           <p className="wipe-block sub text-5xl md:text-9xl tracking-wide text-white md:text-black">
//             Design. Code. Ship.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };




import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroVideo = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // ✅ Desktop only animations
        "(min-width: 768px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ref.current,
              start: "top top",
              end: "+=600%",
              scrub: 1.5,
              pin: true,
              pinSpacing: true,
              // markers: true,
            },
          });

          tl.to(".video", {
            scale: 0.6,
            borderRadius: "25px",
            boxShadow: "0 20px 60px rgb(0, 0, 0)",
            ease: "power3.out",
            duration: 1,
          });

          tl.to(".think-text", {
            opacity: 1,
            y: -20,
            duration: 0.6,
          }).to(".think-text", {
            opacity: 0,
            y: -60,
            duration: 0.5,
            delay: 0.3,
          });

          tl.fromTo(
            ".build-text",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6 }
          ).to(".build-text", {
            opacity: 0,
            y: -40,
            duration: 0.5,
            delay: 0.3,
          });

          tl.fromTo(
            ".deliver-text",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8 }
          );

          tl.fromTo(
            ".wipe-block",
            { yPercent: 100 },
            {
              yPercent: 20,
              stagger: 0.35,
              duration: 1.2,
              ease: "power4.inOut",
            },
            "-=0.5"
          );

          tl.fromTo(
            ".wipe-text",
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              stagger: 0.35,
              duration: 0.6,
              ease: "power3.out",
            },
            "<"
          );
        },

        // ✅ Mobile: remove all animations
        "(max-width: 767px)": () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
          gsap.set(".video", { clearProps: "all" });
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    // <section
    //   ref={ref}
    //   className="
    //     relative w-full bg-white overflow-hidden shadow-md
    //     aspect-video md:aspect-auto
    //     md:h-screen
    //   "
    // >
    <section
  ref={ref}
  className="
    relative w-full bg-white overflow-hidden shadow-md
    aspect-video md:aspect-auto
    pt-[80px] md:pt-0
    md:h-screen
  "
>

      {/* Desktop text only */}
      <div className="pointer-events-none absolute inset-0 z-30 hidden md:block">
        <h1 className="think-text vertical-text absolute left-10 top-1/2 -translate-y-1/2 text-[8vw] opacity-0">
          Think
        </h1>

        <h1 className="build-text vertical-text absolute right-10 top-1/2 -translate-y-1/2 text-[8vw] opacity-0">
          Build
        </h1>

        <h1 className="deliver-text absolute top-10 left-1/2 -translate-x-1/2 text-[10vw] opacity-0">
          Deliver
        </h1>
      </div>

      {/* VIDEO */}
      <div className="video-wrap absolute inset-0 flex items-center justify-center">
        <div
          className="
            video w-full h-full overflow-hidden bg-black
            md:w-full md:h-full
          "
        >
          <video
            className="w-full h-full object-contain md:object-cover"
            src="https://res.cloudinary.com/dxwadodnh/video/upload/v1769851472/shoreel-web_be3aty.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Desktop bottom text only */}
      <div className="wipe-text absolute bottom-0 left-0 w-full h-[25vh] hidden md:flex items-center justify-center overflow-hidden z-40">
        <p className="wipe-block sub text-9xl tracking-wide text-black">
          Design. Code. Ship.
        </p>
      </div>
    </section>
  );
};
