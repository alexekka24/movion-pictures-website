import { FooterNavLinks } from "../FooterNavLinks";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";
import { NAVIGATION } from "../../../public/assets/data/NAVIGATION";
import { motion } from "framer-motion";


export const Footer = ({ pageTheme = "dark" }) => {
  // pageTheme: "dark" | "light"
  // dark page -> light glass footer
  // light page -> dark glass footer

  const isDarkPage = pageTheme === "dark";
  const isFooterDark = !isDarkPage; // contrast rule

  return (
    <footer
      className={`
        relative left-1/2 -translate-x-1/2
        h-[60vh] w-11/12
        rounded-[20px]
        shadow-xl
        z-50
        flex flex-col justify-between
        px-10 py-12 mt-8
        backdrop-blur-xl
        ${isFooterDark
          ? `
              bg-black/70
              border border-white/10
              text-white
            `
          : `
              bg-white/20
              border border-black/10
              text-white
            `
        }
      `}
    >
      {/* subtle glass glow */}
      <div
        className={`
          pointer-events-none absolute inset-0 rounded-[20px]
          ${isFooterDark
            ? "bg-linear-to-br from-white/5 via-transparent to-transparent"
            : "bg-linear-to-br from-black/5 via-transparent to-transparent"
          }
        `}
      />

      {/* Background Cinematic Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <h2 className="text-[18vw] font-bold text-white/[0.015] tracking-tighter uppercase">
          Movion
        </h2>
      </div>

      {/* Top Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div className="sm:flex sm:flex-col items-center gap-4">
          <NavLink to="/" className="text-xl font-bold flex items-center">
            <img
              loading="lazy"
              decoding="async"
              src={
                isFooterDark
                  ? "/assets/images/logos/logos-white.png"
                  : "/assets/images/logos/logos-white.png"
              }
              alt="Movion Pictures"
              className="w-3xs transition-all duration-300"
            />
          </NavLink>

          <p className="text-sm font-light text-white/40 max-w-xs leading-relaxed">
            Crafting cinematic narratives and high-impact digital experiences.
          </p>
        </div>

        {/* Navigation */}
        <div className="sm:flex sm:flex-col items-center">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-mono text-white/30 mb-8">
            Navigation
          </h4>

          <div className="flex flex-col gap-3">
            <FooterNavLinks variant={isFooterDark ? "dark" : "light"} />
          </div>
        </div>

        {/* Social Media */}
        <div className="sm:flex sm:flex-col items-center">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-mono text-white/30 mb-8">
            Follow Us
          </h4>

          <div className="flex gap-4">
            {NAVIGATION.socials.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`relative pt-6 text-center border-t ${isFooterDark ? "border-white/10" : "border-black/10"
          }`}
      >
        <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/20">
          © {new Date().getFullYear()} Movion Pictures. All rights reserved.
        </p>

        <p className="text-[9px] uppercase tracking-[0.2em] font-mono text-white/10 mt-4">
          Built by{" "}
          <a
            href="https://linkedin.com/in/alex-ekka"
            target="_blank"
            className="hover:text-emerald-500/50 transition-colors duration-300"
          >
            Alex Ekka
          </a>
        </p>
      </div>
    </footer>
  );
};


