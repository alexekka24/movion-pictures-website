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

export const ProjectDialog = ({ projects, open, onClose, startIndex = 0 }) => {
  
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // prevent background scroll
      document.body.style.touchAction = "none"; // optional, prevents mobile overscroll
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
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
        initial={{ scale: 0.96, opacity: 0,}}
        animate={{ scale: 1, opacity: 1}}
        exit={{ scale: 0.96, opacity: 0,}}
      >
        <div className="relative w-[90%] h-[90%] rounded-3xl overflow-hidden bg-black">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-white/20 text-white p-3 rounded-full cursor-pointer"
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
      <div className="lg:w-[70%] h-[60%] lg:h-full bg-black flex justify-center overflow-hidden relative" onTouchMove={(e) => e.stopPropagation()}>
        {video.videoType === "youtube" && (
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&playsinline=1`}
            className="w-full h-full"
            allowFullScreen
          />
        )}

        {video.videoType === "instagram" && (
          <InstagramEmbed url={video.videoId} />
        )}
      </div>

      {/* Right: Content */}
      <div className="lg:w-[30%] h-[40%] lg:h-full bg-black backdrop-blur-xl p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-gray-300">{project.company}</p>
        <p className="text-gray-200 mb-6">{project.description}</p>

        <div className="space-y-3">
          {project.videos.map((v, idx) => (
            <button
              key={v.videoId}
              onClick={() => setActiveVideoIndex(idx)}
              className={`w-full flex gap-3 p-3 rounded-lg
                ${
                  idx === activeVideoIndex
                    ? "bg-white/20"
                    : "bg-white/5 hover:bg-white/10"
                }`}
            >
              <Play size={16} />
              {v.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
