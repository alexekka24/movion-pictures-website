// OurProjects.jsx
import React from "react";
import Button from "./Button";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import { BentoItem } from "./BentoItem";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const projects = [
  { id: 1, image: "/assets/images/who-we-are/image1.jpg", layout: "featured" },
  { id: 2, image: "/assets/images/who-we-are/image1.jpg", layout: "wide" },
  { id: 3, image: "/assets/images/who-we-are/image1.jpg" }, //auto
  { id: 4, image: "/assets/images/who-we-are/image1.jpg", layout: "tall" },
  { id: 5, image: "/assets/images/who-we-are/image1.jpg", layout: "wide" },
  { id: 6, image: "/assets/images/who-we-are/image1.jpg" }, //auto
  { id: 7, image: "/assets/images/who-we-are/image1.jpg" }, //auto
  { id: 8, image: "/assets/images/who-we-are/image1.jpg", layout: "tall" },
  { id: 9, image: "/assets/images/who-we-are/image1.jpg" }, //add freely
  { id: 10, image: "/assets/images/who-we-are/image1.jpg", layout: "hero" },
];

export const OurProjects = () => {
  return (
    <>
      <section id="projects" className="max-w-360 mx-auto my-20 px-4 lg:px-8 h-100dvh">
        <motion.h1
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          text-5xl md:text-7xl lg:text-8xl
          font-semibold tracking-tight leading-[1.05]
          bg-linear-to-b from-black to-black/60
          bg-clip-text text-transparent
        "
      >
        Previous
        <br />
        Completed Projects
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
          {projects.map((project, index) => (
            <BentoItem
              key={project.id}
              className={resolveLayout(project, index)}
            >
              <img
                src={project.image}
                alt=""
                className="
                  w-full h-full object-cover
                  transition-transform duration-1000 ease-in-out
                  group-hover:scale-110
                "
              />
            </BentoItem>
          ))}
        </div>
      </section>
      <NavLink key="Our Work" to="/ourwork">

      <Button variant="surface_black" size="lg" className="my-10" text="Explore more of our work">
        
        <ArrowRight></ArrowRight>
      </Button>
      </NavLink>
    </>
  );
};

const LAYOUT_PRESETS = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  featured: "col-span-2 row-span-2",
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
