import { useEffect } from "react";
import { X, Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CopyButton from "./CopyButton";

const ContactPageContent = {
  headline: "Let’s create something together",

  email: {
    label: "contact@movionpictures.in",
    value: "contact@movionpictures.in",
  },

  phone: {
    label: "+91 8928741497",
    value: "918928741497",
  },

  location: "Based in India · Working worldwide",

  services: ["Brand Films", "Commercials", "Music Videos", "Social Content"],

  socials: [
    {
      name: "Instagram",
      url: "https://instagram.com/mnpstudio",
      icon: <Instagram size={20} />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@mnpstudio",
      icon: <Youtube size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/mnpstudio",
      icon: <Linkedin size={20} />,
    },
  ],

  whatsapp: {
    number: "919XXXXXXXXX",
    message: "Hello MNP Studio 👋 I'd love to explore a potential collaboration.",
  },

  availability: "Currently accepting select projects",
};

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
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xl overscroll-contain"
        >
          {/* Backdrop click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Glow blobs */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/10 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-[140px]" />

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
                  {ContactPageContent.email.value}
                  <CopyButton
                    value={ContactPageContent.email.value}
                    label={ContactPageContent.email.label}
                  />
                </p>

                <p className="flex items-center justify-center gap-2 opacity-90">
                  {ContactPageContent.phone.label}
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

                <div className="flex justify-center gap-5">
                  {ContactPageContent.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-12 h-12 rounded-full flex items-center justify-center
                        border border-white/15 bg-white/5
                        hover:bg-white/15 hover:scale-105
                        transition duration-300
                      "
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div variants={item} className="mt-12 flex justify-center">
                <a
                  href={`https://wa.me/${ContactPageContent.whatsapp.number}?text=${encodeURIComponent(
                    ContactPageContent.whatsapp.message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-3
                    rounded-full px-8 py-4
                    text-sm md:text-base
                    bg-gradient-to-r from-green-500/90 to-emerald-400/90
                    text-black font-semibold
                    shadow-xl shadow-green-500/20
                    hover:scale-[1.03]
                    transition duration-300
                  "
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
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
