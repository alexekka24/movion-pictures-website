import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Users, BadgeIndianRupee } from "lucide-react";
import { ProjectCTA } from "../components/common/ProjectCTA";

gsap.registerPlugin(ScrollTrigger);

export const ProcessAndPricing = () => {
  const pageRef = useRef(null);

  const processSteps = [
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
  ];

  const questions = {
    cost: {
      question: "What does it cost ?",
      answer: "This is the most common question — and the honest answer is: every project is different. We’re not selling a fixed product that can be repeated the same way every time. Each video has its own goals, scale, locations, and creative requirements. Once you share your budget range, we propose the best possible treatment and execution within it — with a clear breakdown so you know exactly where the money goes."
    },
    time: {
      question: "How long does it take ?",
      answer: "From the first idea to final delivery, every project follows a structured and well-planned process. The timeline depends on the type of video, approval cycles, shoot requirements, and post-production complexity. Some projects move quickly, while others require more detailed execution. In every case, we share a clear and realistic schedule upfront-so expectations remain aligned from day one."
    },
    handle: {
      question: "What do we handle ?",
      answer: "When you work with us, you’re partnering with a full-service creative production team. We manage the entire process under one roof from concept and copy to production and post-production. Depending on the scale of the project, we assemble the right mix of specialists, including directors, cinematographers, sound engineers, makeup artists, set designers, and more-ensuring every detail is handled seamlessly.",
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".reveal", { opacity: 0, y: 60 });

      gsap.to(".reveal", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 75%",
        },
      });

      // pricing cards separate stagger (feels premium)
      gsap.set(".pricing-card", { opacity: 0, y: 80, scale: 0.97 });

      gsap.to(".pricing-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#pricing-section",
          start: "top 75%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="w-full bg-white text-black">
      {/* HERO */}
      <section className="relative py-16 md:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-125 h-125 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-yellow-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-black/50 mb-4">
            Process & Pricing
          </p>

          <h1 className="reveal text-4xl md:text-6xl font-founder font-bold leading-tight">
            A smooth workflow.{" "}
            <span className="text-green-700">No confusion.</span>
          </h1>

          <p className="reveal mt-6 text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            We keep things simple, structured, and transparent — so you always
            know what’s happening and why.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl md:text-5xl font-founder font-bold mb-4">
            Our Process
          </h2>
          <p className="reveal text-black/60 text-lg max-w-2xl mx-auto">
            Every project goes through a clear step-by-step journey — designed
            to keep things efficient, creative, and premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="reveal p-6 md:p-8 rounded-2xl border border-black/10 bg-white shadow-lg shadow-black/5 hover:shadow-xl transition"
            >
              <p className="text-sm font-semibold tracking-[0.3em] text-green-700 mb-3">
                {item.step}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-black/70 text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING INFO SECTION */}
      <section
        id="pricing-section"
        className="py-12 md:py-20 px-6 bg-neutral-50 border-t border-black/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl md:text-5xl font-founder font-bold mb-4">
              Pricing & Practical Questions
            </h2>
            <p className="reveal text-black/60 text-lg max-w-3xl mx-auto">
              The three most common things clients ask us — explained clearly,
              without fluff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* PRICING */}
            <div className="pricing-card rounded-2xl p-10 bg-white border border-black/10 shadow-lg shadow-black/5 hover:shadow-xl transition">
              <div className="w-full h-20 rounded-xl bg-green-700/10 flex items-center justify-center mb-6">
                <BadgeIndianRupee className="w-10 h-10 text-green-700" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{questions.cost.question}</h3>

              <p className="text-black/70 leading-relaxed text-lg text-justify">
                {/* This is the most common question — and the honest answer is:
                every project is different.
                <br />
                <br />
                We’re not selling a fixed product that can be repeated the same
                way every time. Each video has its own goals, scale, locations,
                and creative requirements.
                <br />
                <br />
                Once you share your budget range, we propose the best possible
                treatment and execution within it — with a clear breakdown so
                you know exactly where the money goes. */}
                {questions.cost.answer}
              </p>
            </div>

            {/* TIMELINE */}
            <div className="pricing-card rounded-2xl p-10 bg-white border border-black/10 shadow-lg shadow-black/5 hover:shadow-xl transition">
              <div className="w-full h-20 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6">
                <Clock className="w-10 h-10 text-yellow-600" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{questions.time.question}</h3>

              <p className="text-black/70 leading-relaxed text-lg text-justify">
                {/* From the first idea to final delivery, most projects take{" "}
                <span className="font-semibold text-black">2 to 5 weeks</span>.
                <br />
                <br />
                The timeline depends on the type of video, approvals, shoot
                days, and post-production complexity.
                <br />
                <br />
                Some projects move fast. Some need more time. But we’ll always
                share a realistic schedule upfront — so expectations stay clear. */}
                {questions.time.answer}
              </p>
            </div>

            {/* TEAM */}
            <div className="pricing-card rounded-2xl p-10 bg-white border border-black/10 shadow-lg shadow-black/5 hover:shadow-xl transition">
              <div className="w-full h-20 rounded-xl bg-black/5 flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-black" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{questions.handle.question}</h3>

              <p className="text-black/70 leading-relaxed text-lg text-justify">
                {/* When you work with us, you’re hiring a full creative production
                partner.
                <br />
                <br />
                We take care of everything — concept, copy, production, and
                post-production — under one roof.
                <br />
                <br />
                Depending on the scale, we also bring in a team of{" "}
                <span className="font-semibold text-black">10 to 40+</span>{" "}
                specialists: directors, cinematographers, sound engineers,
                makeup artists, set designers, and more. */}
                {questions.handle.answer}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectCTA theme="light" />
    </div>
  );
};
