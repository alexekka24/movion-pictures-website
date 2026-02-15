import { useState, useEffect } from "react";
import { cn } from "../../utils/utils";
import Button from "../common/Button";
import { NavLink } from "react-router-dom";
import { Contact } from "../Contact";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { NAVIGATION } from "../../../public/assets/data/NAVIGATION";

const images = NAVIGATION.images;

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const textColor = isScrolled ? "text-black" : "text-white";
  const iconColor = isScrolled ? "black" : "white";
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    if (!isMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const heroHeight = window.innerHeight;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > heroHeight - 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // if (!isMenuOpen) return null;

  const handleContactOpen = () => {
    setContactOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "z-40 fixed left-1/2 -translate-x-1/2 transition-all duration-500",
          "top-0 w-full h-20 flex items-center bg-black/20 backdrop-blur-2xs",

          isScrolled &&
            "top-6 w-[92%] max-w-6xl rounded-full border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-2xl bg-white/10",
        )}
      >
        {/* <div className="container flex items-center justify-between"> */}
        <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl font-bold text-primary flex items-center"
          >
            <img
              src={
                isScrolled
                  ? "/assets/images/logos/logo-black.png"
                  : "/assets/images/logos/logos-white.png"
              }
              alt="Movion Pictures Logo"
              className="w-3xs transition-all duration-300"
            />
          </NavLink>

          {/* MOBILE TOGGLE */}
          <Button
            variant="simple_black"
            size="lg"
            className="p-2 text-black z-40 bg-black/40 rounded-[20%]"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <IoClose color="black" className="hover:scale-110 duration-300" />
            ) : (
              <RiMenu3Fill
                color={isScrolled ? "black" : "white"}
                className="hover:scale-110 duration-300"
              />
            )}
          </Button>
        </div>
      </nav>
      {/* MOBILE MENU */}
      <div
        className={cn(
          "fixed inset-0 bg-white backdrop-blur-3xl z-30 flex items-center justify-evenly h-screen rounded-2xl",
          "transition-all duration-300",
          isMenuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-auto",
          isScrolled
            ? " text-white pointer-events-auto "
            : "pointer-events-auto",
        )}
      >
        {/* MASONRY GRID */}
        <div className="hidden md:block w-1/2">
          <div className="columns-2 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="masonry-item stagger-item"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img
                  src={img.src}
                  className="w-full rounded-xl object-cover grayscale hover:grayscale-0 duration-200"
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col space-y-10 rounded-4xl"
          onClick={() => setIsMenuOpen(false)}
        >
          {NAVIGATION.navItems.map((item) => {
            // Contact → OPEN OVERLAY
            if (item.action === "overlay") {
              return (
                <a className="flex" key={item.name}>
                  <Button
                    key={item.name}
                    onClick={handleContactOpen}
                    className="text-black hover:text-black/60 transition-colors"
                    variant="simple_black"
                    size="ex_lg"
                    text={item.name.toUpperCase()}
                  />
                </a>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.href}
                className="text-black hover:text-black/60 transition-colors flex"
              >
                <Button
                  variant="simple_black"
                  size="ex_lg"
                  text={item.name.toUpperCase()}
                />
              </NavLink>
            );
          })}
        </div>
        {/* ICONS */}
        <div className="text-black absolute flex gap-10 bottom-20 lg:bottom-10">
          {
            NAVIGATION.socials.map((item) => {
              const Icon = item.icon;
              return (
                <a href={item.url} target="_blank">
                  <Button text={<Icon />} variant="simple_black" size="lg" />
                </a>
              )
            })
          }
        </div>
      </div>
      {/* CONTACT OVERLAY */}
      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};
