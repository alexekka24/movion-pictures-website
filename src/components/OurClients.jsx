import { motion } from "framer-motion";
import InfiniteMarquee from "./InfiniteMarquee";
import { Spotlight } from "lucide-react";

export const OurClients = () => {
  return (
    <section
      // className="lg:h-[70vh] h-40h my-10 flex flex-col justify-center items-center gap-10"
      className="relative my-2 overflow-hidden
        flex flex-col items-center justify-center gap-20
        lg:min-h-[70vh]"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/3 h-125 w-125 
          -translate-x-1/2 rounded-full 
          bg-purple-500/10 blur-3xl"
        />
      </div>
      <div className="relative flex items-center gap-4">
        <Spotlight size={60} className="text-black" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            text-center font-semibold tracking-tight
            text-5xl lg:text-[6rem]
            bg-linear-to-b from-black to-black/60
            bg-clip-text text-transparent
          "
        >
          Our Shooting Stars
        </motion.h1>

        {/* <Spotlight size={28} className="text-black" /> */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col justify-center"
      >
        <InfiniteMarquee />
      </motion.div>
    </section>
  );
};
