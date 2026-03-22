import { useRef } from "react";
import { ProjectCTA } from "../components/common/ProjectCTA";
import { motion, useScroll } from "framer-motion";
import { PROCESS_PRICING } from "../../public/assets/data/pageData/PROCESS&PRICING.JS";

export const ProcessAndPricing = () => {
  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={pageRef} className="w-full bg-white text-zinc-950 selection:bg-zinc-900 selection:text-white relative font-sans">

      {/* HERO SECTION - Simplified */}
      <section className="relative pt-40 pb-24 px-6 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-400 mb-8 font-medium">
              {PROCESS_PRICING.main.preTitle}
            </p>
            <h1 className="text-7xl md:text-[10rem] font-bold leading-[0.8] tracking-tighter mb-12 uppercase">
              {PROCESS_PRICING.main.title} <br />
              <span className="text-zinc-300 font-bold italic">{PROCESS_PRICING.main.suffixTitle}</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-4xl mx-auto leading-relaxed font-light">
              {PROCESS_PRICING.main.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE JOURNEY SECTION */}
      <section className="py-24 w-screen">
        <div className="mx-auto px-6">
          <div className="flex justify-between items-end border-b border-zinc-100 pb-8 mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-zinc-400 font-medium mb-4">STAGES</p>
              <h2 className="text-6xl font-bold tracking-tighter uppercase">{PROCESS_PRICING.process.title}</h2>
            </div>
            <div className="hidden md:flex gap-12 text-md uppercase tracking-[0.4em] text-zinc-400 font-medium">
              <span>PROCESSES</span>
              <span>ROADMAP</span>
            </div>
          </div>

          <div className="space-y-0">
            {PROCESS_PRICING.process.processSteps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              const isDark = step.highlight;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`grid grid-cols-1 md:grid-cols-2 border-2 border-zinc-300 min-h-[400px] rounded-3xl ${step.color}`}
                >
                  {/* Number Section */}
                  <div className={`flex items-center justify-center p-12 order-1 ${isEven ? 'md:order-2 border border-zinc-300' : 'md:order-1'} ${isDark ? 'md:border-zinc-800' : ''}`}>
                    <span className={`text-md md:text-[15rem] font-bold tracking-tighter leading-none ${isDark ? 'text-zinc-900/30' : 'text-zinc-600'}`}>
                      {step.step}
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className={`flex flex-col justify-center p-12 md:p-24 order-2 ${isEven ? 'md:order-1' : 'md:order-2 border border-zinc-300'} ${isDark ? 'md:border-zinc-800' : ''}`}>
                    <p className={`text-md uppercase tracking-[0.3em] font-medium mb-6 ${step.secondaryTextColor}`}>
                      {step.stage}
                    </p>
                    <h3 className={`text-4xl md:text-5xl font-bold tracking-tight mb-8 uppercase ${step.primaryTextColor}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto ${step.secondaryTextColor}`}>
                      {step.desc}
                    </p>

                    <div className="flex flex-wrap gap-3 max-w-2xl mx-auto">
                      {step.tags && step.tags.map(tag => (
                        <span
                          key={tag}
                          className={`px-4 py-1.5 text-[10px] uppercase tracking-widest font-medium border rounded-2xl ${step.secondaryTextColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRACTICAL VALUE SECTION */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-lg uppercase tracking-[0.4em] text-zinc-400 font-medium mb-12">
            PRACTICAL VALUE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-100">
            {PROCESS_PRICING.pricing.questions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 md:p-14 border-l border-zinc-300 rounded-3xl last:border-r ${item.highlight ? 'bg-zinc-950 text-white border-l-transparent' : 'bg-zinc-50/30'}`}
              >
                <p className={`text-sm uppercase tracking-[0.3em] font-medium mb-10 text-zinc-400`}>
                  {item.label}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight">
                  {item.question}
                </h3>
                <p className={`text-lg leading-relaxed font-light ${item.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {item.answer}
                </p>

                {!item.highlight && <div className="mt-12 w-px h-32 bg-zinc-950" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectCTA theme="light" />
    </div>
  );
};
