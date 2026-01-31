import { useEffect } from "react";
import { X, Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CopyButton from "./CopyButton";

// import { FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ContactPageContent = {
  "headline": "Let’s create something together",

  "email": {
    "label": "hello@mnpstudio.com",
    "value": "hello@mnpstudio.com"
  },

  "phone": {
    "label": "+91 9XXXXXXXXX",
    "value": "919XXXXXXXXX"
  },

  "location": "Based in Delhi · Working worldwide",

  "services": [
    "Brand Films",
    "Commercials",
    "Music Videos",
    "Social Content"
  ],

  "socials": [
    
    {
      "name": "Instagram",
      "url": "https://instagram.com/mnpstudio",
      "icon": "instagram"
    },
    {
      "name": "YouTube",
      "url": "https://youtube.com/@mnpstudio",
      "icon": "youtube"
    },
    {
      "name": "LinkedIn",
      "url": "https://linkedin.com/company/mnpstudio",
      "icon": "linkedin"
    }
  ],

  "whatsapp": {
    "number": "919XXXXXXXXX",
    "message": "Hello MNP Studio 👋 I'd love to explore a potential collaboration."
  },

  "availability": "Currently accepting select projects"
}



export const Contact = ({ open, onClose }) => {
  // 🔒 Scroll lock (mobile safe)
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // ⌨️ ESC to close
  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

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
          className="fixed inset-0 z-9999 bg-black/90 backdrop-blur-sm overscroll-contain"
        >
          {/* Backdrop click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Content wrapper */}
          <div className="relative flex min-h-dvh items-center justify-center px-6">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white hover:opacity-70 cursor-pointer"
            >
              <X size={28} />
            </button>

            {/* Content */}
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              className="max-w-xl w-full text-center text-white space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-light">
                {ContactPageContent.headline}
              </h2>

              <div className="space-y-2 text-lg opacity-90">
                <p className="flex items-center justify-center">
                  {ContactPageContent.email.value}
                  <CopyButton
                    value={ContactPageContent.email.value}
                    label={ContactPageContent.email.label}
                  />
                </p>

                <p className="flex items-center justify-center">
                  {ContactPageContent.phone.label}
                  <CopyButton value={ContactPageContent.phone.value} label={ContactPageContent.phone.label}/>
                </p>
              </div>

              <p className="text-sm opacity-70">
                {ContactPageContent.location}
              </p>

              <p className="text-sm opacity-70">
                Brand Films · Commercials · Music Videos · Social Content

              </p>

              {/***************************** Social Icons ********************************/}
              <div className="pt-4">
                <p className="text-sm uppercase tracking-widest opacity-60 mb-3">
                  Follow our work
                </p>

                <div className="flex justify-center gap-6">
                  <a href="#" className="hover:opacity-70">
                    {/* <InstagramIcon size={24} /> */}
                    {/* <FaInstagram size={24}/> */}
                  </a>
                  <a href="#" className="hover:opacity-70">
                    <Youtube />
                  </a>
                  <a href="#" className="hover:opacity-70">
                    <Linkedin />
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="pt-6">
                <a
                  href="https://wa.me/919XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm hover:bg-green-500 hover:text-white transition"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              <p className="text-xs opacity-50 pt-4">
                Currently accepting select projects
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

