// ProjectMilestones.jsx
import { useEffect, useState, useRef } from "react";
import { Users, CheckCircle, Eye } from "lucide-react";
import { motion, useInView } from "framer-motion";

const milestonesData = [
  { id: 1, label: "Projects Completed", icon: <CheckCircle size={48} />, count: 120 },
  { id: 2, label: "Total Views", icon: <Eye size={48} />, count: 3500 },
  { id: 3, label: "Clients Served", icon: <Users size={48} />, count: 75 },
];

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const Counter = ({ target, isVisible, duration = 1200, onComplete }) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || finishedRef.current) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      let progress = Math.min(elapsed / duration, 1);
      progress = easeOutCubic(progress);
      const current = Math.floor(progress * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        finishedRef.current = true;
        onComplete?.();
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [target, isVisible, duration, onComplete]);

  return <span className="text-5xl font-bold">{count.toLocaleString()}</span>;
};

export const ProjectMilestones = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [finished, setFinished] = useState({});

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <h2 className="text-4xl font-bold text-center mb-12">Project Milestones</h2>

      <div className="flex flex-col lg:flex-row justify-center items-center md:gap-20 max-sm:gap-20 lg:gap-60 sm:gap-20">
        {milestonesData.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0 }}
          >
            {/* Bounce icon + number together with staggered spring */}
            <motion.div
              animate={finished[milestone.id] ? { y: -10, scale: 1.2 } : { y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 12,
                delay: index * 0.2,
              }}
              className="flex flex-col items-center"
            >
              <div className="text-zinc-400 mb-3">{milestone.icon}</div>
              <Counter
                target={milestone.count}
                isVisible={isInView}
                duration={1200}
                onComplete={() =>
                  setFinished((prev) =>
                    prev[milestone.id] ? prev : { ...prev, [milestone.id]: true }
                  )
                }
              />
            </motion.div>

            <p className="mt-2 text-xl text-slate-400 font-extralight">{milestone.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

