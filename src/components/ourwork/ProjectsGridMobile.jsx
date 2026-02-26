import { useMemo } from "react";

export const ProjectsGridMobile = ({ projects, onSelect, activeFilter }) => {
    const displayProjects = useMemo(() => {
        if (!projects?.length) return [];
        return projects;
    }, [projects]);

    return (
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3 p-2">
            {displayProjects.map((project) => {
                // Determine a CSS aspect ratio based on project properties to give it a Pinterest masonry feel
                let aspectClass = "aspect-[4/3]"; // Default wide/normal
                if (project.orientation === "portrait") {
                    aspectClass = "aspect-[3/4]";
                } else if (project.priority) {
                    aspectClass = "aspect-square"; // Campaigns could be square instead of 2x2 since CSS columns don't easily span 2 columns
                } else {
                    // Add some randomness to the heights to enhance the Pinterest effect if needed
                    // Or just stick to the natural orientation
                    // Here we use the actual aspect classes
                }

                return (
                    <div
                        key={project.id}
                        onClick={() => onSelect(project)}
                        className={`
              project-card group cursor-pointer
              break-inside-avoid
              overflow-hidden rounded-xl
              bg-white relative
              shadow-[0_0_30px_rgba(255,255,255,0.1)]
              transition-all duration-500
              ${project.priority
                                ? "ring-1 ring-yellow-400/50 hover:shadow-yellow-300/40 hover:shadow-2xl"
                                : "hover:ring-1 hover:ring-white/60 hover:shadow-white/40 hover:shadow-xl"
                            }
            `}
                    >
                        {/* Glow Border */}
                        {project.priority && (
                            <div className="glow-border pointer-events-none" />
                        )}

                        <div
                            className={`
                relative w-full overflow-hidden
                ${project.priority ? "ring-2 ring-yellow-400/60" : "ring-1 ring-white/10"}
                ${aspectClass}
              `}
                        >
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
                  bg-linear-to-t from-black/90 via-black/30 to-transparent
                "
                            />

                            {project.priority && (
                                <div className="absolute top-2 left-2 z-20">
                                    <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-yellow-400 text-black shadow-lg uppercase tracking-wider">
                                        Campaign
                                    </span>
                                </div>
                            )}

                            <div className="absolute bottom-3 left-3 text-white z-10 w-[calc(100%-24px)]">
                                <h3 className="font-bold text-sm leading-tight truncate drop-shadow-md">{project.title}</h3>
                                <p className="text-xs opacity-90 truncate drop-shadow-md">{project.company}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
