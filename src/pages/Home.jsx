import { HeroSection } from "../components/HeroSection";
import { OurClients } from "../components/ourClients";
import { WhoWeAre } from '../components/WhoWeAre';
import { OurProjects } from "../components/OurProjects";

export default function Home() {
  return (
        <div className="min-h-screen">
            {/* Main Section */}
            <main>
                <HeroSection />
                <OurClients />
                <WhoWeAre />
                <OurProjects />
                {/* <ProjectMilestones /> */}
            </main>
        </div>
    );
};
