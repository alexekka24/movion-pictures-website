import { cn } from "../../utils/utils";
import { MasonryLayout } from "../common/MasonryLayout";

const projects = [
  {
    id: 1,
    image: "/assets/images/image1.jpg",
    ratio: "square",
    priority: true,
  },
  { id: 2, image: "/assets/images/image2.jpg", ratio: "portrait" },
  { id: 3, image: "/assets/images/image3.jpg", ratio: "landscape" },
  {
    id: 4,
    image: "/assets/images/image4.jpg",
    ratio: "square",
    priority: true,
  },
  { id: 5, image: "/assets/images/image5.jpg", ratio: "square" },
  {
    id: 6,
    image: "/assets/images/image1.jpg",
    ratio: "square",
    priority: true,
  },
  { id: 7, image: "/assets/images/image2.jpg", ratio: "square" },
  { id: 8, image: "/assets/images/image3.jpg", ratio: "square" },
  {
    id: 9,
    image: "/assets/images/image4.jpg",
    ratio: "square",
    priority: true,
  },
  { id: 10, image: "/assets/images/image5.jpg", ratio: "square" },
];

export const ProjectsSection = ({className}) => {
  return (
    <div className={cn("p-10", className)} >
      <MasonryLayout
        items={projects}
        renderItem={(project) => (
          <div className="rounded-2xl overflow-hidden bg-white/10 border border-white/10">
            <img src={project.image} alt={project.title} className="w-full" />
            <div className="p-3 text-white">{project.title}</div>
          </div>
        )}
      />
    </div>
  );
}
