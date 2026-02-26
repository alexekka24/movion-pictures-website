import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectsGrid } from "./ourwork/ProjectsGrid";
import { ProjectsGridMobile } from "./ourwork/ProjectsGridMobile";
import { PROJECTS } from "../../public/assets/data/PROJECTS";
import { FilterTabs } from "./ourwork/FilterTabs";
import { ProjectDialog } from "./ourwork/ProjectDialog";
import { ProjectCTA } from "./common/ProjectCTA";

gsap.registerPlugin(ScrollTrigger);

export default function GravitySection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const [activeFilter, setActiveFilter] = useState("ALL");
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const filteredProjects =
    activeFilter === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.trim() === activeFilter.trim());

  const handleSelectProject = (project) => {
    const index = filteredProjects.findIndex((p) => p.id === project.id);
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleNext = () => {
    setDirection(1);
    setSelectedIndex((i) => (i + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setSelectedIndex(
      (i) => (i - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  const closeModal = () => setOpen(false);

  // initial reveal animation (only once)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".reveal", { opacity: 0, y: 50 });

      gsap.to(".reveal", {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // animate grid on filter change
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".project-card");

    gsap.killTweensOf(cards);

    gsap.set(cards, { opacity: 0, y: 25 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power3.out",
      stagger: 0.04,
    });
  }, [activeFilter]);


  // smooth exit + change filter
  const handleFilterChange = (newFilter) => {
    if (newFilter === activeFilter) return;

    // quick micro fade on whole grid
    if (gridRef.current) {
      gsap.killTweensOf(gridRef.current);

      gsap.fromTo(
        gridRef.current,
        { opacity: 0.6, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
        }
      );
    }

    setActiveFilter(newFilter);
  };


  return (
    <div ref={sectionRef} className="w-full bg-black text-white">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-12 text-center">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
            Selected Work
          </p>

          <h2 className="reveal text-4xl md:text-6xl font-founder tracking-tight">
            Projects that tell stories.
          </h2>

          <p className="reveal mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            A curated collection of campaigns, films, and creative work crafted
            with detail and intent.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal mb-12 flex justify-center">
          <FilterTabs active={activeFilter} setActive={handleFilterChange} />
        </div>

        {/* Grid */}
        <div ref={gridRef}>
          <div className="hidden md:block">
            <ProjectsGrid
              projects={filteredProjects}
              onSelect={handleSelectProject}
              activeFilter={activeFilter}
            />
          </div>
          <div className="block md:hidden">
            <ProjectsGridMobile
              projects={filteredProjects}
              onSelect={handleSelectProject}
              activeFilter={activeFilter}
            />
          </div>
        </div>
      </section>

      <ProjectCTA />

      <ProjectDialog
        open={open}
        projects={filteredProjects}
        onClose={closeModal}
        onNext={handleNext}
        onPrev={handlePrev}
        direction={direction}
        currentIndex={selectedIndex}
        startIndex={selectedIndex}
        totalCount={filteredProjects.length}
      />
    </div>
  );
}
