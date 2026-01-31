import { useState } from "react";
import { HeroProjectsHero } from "../components/OurProjectsHero";
import { FilterTabs } from "../components/FilterTabs";
import { MotoSection } from "../components/MotoSection";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { ProjectDialog } from "../components/ProjectDialog";

// Data
import { PROJECTS } from "../../public/assets/data/PROJECTS";
import { MarqueeComponent } from "../components/MarqueeComponent";
import GravitySection from "../components/GravitySection";


export default function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.trim() === activeFilter.trim());

  const handleSelectProject = (project) => {
    const index = filteredProjects.findIndex(p => p.id === project.id);
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleNext = () => {
    setDirection(1);
    setSelectedIndex((i) => (i + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setSelectedIndex((i) =>
      (i - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <HeroProjectsHero /> */}
      <GravitySection />
      <div className="h-screen"></div>
      <MarqueeComponent />
      {/* <MotoSection /> */}

      <section className="py-20 px-6 bg-black">
        <FilterTabs active={activeFilter} setActive={setActiveFilter} />

        <ProjectsGrid
          projects={filteredProjects}
          onSelect={handleSelectProject}
          activeFilter={activeFilter}
        />
      </section>

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

      <section className="py-32 bg-white text-black text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s build something meaningful.
        </h2>
        <a
          href="/contact"
          className="inline-block px-8 py-4 rounded-full bg-green-700 text-white font-medium hover:scale-105 transition cursor-pointer"
        >
          Start a Conversation
        </a>
      </section>
    </>
  );
}
