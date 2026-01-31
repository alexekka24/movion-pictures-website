import {FooterNavLinks} from "./FooterNavLinks";
import { X, Menu, Home, Info, Briefcase, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


const navItems = [
  { name: "Home", href: "/", iconName: Home },
  { name: "About Us", href: "/aboutus", iconName: Info },
  { name: "Our Work", href: "/ourwork", iconName: Briefcase },
  { name: "Contact", href: "/contact", iconName: Mail, action: "overlay" },
];

export const Footer = () => {
  return (
    <footer
      className="
        relative left-1/2 -translate-x-1/2
        h-[60vh] w-11/12
        bg-black/80 backdrop-blur-md
        border border-white/10
        rounded-[20px]
        shadow-lg
        z-50
        flex flex-col justify-between
        px-10 py-12
        my-8
      "
    >
      {/* Top Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div className="sm:flex sm:flex-col items-center gap-4">
          <NavLink
            to="/"
            className="text-xl font-bold text-primary flex items-center"
          >
            <img
              src="/src/assets/images/logos/logos-white.png"
              alt="Movion Pictures"
              className="w-3xs transition-all duration-300"
            />
          </NavLink>
          <p className="text-white/60 max-w-xs">
            Building meaningful digital experiences with modern web
            technologies.
          </p>
        </div>

        {/* Navigation */}
        <div className="sm:flex sm:flex-col items-center">
          <h4 className="text-white text-lg font-medium mb-4">Navigation</h4>

          <FooterNavLinks
            onContactClick={() => console.log("Open Contact Overlay")}
          />
        </div>

        {/* Social Media */}
        <div className="sm:flex sm:flex-col items-center">
          <h4 className="text-white text-lg font-medium mb-4">Follow Us</h4>
          <div className="flex gap-4 text-white/70">
            <span className="hover:text-white transition cursor-pointer">
              <FaLinkedin size={20} />
            </span>
            <span className="hover:text-white transition cursor-pointer">
              <FaInstagram size={20} />
            </span>
            <span className="hover:text-white transition cursor-pointer">
              <FaYoutube size={20}/>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-6 text-center">
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Movion Pictures. All rights reserved.
        </p>
        <p className="text-white/40 text-xs mt-1">
          Built by{" "}
          <a
            href="https://linkedin.com/in/alex-ekka"
            target="_blank"
            className="hover:text-white transition"
          >
            Alex Ekka
          </a>
        </p>
      </div>
    </footer>
  );
};
