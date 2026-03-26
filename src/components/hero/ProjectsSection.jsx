import { useState } from "react";
import { cn } from "../../utils/utils";
import { SELECTEDPROJECTS } from "../../../public/assets/data/SELECTEDPROJECTS";
import { ProjectDialog } from "../ourwork/ProjectDialog";
import { motion } from "framer-motion";

const masonryProjects = [
  SELECTEDPROJECTS.find(p => Number(p.id) === 2),  // Dot & Key Facewash
  SELECTEDPROJECTS.find(p => Number(p.id) === 3),  // Dot & Key Moisturizer
  SELECTEDPROJECTS.find(p => Number(p.id) === 1),  // JM Financial
  SELECTEDPROJECTS.find(p => Number(p.id) === 5),  // AQDA
  SELECTEDPROJECTS.find(p => Number(p.id) === 4),  // AT Villas
  SELECTEDPROJECTS.find(p => Number(p.id) === 7),  // Sarla Aviation
  SELECTEDPROJECTS.find(p => Number(p.id) === 6),  // Turtle & Snail
  SELECTEDPROJECTS.find(p => Number(p.id) === 8),  // AI University (Campus Fund)
  SELECTEDPROJECTS.find(p => Number(p.id) === 9),  // Good Bad Ungli
  SELECTEDPROJECTS.find(p => Number(p.id) === 10), // Polo Vista
  SELECTEDPROJECTS.find(p => Number(p.id) === 11), // Upcoming
].filter(Boolean);

export const ProjectsSection = ({ className, content }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpen = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <div className={cn("p-4 md:p-10", className)}>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          text-5xl md:text-6xl lg:text-7xl
          font-semibold tracking-tight leading-[1.05]
          bg-linear-to-b from-black to-black/60
          bg-clip-text text-transparent
          mb-10
        "
      >
        {content.title}
      </motion.h1>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 lg:gap-6">
        {masonryProjects.map((project, index) => {
          // Map project to grid position based on ID
          let gridClass = "";
          let aspectClass = "";

          switch (Number(project.id)) {
            case 2: // Dot & Key Facewash
              gridClass = "col-span-3 md:col-span-3";
              aspectClass = "aspect-[21/9] md:aspect-[2.4/1]";
              break;
            case 3: // Dot & Key Moisturizer
              gridClass = "col-span-1";
              aspectClass = "aspect-[3/2] md:aspect-[4/3]";
              break;
            case 1: // JM Financial
              gridClass = "col-span-2 md:col-span-2";
              aspectClass = "aspect-[2/1] md:aspect-[2/1]";
              break;
            case 5: // AQDA
              gridClass = "col-span-2 md:col-span-2";
              aspectClass = "aspect-[4/3] md:aspect-[2.4/1]";
              break;
            case 4: // AT Villas
              gridClass = "col-span-1 md:row-span-2";
              aspectClass = "aspect-[3/4] h-full";
              break;
            case 7: // Sarla Aviation
              gridClass = "col-span-1 md:col-span-2";
              aspectClass = "aspect-square md:aspect-[2.4/1]";
              break;
            case 6: // Turtle & Snail
              gridClass = "col-span-2 md:row-span-2";
              // aspectClass = "aspect-[  3/4] h-full";
              aspectClass = "aspect-[4/3] md:aspect-[2.4/1]";
              break;
            case 8: // Good Bad Ungli
              gridClass = "col-span-2 md:col-span-2";
              aspectClass = "aspect-[16/9] md:aspect-[2.1/1]";
              break;
            case 9: // AI University (Campus Fund)
              gridClass = "col-span-1 md:col-span-2";
              aspectClass = "aspect-[4/3] md:aspect-[2.1/1]";
              break;

            case 10: // Polo Vista
              gridClass = "col-span-3 md:col-span-3";
              aspectClass = "aspect-[21/9] md:aspect-[2.4/1]";
              break;
            case 11: // Upcoming
              gridClass = "col-span-3 md:col-span-3";
              aspectClass = "aspect-[21/9] md:aspect-[2.4/1]";
              break;
            default:
              gridClass = "col-span-1";
              aspectClass = "aspect-video";
          }

          return (
            <div
              key={`${project.id}-${index}`}
              onClick={() => handleOpen(index)}
              className={cn(
                "project-card group cursor-pointer overflow-hidden rounded-2xl bg-white/5 relative",
                "shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10",
                "transition-all duration-500 hover:border-white/20",
                gridClass
              )}
            >
              <div className={cn("relative w-full overflow-hidden", aspectClass)}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={project.thumbnail}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t from-black/90 via-black/20 to-transparent
                    opacity-60 group-hover:opacity-80 transition-opacity duration-500
                  "
                />

                <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                  <h3 className="font-bold text-sm md:text-base leading-tight drop-shadow-lg mb-0.5">
                    {project.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-white/80 font-medium drop-shadow-md">
                    {project.subtitle || "Work"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ProjectDialog
        open={open}
        projects={masonryProjects}
        onClose={() => setOpen(false)}
        startIndex={selectedIndex}
      />
    </div>
  );
};
