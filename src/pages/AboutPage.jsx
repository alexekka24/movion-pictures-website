import { Sparkles, Target, Users, Layers } from "lucide-react";
import { Search, PenTool, Clapperboard, MonitorStop } from "lucide-react";
import { FoundersSection } from "../components/FoundersSection";
import { HeroProjectsHero } from "../components/OurProjectsHero";
import { MotoSection } from "../components/MotoSection";

export const AboutPage = () => {
  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <HeroProjectsHero
        title="Where digital feels human"
        subtitle="A creative studio focused on clarity, craft, and meaningful impact."
      />

      {/* ================= MOTO ================= */}
      <MotoSection moto="We build digital experiences that feel human."/>

      {/* ================= PROCESS ================= */}
      <section className="py-32 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-6xl font-bold mb-20">How We Work</h2>

          <div className="grid md:grid-cols-4 gap-12">
            <ProcessStep
              icon={<Search size={50} />}
              step="01"
              title="Discover"
              text="Understanding goals, users, and constraints."
            />
            <ProcessStep
              icon={<PenTool size={50} />}
              step="02"
              title="Design"
              text="Exploring ideas and defining structure."
            />
            <ProcessStep
              icon={<Clapperboard size={50} />}
              step="03"
              title="Build"
              text="Executing with precision and performance."
            />
            <ProcessStep
              icon={<MonitorStop size={50} />}
              step="04"
              title="Refine"
              text="Iterating, testing, and improving."
            />
          </div>
        </div>
      </section>

      {/* ================= FOUNDERS ================= */}
      <FoundersSection />

      {/* ================= CTA ================= */}
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
    </main>
  );
};

function ProcessStep({ icon, title, text }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 justify-center">
        <div className="w-30 h-30 flex items-center justify-center rounded-full bg-white shadow">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

function AboutCard({ icon, title, text }) {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-neutral-100">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function AboutItem({ title, text }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

/* ================= DATA ================= */

function FounderBlock({ founder, reverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-16 items-center`}
    >
      <div className="md:w-1/2">
        <img
          src={founder.image}
          alt={founder.name}
          className="w-full h-130 object-cover rounded-3xl"
        />
      </div>

      <div className="md:w-1/2 space-y-6">
        <p className="text-sm uppercase tracking-widest text-white/50">
          {founder.role}
        </p>
        <h3 className="text-4xl font-bold uppercase">{founder.name}</h3>
        <p className="text-lg text-white/80 leading-relaxed">
          {founder.description}
        </p>
      </div>
    </div>
  );
}

const FOUNDERS = [
  {
    name: "Dikshant Banthia",
    role: "Cinematographer, Colorist & Editor",
    description:
      "Introducing Dikshant, a passionate aspiring filmmaker driven by a profound love for the art of visual storytelling, encompassing cinematography, editing, and color grading. With a creative mindset and an unwavering work ethic, Dikshant is positioned to make a meaningful impact on the landscape of filmmaking. He embraces the realm of dreams and channels his vision through the lens, consistently striving to create cinematic magic that resonates with audiences on a profound level.",
    image: "/src/assets/images/founders/founder1.JPG",
  },
  {
    name: "AMIT KALA",
    role: "Creative Producer, Writer & Actor",
    description:
      "Meet Amit Kala, a soulful actor and a creative producer who values the enduring magic of dreams. Collaborating with a talented team, he believes in turning dreams into workable realities. Amit's short films and music videos have travelled the world, collecting awards along the way. His work has garnered acclaim at the prestigious Dada Saheb Phalke Film Festival, in addition to being streamed on prestigious OTT platforms, and gaining a niche following among audiences.",
    image: "/src/assets/images/founders/founder2.JPG",
  },
  {
    name: "Aaron Justine",
    role: "Cinematographer, Director & Editor",
    description:
      "With a meticulous eye for detail and a passion for creativity, Aaron approaches every frame with careful consideration. Whether behind the camera or in the editing room, he envisions the final product, ensuring a seamless and captivating storytelling experience. Committed to pushing boundaries while maintaining the highest standards of quality, he brings a blend of precision and creativity to every project at Midnight Productions.",
    image: "/src/assets/images/founders/founder3.JPG",
  },
];

const VALUES = [
  "Clarity over clutter",
  "Function before flair",
  "People before pixels",
  "Quality over quantity",
  "Thoughtful by default",
  "Design with intent",
];

const PROCESS = [
  {
    title: "Discover",
    description: "Understand goals, users, and challenges.",
  },
  {
    title: "Design",
    description: "Explore ideas and define structure.",
  },
  {
    title: "Build",
    description: "Execute with precision and performance in mind.",
  },
  {
    title: "Refine",
    description: "Test, iterate, and improve continuously.",
  },
];
