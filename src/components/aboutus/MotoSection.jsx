import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const MotoSection = ({ moto }) => {
  return (
    <motion.section className="py-20 text-center bg-black/90 text-white border-b border-white/10">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        transition={{ duration: 0.9 }}
        className="text-6xl"
      >
        OUR MOTO
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        transition={{ duration: 0.9 }}
        className="italic text-2xl"
      >
        {moto || "“We don’t just create visuals — we craft experiences.”"}
        {/* “We don’t just create visuals — we craft experiences.” */}
      </motion.p>
    </motion.section>
  );
};
