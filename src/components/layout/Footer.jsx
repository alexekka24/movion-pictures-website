import { FooterNavLinks } from "../FooterNavLinks";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";
import { NAVIGATION } from "../../../public/assets/data/NAVIGATION";


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

          <p className={`${isFooterDark ? "text-white/60" : "text-white/60"} max-w-xs`}>
            Building meaningful digital experiences with modern web
            technologies.
          </p>
        </div>

        {/* Navigation */}
        <div className="sm:flex sm:flex-col items-center">
          <h4 className={`text-xl font-medium mb-4 ${isFooterDark ? "text-white" : "text-white"}`}>
            Navigation
          </h4>

          <FooterNavLinks variant={isFooterDark ? "dark" : "light"} />
        </div>

        {/* Social Media */}
        <div className="sm:flex sm:flex-col items-center">
          <h4 className={`text-xl font-medium mb-4 ${isFooterDark ? "text-white" : "text-white"}`}>
            Follow Us
          </h4>

          <div className={`flex gap-6 ${isFooterDark ? "text-white/70" : "text-black/70"}`}>
            {
              NAVIGATION.socials.map((item) => {
                const Icon = item.icon;

                return (
                  <a href={item.url} target="_blank">
                    <Button variant="simple" size="lg" text={<Icon />} />
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`relative pt-6 text-center border-t ${isFooterDark ? "border-white/10" : "border-black/10"
          }`}
      >
        <p className={`${isFooterDark ? "text-white/60" : "text-white/60"} text-sm`}>
          © {new Date().getFullYear()} Movion Pictures. All rights reserved.
        </p>

        <p className={`${isFooterDark ? "text-white/40" : "text-white/40"} text-xs mt-1`}>
          Built by{" "}
          <a
            href="https://linkedin.com/in/alex-ekka"
            target="_blank"
            className={`transition ${isFooterDark ? "hover:text-white" : "hover:text-white"
              }`}
          >
            Alex Ekka
          </a>
        </p>
      </div>
    </footer>
  );
};


