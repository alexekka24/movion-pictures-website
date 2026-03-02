import { useState } from "react";
import { motion } from "framer-motion";
import { BentoItem } from "../BentoItem";
import { cn } from "../../utils/utils";
import { SELECTEDPROJECTS } from "../../../public/assets/data/SELECTEDPROJECTS";
import { ProjectDialog } from "../ourwork/ProjectDialog";

const bentoProjects = SELECTEDPROJECTS.slice(0, 10);

export const OurProjects = ({ className, content }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpen = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <>
      <section
        id="projects"
        className={cn(
          "max-w-360 mx-auto my-20 px-4 lg:px-8 h-200dvh",
          className,
        )}
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
          text-5xl md:text-6xl lg:text-7xl
          font-semibold tracking-tight leading-[1.05]
          bg-linear-to-b from-black to-black/60
          bg-clip-text text-transparent
        "
        >
          {content.title}
        </motion.h1>

        <div
          className="
            grid gap-8
            grid-cols-5 auto-rows-fr
            grid-flow-dense
            h-240
            max-lg:auto-rows-[180px]
            max-md:flex max-md:flex-col max-md:h-auto
            my-10
          "
        >
          {bentoProjects.map((project, index) => (
            <BentoItem
              key={`${project.id}-${index}`}
              className={resolveLayout(project, index) + " p-0!"}
              onClick={() => handleOpen(index)}
            >
              <img
                loading="lazy"
                decoding="async"
                src={project.thumbnail}
                alt={project.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-1000 ease-in-out
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-linear-to-t from-black/90 via-black/30 to-transparent
                "
              />

              <div className="absolute bottom-4 left-4 text-white z-10 w-[calc(100%-32px)]">
                <h3 className="font-bold text-lg leading-tight truncate drop-shadow-md">
                  {project.title}
                </h3>
                <p className="text-sm opacity-90 truncate drop-shadow-md">
                  {project.company || "Work"}
                </p>
              </div>
            </BentoItem>
          ))}
        </div>
      </section>

      <ProjectDialog
        open={open}
        projects={bentoProjects}
        onClose={() => setOpen(false)}
        startIndex={selectedIndex}
      />
    </>
  );
};

const LAYOUT_PRESETS = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  featured: "col-span-3 row-span-2",
  hero: "col-span-5 row-span-2",
};

function resolveLayout(project, index) {
  // Explicit layout always wins
  if (project.layout && LAYOUT_PRESETS[project.layout]) {
    return LAYOUT_PRESETS[project.layout];
  }

  // Intelligent auto pattern
  if (index === 0) return LAYOUT_PRESETS.featured;
  if (index % 6 === 0) return LAYOUT_PRESETS.wide;
  if (index % 5 === 0) return LAYOUT_PRESETS.tall;

  return LAYOUT_PRESETS.normal;
}
