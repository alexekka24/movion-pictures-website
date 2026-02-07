// MasonryProjects.jsx
import React from "react";
import { BentoItem } from "./BentoItem";
import { motion } from "framer-motion";

const RATIO_MAP = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

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

export const MasonryProjects = () => {
  const RATIO_MAP = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
      {projects.map((project) => {
        const ratioClass = project.priority
          ? "aspect-[2/3]"
          : RATIO_MAP[project.ratio] || "aspect-square";

        return (
          <div key={project.id} className="mb-8 break-inside-avoid">
            <BentoItem>
              <img
                src={project.image}
                alt=""
                className={`w-full object-cover ${ratioClass}`}
              />
            </BentoItem>
          </div>
        );
      })}
    </div>
  );
};

