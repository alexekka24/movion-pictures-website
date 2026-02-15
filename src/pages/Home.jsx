import { HeroSection } from "../components/hero/HeroSection";
import { WhoWeAre } from '../components/hero/WhoWeAre';
import { OurProjects } from "../components/hero/OurProjects";
import { MarqueeComponent } from "../components/hero/MarqueeComponent";
import { ProjectsSection } from "../components/hero/ProjectsSection";
import { ProjectCTA } from "../components/common/ProjectCTA";

export default function Home() {
  return (
        <div className="min-h-screen">
            {/* Main Section */}
            <main>
                <HeroSection />
                <MarqueeComponent />
                <WhoWeAre />
                <ProjectsSection className="lg:hidden" />
                <OurProjects className="hidden lg:block"/>
                <ProjectCTA theme="light" />
                {/* <MasonryProjects /> */}
                {/* <ProjectMilestones /> */}
            </main>
        </div>
    );
};
