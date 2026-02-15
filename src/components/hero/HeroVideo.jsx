import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Volume2, VolumeX } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const HeroVideo = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const volumeRef = useRef(null);

  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.6);
  const [openVolume, setOpenVolume] = useState(false);

  // set initial volume
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, []);

  // click outside closes volume panel
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (volumeRef.current && !volumeRef.current.contains(e.target)) {
        setOpenVolume(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMute = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);

    if (!video.muted) {
      try {
        await video.play();
      } catch (err) {
        console.log("Play blocked:", err);
      }
    }
  };

  const handleVolume = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = Number(e.target.value);
    video.volume = newVolume;

    if (newVolume === 0) {
      video.muted = true;
      setMuted(true);
    } else {
      video.muted = false;
      setMuted(false);
    }

    setVolume(newVolume);
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
      <div className="absolute inset-0 z-30 hidden md:block pointer-events-none">
        <h1 className="think-text absolute left-30 top-1/2 -translate-y-1/2 text-[5vw] opacity-0 flex flex-col font-bold">
          <div>T</div>
          <div>H</div>
          <div>I</div>
          <div>N</div>
          <div>K</div>
        </h1>

        <h1 className="build-text absolute right-30 top-1/2 -translate-y-1/2 text-[5vw] opacity-0 flex flex-col font-bold">
          <div>B</div>
          <div>U</div>
          <div>I</div>
          <div>L</div>
          <div>D</div>
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

          {/* 🔥 Custom Audio Controls */}
          <div ref={volumeRef} className="absolute bottom-6 left-6 z-[9999]">
            {/* Button */}
            <button
              onClick={() => setOpenVolume((p) => !p)}
              className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full 
              bg-black/50 backdrop-blur-lg border border-white/20 text-white 
              hover:bg-black/70 transition duration-300"
            >
              {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
            </button>

            {/* Slider Popup (absolute) */}
            {openVolume && (
              <div
                className="absolute left-14 top-1/2 -translate-y-1/2 
                  w-44 px-4 py-3 rounded-xl bg-black/60 backdrop-blur-xl 
                  border border-white/20 shadow-xl flex flex-col gap-2"
              >
                <p className="text-xs text-white/80 font-medium tracking-wide">
                  Volume: {Math.round(volume * 100)}%
                </p>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolume}
                  className="w-full cursor-pointer accent-white"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop bottom text only */}
      <div className="wipe-text absolute bottom-10 left-0 w-full h-[25vh] hidden md:flex items-center justify-center overflow-hidden z-40">
        <p className="wipe-block sub text-7xl tracking-wide text-black">
          Design. Code. Ship.
        </p>
      </div>
    </section>
  );
};
