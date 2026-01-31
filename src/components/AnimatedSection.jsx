import { motion } from "framer-motion";


export function AnimatedSection({ children, bg, color }) {
  return (
    <motion.section
      initial={{ backgroundColor: bg.from, color: color.from }}
      whileInView={{ backgroundColor: bg.to, color: color.to }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
}
