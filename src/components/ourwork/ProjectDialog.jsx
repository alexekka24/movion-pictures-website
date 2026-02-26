import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  EffectCreative,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { InstagramEmbed } from "./InstagramEmbed";
import { lockScroll, unlockScroll } from "../../utils/utils";

export const ProjectDialog = ({ projects, open, onClose, startIndex = 0 }) => {

  useEffect(() => {
    if (open) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [open]);

  if (!open) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-lg shadow-2xl shadow-amber-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="fixed inset-0 z-40 flex items-center justify-center "
        initial={{ scale: 0.96, opacity: 0, }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0, }}
      >
        <div className="relative w-[90%] h-[90%] rounded-3xl overflow-hidden bg-black">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-black/80 md:bg-black/50 hover:bg-white/20 text-white p-4 md:p-3 scale-110 md:scale-100 rounded-full cursor-pointer"
          >
            <X />
          </button>

          {/* Swiper */}
          <Swiper
            grabCursor={true}
            effect={"creative"}
            loop={true}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[Navigation, Keyboard, Pagination, EffectCreative]}
            initialSlide={startIndex}
            slidesPerView={1}
            navigation
            keyboard={{ enabled: true }}
            className="w-full h-full mySwiper"
            pagination={{
              type: "fraction",
              renderFraction: (currentClass, totalClass) => {
                return `
                  <span class="${currentClass}"></span>
                  <span class="divider"> / </span>
                  <span class="${totalClass}"></span>
                `;
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectSlide project={project} video={project.videos} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectSlide = ({ project }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const video = project.videos[activeVideoIndex];

  return (
    <div className="flex flex-col lg:flex-row w-full h-full text-white">
      {/* Left: Video */}
      <div className="lg:w-[70%] h-[55%] lg:h-full bg-black flex justify-center items-center overflow-hidden relative" onTouchMove={(e) => e.stopPropagation()}>
        {video.videoType === "youtube" && (
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0`}
            className="w-full h-full max-h-full"
            allowFullScreen
          />
        )}

        {video.videoType === "instagram" && (
          <div className="scale-[0.85] sm:scale-100 flex items-center justify-center h-full w-full">
            <InstagramEmbed url={video.videoId} />
          </div>
        )}
      </div>

      {/* Right: Content */}
      <div className="lg:w-[30%] h-[45%] lg:h-full bg-black backdrop-blur-xl p-4 md:p-8 overflow-y-auto flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h2>
        <p className="text-gray-400 text-sm md:text-base mb-2">{project.company}</p>
        <p className="text-gray-200 text-sm md:text-base mb-4 line-clamp-3 md:line-clamp-none leading-relaxed text-center">{project.description}</p>

        {/* <div className="space-y-3 grid grid-cols-2"> */}
        <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] w-full mt-auto">
          {project.videos.map((v, idx) => (
            <button
              key={v.videoId}
              onClick={() => setActiveVideoIndex(idx)}
              className={`w-full flex gap-3 p-3 rounded-lg
                ${idx === activeVideoIndex
                  ? "bg-white/20"
                  : "bg-white/5 hover:bg-white/10"
                }`}
            >
              {/* <Play size={16} /> */}
              <img loading="lazy" decoding="async" src={v.thumbnail} className="h-25" />
              {/* {v.label} */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
