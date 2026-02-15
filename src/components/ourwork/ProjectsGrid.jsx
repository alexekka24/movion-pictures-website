import { useMemo } from "react";

const COLLAGE_SPANS = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-2",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
];

const BIG_SPAN = "lg:col-span-2 lg:row-span-2";
const NORMAL_SPAN = "lg:col-span-1 lg:row-span-1";

export const ProjectsGrid = ({ projects, onSelect, activeFilter }) => {
  const isAll = activeFilter === "ALL";

  const displayProjects = useMemo(() => {
    if (!projects?.length) return [];
    return projects; // always keep original order
  }, [projects]);

  const spanMap = useMemo(() => {
    const map = {};

    displayProjects.forEach((project, index) => {
      let spanClass = "";

      if (isAll) {
        spanClass = COLLAGE_SPANS[index % COLLAGE_SPANS.length];

        if (project.priority) {
          spanClass = BIG_SPAN;
        }
      } else {
        spanClass = project.priority ? BIG_SPAN : NORMAL_SPAN;
      }

      map[project.id] = spanClass;
    });

    return map;
  }, [displayProjects, isAll]);

  return (
    <div
      className="
        grid gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        auto-rows-[200px]
        sm:auto-rows-[220px]
        lg:auto-rows-[260px]
        grid-flow-dense
      "
    >
      {displayProjects.map((project) => {
        const spanClass = spanMap[project.id];

        return (
          <div
            key={project.id}
            onClick={() => onSelect(project)}
            className={`
              project-card group cursor-pointer
              overflow-hidden rounded-xl
              bg-white relative
              ${spanClass}
              shadow-[0_0_60px_rgba(255,255,255,0.15)]
              transition-all duration-500
              ${
                project.priority
                  ? "ring-2 ring-yellow-400/50 hover:shadow-yellow-300/40 hover:shadow-2xl"
                  : "hover:shadow-2xl"
              }
            `}
          >
            {/* Glow Border */}
            {project.priority && (
              <div className="glow-border pointer-events-none" />
            )}

            <div
              className={`
                absolute inset-0 rounded-xl overflow-hidden
                ${project.priority ? "ring-2 ring-yellow-400/60" : "ring-1 ring-white/10"}
              `}
            >
              <img
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
                  opacity-0 group-hover:opacity-100
                  transition
                "
              />

              {project.priority && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-sm font-semibold rounded-full bg-yellow-400 text-black shadow-lg">
                    Campaign
                  </span>
                </div>
              )}

              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="font-semibold text-2xl">{project.title}</h3>
                <p className="text-xl opacity-80">{project.company}</p>
                <p className="text-lg opacity-80">{project.subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
