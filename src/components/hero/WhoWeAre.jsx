import { useRef } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const SERVICES = [
  {
    preTitle: "What we do",
    title: "Cinematic Brand Films",
    desc: "High-energy reels, commercial TVC - content that makes people stop scrolling.",
  },
  {
    preTitle: "How we do it",
    title: "Design & Strategy",
    desc: "We obsess over details so you don't have to. We don't just capture footage - we capture the vibe.",
  },
  {
    preTitle: "Start here",
    title: "End-to-End Production",
    desc: "Making cool things with cool people. From first brief to final master file.",
  }
];

const MARQUEE_TEXT = [
  "Cinematic Brand Films",
  "Commercials",
  "Visual Storytelling",
  "Post Production",
  "Creative Strategy",
  "Motion Design"
];

export const WhoWeAre = ({ content }) => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white text-zinc-950 font-sans">

      {/* HEADER SECTION */}
      <div className="max-w-[100rem] mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 font-medium text-left">
              {content.preTitle}
            </p>
            <h1 className="text-5xl md:text-8xl font-semibold tracking-wide leading-[0.90] text-left">
              {content.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:border-l md:border-zinc-200 md:pl-16 h-full flex items-center"
          >
            <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-lg text-left">
              {content.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* SERVICE GRID */}
      <div className="max-w-[100rem] mx-auto px-6 border-t border-zinc-200">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 md:p-14 border-l border-b md:border-b-0 border-zinc-200 last:border-r"
            >
              <p className="text-sm uppercase tracking-[0.3em] font-medium mb-10 text-zinc-400">
                {service.preTitle}
              </p>
              <h3 className="text-2xl font-bold tracking-tight mb-6 uppercase">
                {service.title}
              </h3>
              <p className="text-lg text-zinc-500 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND MARQUEE TEXT */}
      <div className="pb-12 opacity-[0.9] select-none pointer-events-none ">
        <Marquee
          direction="left"
          gradient={false}
          speed={40}
        >
          {MARQUEE_TEXT.map((text, index) => (
            <div
              key={index}
              className="flex items-center bg-zinc-100 h-20"
            >
              <span className="md:text-[2rem] font-semibold tracking-[0.1em] uppercase mx-12 text-zinc-300">
                {text}
              </span>
              {/* <span className="text-4xl">/</span> */}
            </div>
          ))}
        </Marquee>
      </div>

    </section>
  );
};