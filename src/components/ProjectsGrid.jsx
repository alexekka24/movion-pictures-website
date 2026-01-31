

const COLLAGE_SPANS = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-2",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
];

const STRUCTURED_SPANS = [
  "lg:col-span-2 lg:row-span-2", // priority
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
];

export const ProjectsGrid = ({ projects, onSelect, activeFilter }) => {
  const isAll = activeFilter === "ALL";

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  projects = shuffleArray(projects);

  return (
    <div
      className="
      grid gap-6
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      lg:auto-rows-[260px]
    "
    >
      {projects.map((project, index) => {
        const spanClass = isAll
          ? COLLAGE_SPANS[index % COLLAGE_SPANS.length]
          : project.priority
          ? STRUCTURED_SPANS[0]
          : STRUCTURED_SPANS[1];

        return (
          <div
            key={project.id}
            onClick={() => onSelect(project)}
            className={`
              group cursor-pointer
              overflow-hidden rounded-xl
              bg-black
              relative
              ${spanClass}
              shadow-2xl/40
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

            {/* Overlay */}
            <div
              className="
              absolute inset-0
              bg-linear-to-t from-black/90 via-black/10 to-transparent
              opacity-0 group-hover:opacity-100
              transition
            "
            />

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold text-2xl">{project.title}</h3>
              <p className="text-xl opacity-80">{project.company}</p>
              <p className="text-lg opacity-80">{project.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
