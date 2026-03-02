import { useRef, useMemo } from "react";
import { Clock, Users, BadgeIndianRupee } from "lucide-react";
import { ProjectCTA } from "../components/common/ProjectCTA";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

const GrainFilter = () => (
  <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.03] z-50">
    <filter id="grainy">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grainy)" />
  </svg>
);

const ArchitecturalGrid = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
    style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, size: '40px 40px', backgroundSize: '40px 40px' }}
  />
);

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
      {/* Glossy Reflection Shine */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: "translateZ(20px)" }}
      />
    </motion.div>
  );
};

export const ProcessAndPricing = () => {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  });

  const processSteps = useMemo(() => [
    {
      step: "01",
      title: "Discovery",
      desc: "We start by understanding your brand, audience, and the story you want to tell.",
    },
    {
      step: "02",
      title: "Concept & Script",
      desc: "We craft the narrative, treatment, and direction that fits your goals and tone.",
    },
    {
      step: "03",
      title: "Pre-Production",
      desc: "We plan everything — locations, casting, shot list, schedule, and production logistics.",
    },
    {
      step: "04",
      title: "Production",
      desc: "Shoot day(s) where we capture cinematic visuals with the right crew and equipment.",
    },
    {
      step: "05",
      title: "Post-Production",
      desc: "Editing, sound, music, grading, motion graphics, and refinements until it feels perfect.",
    },
    {
      step: "06",
      title: "Delivery",
      desc: "Final exports optimized for social, web, ads, or broadcast — delivered in the right formats.",
    },
  ], []);

  const questions = {
    cost: {
      question: "What does it cost?",
      answer: "Every project is a unique collaboration. We don't sell fixed products; we build bespoke cinematic experiences. Once you share your budget range, we propose the best possible treatment, ensuring every rupee is visible on screen through high production value."
    },
    time: {
      question: "How long does it take?",
      answer: "Quality demands time, but efficiency is our hallmark. Most projects follow a 3-6 week cycle. We provide a meticulous schedule upfront, covering everything from initial concept to the final color grade, so you're never in the dark."
    },
    handle: {
      question: "What do we handle?",
      answer: "We are a full-service creative house. From the first spark of an idea to the final master file, we manage it all. We assemble elite crews—directors, DPs, sound designers, and stylists—tailored specifically to your project's unique DNA.",
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    },
  };

  return (
    <div ref={pageRef} className="w-full bg-white text-zinc-950 selection:bg-emerald-100 relative perspective-1000">
      <GrainFilter />

      {/* HERO */}
      <section className="relative py-32 md:py-56 px-6 overflow-hidden border-b border-zinc-100">
        <ArchitecturalGrid />

        {/* Animated Background Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-emerald-500/[0.07] rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-yellow-400/[0.05] rounded-full blur-[140px]"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="overflow-hidden mb-8">
            <motion.p className="text-[10px] uppercase tracking-[0.5em] font-mono text-zinc-400">
              Technical Excellence
            </motion.p>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-semibold leading-[0.85] tracking-tighter mb-12 text-zinc-950">
            A seamless workflow. <br />
            <span className="text-emerald-600 italic">Pure clarity.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-3xl font-light text-zinc-400 max-w-3xl mx-auto leading-relaxed tracking-tight">
            We've refined our production pipeline to be as cinematic as our final results — transparent, efficient, and uncompromising.
          </motion.p>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-48 px-6 max-w-7xl mx-auto bg-neutral-50/30 relative">
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-zinc-200 hidden lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 relative">
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none mb-10 text-zinc-900">
                The <br /><span className="text-emerald-600/80 underline decoration-zinc-200 underline-offset-8">Journey.</span>
              </h2>
              <p className="text-zinc-400 text-xl font-light leading-relaxed max-w-sm">
                Every masterpiece follows an architectural path. From blueprint to final export.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {processSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group lg:pl-12"
              >
                {/* Connection Dot */}
                <div className="absolute left-[-13.5px] top-12 w-6 h-6 rounded-full border-4 border-white bg-emerald-500 hidden lg:block z-10 shadow-sm transition-transform group-hover:scale-125 duration-500" />

                <div className="p-12 rounded-[3.5rem] border border-zinc-100 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.02)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] group-hover:border-emerald-100/50 transition-all duration-700">
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-[11px] font-mono tracking-[0.4em] text-emerald-600 opacity-40 uppercase">
                      Phase {item.step}
                    </span>
                    <div className="text-zinc-100 font-mono text-4xl group-hover:text-emerald-50 duration-500 transition-colors">
                      /{item.step}
                    </div>
                  </div>
                  <h3 className="text-3xl font-medium mb-6 tracking-tight text-zinc-900 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                  <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING INFO SECTION */}
      <section
        id="pricing-section"
        className="py-32 md:py-64 px-6 bg-white relative overflow-hidden border-t border-zinc-100"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/[0.04] rounded-full blur-[180px]" />
          <ArchitecturalGrid />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] font-mono text-zinc-400 mb-6"
            >
              Commercials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-semibold tracking-tighter mb-10 text-zinc-950"
            >
              Practical <span className="italic text-emerald-600/80">Value.</span>
            </motion.h2>
            <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto tracking-tight">
              Direct answers to the questions that drive our partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* PRICING */}
            <TiltCard className="group relative">
              <div className="pricing-card rounded-[3.5rem] p-14 bg-linear-to-br from-white to-neutral-50/50 border border-zinc-100 flex flex-col h-full shadow-[0_10px_40px_rgba(0,0,0,0.02)] group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)] group-hover:border-emerald-200/50 transition-all duration-700">
                <div className="w-20 h-20 rounded-3xl bg-emerald-50 flex items-center justify-center mb-12 border border-emerald-100/50 group-hover:bg-emerald-500 group-hover:rotate-12 transition-all duration-500">
                  <BadgeIndianRupee className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-medium mb-10 tracking-tight text-zinc-900 underline decoration-zinc-100 decoration-2 underline-offset-8">
                  {questions.cost.question}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-lg md:text-xl font-light">
                  {questions.cost.answer}
                </p>
              </div>
            </TiltCard>

            {/* TIMELINE */}
            <TiltCard className="group relative">
              <div className="pricing-card rounded-[3.5rem] p-14 bg-linear-to-br from-white to-neutral-50/50 border border-zinc-100 flex flex-col h-full shadow-[0_10px_40px_rgba(0,0,0,0.02)] group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)] group-hover:border-yellow-200/50 transition-all duration-700">
                <div className="w-20 h-20 rounded-3xl bg-yellow-50 flex items-center justify-center mb-12 border border-yellow-100/50 group-hover:bg-yellow-400 group-hover:rotate-12 transition-all duration-500">
                  <Clock className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-medium mb-10 tracking-tight text-zinc-900 underline decoration-zinc-100 decoration-2 underline-offset-8">
                  {questions.time.question}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-lg md:text-xl font-light">
                  {questions.time.answer}
                </p>
              </div>
            </TiltCard>

            {/* TEAM */}
            <TiltCard className="group relative">
              <div className="pricing-card rounded-[3.5rem] p-14 bg-linear-to-br from-white to-neutral-50/50 border border-zinc-100 flex flex-col h-full shadow-[0_10px_40px_rgba(0,0,0,0.02)] group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)] group-hover:border-zinc-300/50 transition-all duration-700">
                <div className="w-20 h-20 rounded-3xl bg-zinc-100 flex items-center justify-center mb-12 border border-zinc-200 group-hover:bg-zinc-900 group-hover:rotate-12 transition-all duration-500">
                  <Users className="w-8 h-8 text-zinc-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-medium mb-10 tracking-tight text-zinc-900 underline decoration-zinc-100 decoration-2 underline-offset-8">
                  {questions.handle.question}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-lg md:text-xl font-light">
                  {questions.handle.answer}
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <ProjectCTA theme="light" />
    </div>
  );
};
