import { HeroSection } from "../components/hero/HeroSection";
import { WhoWeAre } from '../components/hero/WhoWeAre';
import { OurProjects } from "../components/hero/OurProjects";
import { MarqueeComponent } from "../components/hero/MarqueeComponent";
import { ProjectsSection } from "../components/hero/ProjectsSection";
import { ProjectCTA } from "../components/common/ProjectCTA";
import { HOMEPAGECONTENT } from "../../public/assets/data/pageData/HOMEPAGECONTENT";

export default function Home() {
  return (
        <div className="min-h-screen">
            {/* Main Section */}
            <main>
                <HeroSection />
                <MarqueeComponent content={HOMEPAGECONTENT.ourClients} />
                <WhoWeAre content={HOMEPAGECONTENT.ourWork} />
                <ProjectsSection content={HOMEPAGECONTENT.previousProjects} className="lg:hidden" />
                <OurProjects content={HOMEPAGECONTENT.previousProjects}  className="hidden lg:block"/>
                <ProjectCTA theme="light" />
                {/* <MasonryProjects /> */}
                {/* <ProjectMilestones /> */}
            </main>
        </div>
    );
};
