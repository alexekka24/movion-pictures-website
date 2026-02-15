import React from "react";
import { motion } from "framer-motion";

export const MasonryLayout = ({ items = [], renderItem }) => {
  return (
    <div className="columns-2 xs:columns-3 gap-4 space-y-4 sm:columns-1 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="break-inside-avoid"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
            ease: "easeOut",
          }}
        >
          {renderItem(item, index)}
        </motion.div>
      ))}
    </div>
  );
}
