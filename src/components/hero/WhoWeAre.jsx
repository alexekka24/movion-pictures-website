import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const WhoWeAre = ({ content }) => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative ">
      {/* TEXT */}
      <div className="relative z-10 flex flex-col gap-10 md:gap-[5vh] py-10 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold">
          {content.title}
        </h1>

        <div className="flex justify-center items-center w-screen">
          <p className="text-base md:text-4xl text-center w-[80%]">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
};
