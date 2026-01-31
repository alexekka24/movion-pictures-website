import { useState } from "react";
import { HeroProjectsHero } from "../components/OurProjectsHero";
import { FilterTabs } from "../components/FilterTabs";
import { MotoSection } from "../components/MotoSection";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { ProjectDialog } from "../components/ProjectDialog";

// Data
import { PROJECTS } from "../../public/assets/data/PROJECTS";


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
      <HeroProjectsHero />
      <MotoSection />

      <section className="py-20 px-6 bg-black/90 text-white">
        <FilterTabs active={activeFilter} setActive={setActiveFilter} />

        <ProjectsGrid
          projects={filteredProjects}
          onSelect={handleSelectProject}
          activeFilter={activeFilter}
        />
      </section>

      <ProjectDialog
        open={open}
        project={filteredProjects[selectedIndex]}
        onClose={closeModal}
        onNext={handleNext}
        onPrev={handlePrev}
        direction={direction}
        currentIndex={selectedIndex}
        totalCount={filteredProjects.length}
      />
    </>
  );
}
