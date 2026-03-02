import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Volume2, VolumeX } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const HeroVideo = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);

  const [muted, setMuted] = useState(true);

  // Autoplay fix for browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay failed:", err);
      });
    }
  }, []);

  const toggleMute = async () => {
    const video = videoRef.current;
    if (!video) return;

    const newMutedState = !video.muted;
    video.muted = newMutedState;
    setMuted(newMutedState);

    // Some browsers require an explicit play() on user interaction to unmute
    try {
      await video.play();
    } catch (err) {
      console.log("Interaction play failed:", err);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ref.current,
              start: "top top",
              end: "+=100%",
              scrub: 1.5,
              pin: true,
              pinSpacing: true,
            },
          });

          tl.to(videoRef.current, {
            volume: 0,
            ease: "none",
            duration: 0.5,
          }, 0);

          tl.to(".video", {
            scale: 0.7,
            borderRadius: "25px",
            boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.45)",
            ease: "power3.out",
            duration: 0.3,
          });

          tl.to(".think-text", { opacity: 1, y: -20, duration: 0.2 });

          tl.fromTo(
            ".build-text",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.2 },
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
            "-=0.5",
          );

          tl.fromTo(
            ".wipe-text",
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              stagger: 0.35,
              duration: 0.6,
              ease: "power4.inOut",
            },
            "<",
          );
        },

        "(max-width: 767px)": () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
          gsap.set(".video", { clearProps: "all" });
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full bg-white overflow-hidden aspect-video md:aspect-auto pt-20 md:pt-0 md:h-screen"
    >
      {/* Desktop text only */}
      <style>
        {`
          @keyframes bulb-blink {
            0%, 100% { 
              opacity: 1; 
              box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
              transform: scale(1);
            }
            50% { 
              opacity: 0.7; 
              box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
              transform: scale(0.95);
            }
          }
          .bulb-animate {
            animation: bulb-blink 2s infinite ease-in-out;
          }
        `}
      </style>
      <div className="absolute inset-0 z-30 hidden md:block pointer-events-none">
        <h1 className="think-text absolute left-30 top-1/2 -translate-y-1/2 text-[5vw] opacity-0 flex flex-col font-bold">
          {/* <div>T</div>
          <div>H</div>
          <div>I</div>
          <div>N</div>
          <div>K</div> */}
        </h1>

        <h1 className="build-text absolute right-30 top-1/2 -translate-y-1/2 text-[5vw] opacity-0 flex flex-col font-bold">
          {/* <div>B</div>
          <div>U</div>
          <div>I</div>
          <div>L</div>
          <div>D</div> */}
        </h1>
      </div>

      {/* VIDEO */}
      <div className="video-wrap absolute inset-0 flex items-center justify-center">
        <div className="video w-full h-full overflow-hidden bg-black md:w-full md:h-full relative">
          <video
            ref={videoRef}
            className="w-full h-full object-contain md:object-cover"
            src="https://res.cloudinary.com/dxwadodnh/video/upload/v1771154212/output_lyjghb.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* 🔥 Custom Audio Toggle Button */}
          <div className="absolute bottom-6 left-6 z-[9999]">
            <button
              onClick={toggleMute}
              className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full 
              bg-black/50 backdrop-blur-lg border border-white/20 text-white 
              hover:bg-white/10 transition duration-300 group bulb-animate"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <VolumeX size={22} className="group-hover:scale-110 transition-transform" />
              ) : (
                <Volume2 size={22} className="group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop bottom text only */}
      <div className="wipe-text absolute bottom-10 left-0 w-full h-[25vh] hidden md:flex items-center justify-center overflow-hidden z-40">
        <p className="wipe-block sub text-5xl tracking-wide text-black">
          Motion • Vision • Movion
        </p>
      </div>
    </section>
  );
};
