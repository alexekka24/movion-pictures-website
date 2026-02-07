import { HeroSection } from "../components/HeroSection";
import { OurClients } from "../components/OurClients";
import { WhoWeAre } from '../components/WhoWeAre';
import { OurProjects } from "../components/OurProjects";
import { MarqueeComponent } from "../components/MarqueeComponent";
import { MasonryProjects } from "../components/MasonryProjects";
import { ProjectCTA } from "../components/ProjectCTA";

export default function Home() {
  return (
        <div className="min-h-screen">
            {/* Main Section */}
            <main>
                <HeroSection />
                <MarqueeComponent />
                <WhoWeAre />
                <OurProjects />
                <ProjectCTA theme="light" />
                {/* <MasonryProjects /> */}
                {/* <ProjectMilestones /> */}
            </main>
        </div>
    );
};
