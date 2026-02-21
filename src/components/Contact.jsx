import { useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import CopyButton from "./common/CopyButton";
import Button from "./common/Button";
import { ContactPageContent } from "../../public/assets/data/CONTACTPAGECONTENT";

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
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalOverflow);
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

          {/* Wrapper */}
          <div className="relative flex min-h-dvh items-center justify-center px-6 py-12">
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition cursor-pointer"
            >
              <X size={28} />
            </button>

            {/* Card */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="
                relative w-full max-w-2xl
                rounded-3xl
                border border-white/15
                bg-white/5
                shadow-2xl
                px-8 py-10 md:px-14 md:py-14
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
                className="text-3xl md:text-5xl font-light text-center leading-tight"
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
                className="mt-10 space-y-3 text-lg md:text-xl text-center"
              >
                <p className="flex items-center justify-center gap-2 opacity-90">
                <MdEmail />
                  <a href={`mailto: ${ContactPageContent.email.value}`}>
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
                </p>

                <p className="flex items-center justify-center gap-2 opacity-90">
                  <FaPhone />
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
                </p>
              </motion.div>

              {/* Services chips */}
              <motion.div variants={item} className="mt-10">
                <p className="text-xs uppercase tracking-widest opacity-60 text-center mb-4">
                  Services
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {ContactPageContent.services.map((service) => (
                    <span
                      key={service}
                      className="
                        px-4 py-2 rounded-full
                        text-sm
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
              <motion.div variants={item} className="mt-12 text-center">
                <p className="text-xs uppercase tracking-widest opacity-60 mb-4">
                  Follow our work
                </p>

                <div className="flex justify-center gap-10">
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
              <motion.div variants={item} className="mt-12 flex justify-center">
                <a
                  href={`https://wa.me/${ContactPageContent.whatsapp.number}?text=${encodeURIComponent(
                    ContactPageContent.whatsapp.message,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-3
                    rounded-full px-8 py-4
                    text-sm md:text-base
                    bg-linear-to-r from-green-500/90 to-emerald-400/90
                    text-black font-semibold
                    shadow-xl shadow-green-500/20
                    hover:scale-[1.03]
                    transition duration-300
                  "
                >
                  <MessageCircle size={18} color="white" />
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
                className="text-xs opacity-50 text-center mt-10"
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
