import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { InstagramEmbed } from "./InstagramEmbed";
// import { PROJECTS } from "../../public/data/PROJECTS";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.2 },
  },
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    transition: { duration: 0.25 },
  }),
};

export const ProjectDialog = ({
  project,
  open,
  onClose,
  onNext,
  onPrev,
  direction = 1,
  currentIndex,
  totalCount,
}) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Reset video when project changes
  useEffect(() => {
    setActiveVideoIndex(0);
  }, [project?.id]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open || !project) return null;

  // const videos = project?.videos ?? [];
  // const activeVideo = project.videos[activeVideoIndex];
  const videos = Array.isArray(project?.videos) ? project.videos : [];
  const activeVideo = videos[activeVideoIndex] ?? videos[0];

  if (!videos.length) return null;

  return (
    <AnimatePresence>
      {open && project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-10 bg-black/90 backdrop-blur-lg"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Modal Wrapper */}
          <motion.div
            className="fixed inset-0 z-20 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <motion.div
              className="relative w-[90%] h-[90%] rounded-3xl overflow-hidden flex flex-col md:flex-row z-30"
              drag
              dragDirectionLock
              dragElastic={0.18}
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 140 || info.velocity.y > 700) onClose();
                if (info.offset.x < -120 || info.velocity.x < -700) onNext();
                if (info.offset.x > 120 || info.velocity.x > 700) onPrev();
              }}
            >
              {/* Project progress */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 text-white text-sm bg-black/60 px-4 py-1 rounded-full">
                {currentIndex + 1} / {totalCount}
              </div>
              {/* Desktop arrows */}
              <button
                onClick={onPrev}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-white/20 text-white p-3 rounded-full cursor-pointer"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={onNext}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-white/20 text-white p-3 rounded-full cursor-pointer"
              >
                <ChevronRight />
              </button>

              {/* Sliding content */}
              <AnimatePresence custom={direction} mode="wait">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 lg:hidden">
                  <div className="w-10 h-1.5 rounded-full bg-white/40" />
                </div>
                <motion.div
                  key={project.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col lg:flex-row w-full h-full"
                  drag
                  dragDirectionLock
                  dragElastic={0.18}
                  dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.y > 140 || info.velocity.y > 700) onClose();
                    if (info.offset.x < -120 || info.velocity.x < -700)
                      onNext();
                    if (info.offset.x > 120 || info.velocity.x > 700) onPrev();
                  }}
                >
                  {/* Left - Video */}
                  <div
                    onPointerDown={() => setIsDragging(true)}
                    onPointerUp={() => setIsDragging(false)}
                    className="lg:w-[70%] lg:h-full h-[60%] bg-black overflow-y-auto flex justify-center"
                  >
                    <div className="absolute inset-0 z-40 pointer-events-none">
                      <motion.div
                        className="absolute inset-0 pointer-events-auto"
                        drag
                        dragDirectionLock
                        dragElastic={0.15}
                        dragConstraints={{
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                        }}
                        onDragEnd={(_, info) => {
                          if (info.offset.y > 120 || info.velocity.y > 700)
                            onClose();
                          if (info.offset.x < -120 || info.velocity.x < -700)
                            onNext();
                          if (info.offset.x > 120 || info.velocity.x > 700)
                            onPrev();
                        }}
                      />
                    </div>

                    {activeVideo.videoType === "youtube" && (
                      <iframe
                        src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&mute=1&controls=1&playsinline=1`}
                        className="w-full h-full object-cover z-40"
                        allowFullScreen
                      />
                    )}
                    {activeVideo.videoType === "instagram" && (
                      <div className="w-full max-w-105 h-full py-6 z-40">
                        <InstagramEmbed
                          // className="object-contain"
                          url={activeVideo.videoId}
                        />
                      </div>
                    )}
                  </div>

                  {/* Right – Content + Video Switcher */}
                  <div className="lg:w-[30%] lg:h-full w-full h-[40%] bg-black/70 backdrop-blur-xl text-white p-6 overflow-y-auto">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold">{project.title}</h2>
                        <p className="text-gray-300">{project.company}</p>
                      </div>
                      <button
                        onClick={onClose}
                        // className="hidden left-4 top-1/2 -translate-y-1/2 z-900 bg-black hover:bg-white/20 text-white p-3 rounded-full cursor-pointer"
                        className="hidden md:flex absolute top-6 right-6 z-80 bg-black/40 hover:bg-black/60 p-3 rounded-full cursor-pointer"
                      >
                        <X />
                      </button>
                    </div>

                    <p className="text-gray-200 mb-6">{project.description}</p>

                    {/* Video Selector */}
                    <div className="space-y-3">
                      {project.videos.map((video, idx) => (
                        <button
                          key={video.id}
                          onClick={() => setActiveVideoIndex(idx)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition z-80
                                      ${
                                        idx === activeVideoIndex
                                          ? "bg-white/20"
                                          : "bg-white/5 hover:bg-white/10"
                                      }
                                    `}
                        >
                          <Play size={16} />
                          <span className="text-sm">{video.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
