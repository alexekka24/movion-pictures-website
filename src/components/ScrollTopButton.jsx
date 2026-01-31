import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = ({ targetRef }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!targetRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // show button when hero is NOT visible
        setShow(!entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [targetRef]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="
            fixed bottom-6 right-6 z-50
            rounded-full p-3
            bg-white/80 backdrop-blur
            shadow-lg border
            hover:scale-110 transition
          "
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-black" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
