import { useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { lockScroll, unlockScroll } from "../utils/utils";
import CopyButton from "./common/CopyButton";
import Button from "./common/Button";
import { ContactPageContent } from "../../public/assets/data/pageData/CONTACTPAGECONTENT";

const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Contact = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-99 bg-black/80 backdrop-blur-xl overscroll-contain"
        >
          {/* Backdrop click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Glow blobs */}
          <div className="absolute -top-40 -left-40 w-125 h-125 rounded-full bg-white/10 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-125 h-125 rounded-full bg-yellow-400/10 blur-[140px]" />

          {/* Close - Moved outside wrapper for better mobile/tablet positioning */}
          <button
            onClick={onClose}
            className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-0 text-white/50 hover:text-white bg-black/20 md:bg-transparent hover:bg-black/40 md:hover:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-full md:rounded-none transition cursor-pointer"
            aria-label="Close form"
          >
            <X size={24} className="md:w-7 md:h-7" />
          </button>

          {/* Wrapper */}
          <div className="relative flex min-h-[100dvh] w-full items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Card */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="
                relative w-full max-w-2xl
                max-h-[90dvh] overflow-y-auto
                [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                rounded-2xl md:rounded-3xl
                border border-white/15
                bg-white/5
                shadow-2xl
                p-6 sm:p-8 md:p-12 lg:p-14
                text-white
                backdrop-blur-2xl
              "
            >
              {/* Availability Badge */}
              <motion.div variants={item} className="flex justify-center mb-6">
                <span className="px-4 py-2 rounded-full text-xs tracking-widest uppercase bg-white/10 border border-white/10">
                  {ContactPageContent.availability}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                variants={item}
                className="text-3xl sm:text-4xl md:text-5xl font-light text-center leading-tight"
              >
                {ContactPageContent.headline}
              </motion.h2>

              {/* Subline */}
              <motion.p
                variants={item}
                className="text-center text-sm md:text-base opacity-70 mt-4"
              >
                {ContactPageContent.location}
              </motion.p>

              {/* Contact info */}
              <motion.div
                variants={item}
                className="mt-8 md:mt-10 space-y-4 md:space-y-3 text-base sm:text-lg md:text-xl text-center"
              >
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 opacity-90">
                  <MdEmail className="text-xl md:text-2xl" />
                  <a href={`mailto:${ContactPageContent.email.value}`} className="break-all">
                    <Button
                      variant="simple"
                      text={ContactPageContent.email.value}
                      size="ex_md"
                    />
                  </a>
                  <CopyButton
                    value={ContactPageContent.email.value}
                    label={ContactPageContent.email.label}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 opacity-90">
                  <FaPhone className="text-lg md:text-xl" />
                  <a href={`tel:${ContactPageContent.phone.value}`}>
                    <Button
                      variant="simple"
                      text={ContactPageContent.phone.label}
                      size="ex_md"
                    />
                  </a>
                  <CopyButton
                    value={ContactPageContent.phone.value}
                    label={ContactPageContent.phone.label}
                  />
                </div>
              </motion.div>

              {/* Services chips */}
              <motion.div variants={item} className="mt-8 md:mt-10">
                <p className="text-xs uppercase tracking-widest opacity-60 text-center mb-4">
                  Services
                </p>

                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {ContactPageContent.services.map((service) => (
                    <span
                      key={service}
                      className="
                        px-3 py-1.5 md:px-4 md:py-2 rounded-full
                        text-xs md:text-sm
                        border border-white/15
                        bg-white/5
                        hover:bg-white/10
                        transition
                      "
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Socials */}
              <motion.div variants={item} className="mt-8 md:mt-12 text-center">
                <p className="text-xs uppercase tracking-widest opacity-60 mb-4">
                  Follow our work
                </p>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                  {ContactPageContent.socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="simple"
                          text={<Icon />}
                          size="lg"
                        />
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div variants={item} className="mt-8 md:mt-12 flex justify-center">
                <a
                  href={`https://wa.me/${ContactPageContent.whatsapp.number}?text=${encodeURIComponent(
                    ContactPageContent.whatsapp.message,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 md:gap-3
                    rounded-full px-6 py-3 md:px-8 md:py-4
                    text-sm md:text-base
                    bg-linear-to-r from-green-500/90 to-emerald-400/90
                    text-black font-semibold
                    shadow-xl shadow-green-500/20
                    hover:scale-[1.03]
                    transition duration-300
                  "
                >
                  <MessageCircle size={18} color="white" className="md:w-5 md:h-5" />
                  <Button
                    variant="simple"
                    text={`Chat on WhatsApp`}
                    size="ex_md"
                  >
                    {/* Chat on WhatsApp */}
                  </Button>
                </a>
              </motion.div>

              {/* Footer note */}
              <motion.p
                variants={item}
                className="text-xs opacity-50 text-center mt-8 md:mt-10 px-4"
              >
                Prefer email? Send us a brief and we’ll reply within 24 hours.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
