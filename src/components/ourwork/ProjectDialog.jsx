import { useEffect, useState } from "react";
import { cn } from "../../utils/utils";
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
      return () => unlockScroll();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      {open && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-30 bg-black/70 backdrop-blur-lg shadow-2xl shadow-amber-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}

      {/* Modal */}
      {open && (
        <motion.div
          key="modal"
          className="fixed inset-0 z-40 flex items-center justify-center "
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
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
                  <ProjectSlide project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectSlide = ({ project }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const isUpcoming = project.title?.toLowerCase() === "upcoming";
  const video = project.videos[activeVideoIndex];

  return (
    <div className="flex flex-col lg:flex-row w-full h-full text-white">
      {/* Left: Video or Stage View */}
      <div
        className="lg:w-[70%] h-[55%] lg:h-full bg-black flex justify-center items-center overflow-hidden relative"
        onTouchMove={(e) => e.stopPropagation()}
      >
        {isUpcoming ? (
          <div className="flex flex-col items-center justify-center p-8 text-center space-y-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={project.thumbnail}
                alt="Coming Soon"
                className="w-64 md:w-80 h-auto rounded-3xl opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white/90">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-amber-400 font-medium tracking-[0.2em] uppercase text-xs md:text-sm">
                Production Status
              </h4>
              <p className="text-3xl md:text-5xl font-bold tracking-tight bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent">
                {project.subtitle?.replace("Stage: ", "") || "In Development"}
              </p>
            </div>
          </div>
        ) : (
          <>
            {video.videoType === "youtube" && (
              <iframe
                key={video.videoId}
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&playsinline=1&controls=1&rel=0`}
                className="w-full h-full max-h-full"
                allowFullScreen
              />
            )}

            {video.videoType === "instagram" && (
              <div key={video.videoId} className="w-full h-full overflow-y-auto hide-scrollbar flex flex-col items-center justify-start py-4 lg:justify-center">
                <InstagramEmbed url={video.videoId} />
              </div>
            )}
            {video.videoType === "linkedin" && (
              <iframe
                key={video.videoId}
                src={`https://www.linkedin.com/embed/feed/update/${video.videoId}?collapsed=1`}
                className="w-full h-full overflow-y-auto hide-scrollbar flex flex-col items-center justify-start py-4 lg:justify-center"
              />
            )}
          </>
        )}
      </div>

      {/* Right: Content */}
      <div className="lg:w-[30%] h-[45%] lg:h-full bg-black backdrop-blur-xl p-4 md:p-8 overflow-y-auto hide-scrollbar flex flex-col items-center justify-center text-center">
        <div className="flex-shrink-0 mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h2>
          <p className="text-gray-400 text-sm md:text-base mb-2">
            {isUpcoming ? "Movion Pictures Original" : project.company}
          </p>
          <p className="text-gray-200 text-sm md:text-xs xl:text-sm line-clamp-3 md:line-clamp-4 leading-relaxed">
            {project.description}
          </p>
        </div>

        {!isUpcoming && project.videos.length > 0 && (
          <div
            className="flex-shrink-0 w-full grid gap-3 md:gap-4 justify-items-center"
            style={{
              gridTemplateColumns: `repeat(${project.videos.length >= 6 ? 3 : project.videos.length === 1 ? 1 : 2
                }, 1fr)`,
              alignContent: "start"
            }}
          >
            {project.videos.map((v, idx) => {
              const isSingle = project.videos.length === 1;
              return (
                <button
                  key={v.videoId}
                  onClick={() => setActiveVideoIndex(idx)}
                  className={cn(
                    "flex items-center justify-center p-1.5 rounded-lg transition-all",
                    isSingle ? "w-fit" : "w-fit",
                    idx === activeVideoIndex
                      ? "bg-white/20 ring-1 ring-white/30 shadow-lg scale-105"
                      : "bg-white/5 hover:bg-white/10 hover:scale-102"
                  )}
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src={v.thumbnail}
                    className={cn(
                      "w-full h-auto object-cover rounded shadow-md",
                      isSingle ? "max-w-[200px] md:max-w-[260px]" : "max-w-[100px] md:max-w-[120px]"
                    )}
                    alt={`${project.title} Video Thumbnail ${idx + 1}`}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
