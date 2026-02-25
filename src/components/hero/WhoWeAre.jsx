import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const images = [
  { id: 1,src: "assets/images/image1.jpg", alt: "1" },
  { id: 2,src: "assets/images/image2.jpg", alt: "2" },
  { id: 3,src: "assets/images/image3.jpg", alt: "3" },
  { id: 4,src: "assets/images/image4.jpg", alt: "4" },
  { id: 5,src: "assets/images/image5.jpg", alt: "5" },
];

gsap.registerPlugin(ScrollTrigger);

export const WhoWeAre = ({content}) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const pinRef = useRef(null);
  const scaleRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=600%",
          scrub: true,
          pin: pinRef.current,
        },
      });

      // PHASE 1 — breathing space
      tl.to({}, { duration: 1 });

      // PHASE 2 — SCALE
      tl.fromTo(
        scaleRef.current,
        { scale: 0.5 },
        { scale: 1, duration: 2, ease: "none" },
      );

      // PHASE 3 — reveal horizontal layer
      tl.to(trackRef.current, {
        opacity: 1,
        duration: 0.2,
      });

      // PHASE 4 — horizontal scroll
      tl.to(trackRef.current, {
        xPercent: -100 * (images.length - 1),
        duration: images.length,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative ">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_55%)]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.04),transparent_60%)]" /> */}
 
      {/* TEXT */}
      <div className="relative z-10 flex flex-col gap-10 md:gap-[5vh] py-10 md:py-20">
         {/* <p className="text-md uppercase tracking-[0.3em] text-gray-500 mb-3">
          WHO WE ARE
        </p> */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold">
          {/* Stories that stay
          <br />
          long after the screen fades. */}
          {content.title}
        </h1>
       
        <div className="flex justify-center items-center w-screen">
        <p className="text-base md:text-4xl text-center w-[80%]">
          {/* We are a story-first production studio. Rooted in culture. Obsessed
          with detail. Crafting cinematic narratives that feel human, intimate,
          and timeless. */}
          {content.description}
        </p>
        </div>
      </div>

      {/* PINNED VISUAL STAGE */}
      {/* <div ref={pinRef} className="relative h-20 md:h-screen overflow-hidden"> */}
        {/* SCALE LAYER */}
        {/* <div
          ref={scaleRef}
          className="absolute inset-0 z-20 flex items-center justify-center"
        > */}
          {/* <img
            src="/assets/images/image1.jpg"
            className="w-[60vw] h-[70vh] object-cover rounded-3xl"
          />
        </div> */}

        {/* HORIZONTAL LAYER */}
        {/* <div ref={trackRef} className="absolute inset-0 z-20 flex opacity-0">
          {images.map((img, i) => (
            <div
              key={i}
              className="w-screen h-screen shrink-0 flex items-center justify-center"
            >
              <img
                src={img.src}
                className="w-[60vw] h-[70vh] object-cover rounded-3xl"
              />
            </div>
          ))}
        </div> */}
      {/* </div>  */}
    </section>
  );
};
