import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MarqueeComponent } from "./MarqueeComponent";

gsap.registerPlugin(ScrollTrigger);

export default function GravitySection() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main",
          start: "50% 50%",
          end: "150% 50%",
          scrub: 2,
          pin: true,
          // markers: true,
        },
      });

      tl.to(
        "#center",
        {
          height: "100vh",
        },
        "a"
      )
        .to(
          "#top",
          {
            top: "-50%",
          },
          "a"
        )
        .to(
          "#bottom",
          {
            bottom: "-50%",
          },
          "a"
        )
        .to(
          "#top-h1",
          {
            top: "60%",
          },
          "a"
        )
        .to(
          "#bottom-h1",
          {
            bottom: "-30%",
          },
          "a"
        )
        .to(
          "#center-h1",
          {
            top: "-30%",
          },
          "a"
        )
        .to(".content", {
          marginTop: "0%",
          delay: -0.2,
        });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="w-full h-screen bg-neutral-700">
      <div
        id="main"
        className="relative w-full h-screen overflow-hidden bg-aquamarine"
      >
        {/* TOP */}
        <div
          id="top"
          className="absolute top-0 z-10 w-full h-[50vh] bg-black text-white overflow-hidden"
        >
          <h1
            id="top-h1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-founder"
          >
            OUR
          </h1>
        </div>

        {/* CENTER */}
        <div
          id="center"
          className="relative w-full h-screen bg-black overflow-hidden"
        >
          {/* CENTER H1 (for GSAP target) */}
          <h1
            id="center-h1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-founder text-white"
          >
            PROJECTS
          </h1>

          <div className="content mt-[100vh] flex flex-col items-center justify-center h-screen gap-[4vh] text-white">
            {/* <h3 className="w-[22%] text-center text-[3vw] font-cardinalR font-normal">
            </h3> */}
            <img src="/assets/images/image1.jpg" alt="" className="h-[80vh] object-cover rounded-xl" />
          </div>
        </div>

        {/* BOTTOM */}
        <div
          id="bottom"
          className="absolute bottom-0 w-full h-[50vh] bg-white overflow-hidden"
        >
          <h1
            id="bottom-h1"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] font-founder"
          >
            PROJECTS
          </h1>
        </div>
      </div>
    </div>
  );
}
