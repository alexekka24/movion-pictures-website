import { useState, useEffect } from "react";
import { cn } from "../utils/utils";
import { X, Menu, Home, Info, Briefcase, Mail } from "lucide-react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { Contact } from "./Contact";

const navItems = [
  { id: 1, name: "Home", href: "/", iconName: Home },
  { id: 2, name: "About Us", href: "/aboutus", iconName: Info },
  { id: 3, name: "Our Work", href: "/ourwork", iconName: Briefcase },
  { id: 4, name: "Contact", href: "/contact", iconName: Mail, action: "overlay" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const textColor = isScrolled ? "text-black" : "text-white";
  const iconColor = isScrolled ? "black" : "white";
  // const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const heroHeight = window.innerHeight;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > heroHeight - 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactOpen = () => {
    setContactOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* <nav
        className={cn(
          "z-40 transition-all duration-500",

          // 🔹 MOBILE / TABLET → normal flow
          "relative lg:absolute",

          isScrolled
            ? "lg:fixed lg:top-6 lg:left-1/2 lg:-translate-x-1/2 w-[92%] max-w-6xl py-3 \
         backdrop-blur-2xl bg-background/70 border border-white/30 \
         rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
            : "lg:absolute lg:top-0 lg:left-0 lg:w-full py-6 bg-black"
        )}
      > */}
      {/* <nav
  className={cn(
    "z-40 transition-all duration-500",
    isScrolled
      ? "fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl py-3 \
         backdrop-blur-2xl bg-background/70 border border-white/30 \
         rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
      : isDesktop
      ? "absolute top-0 left-0 w-full py-6 bg-transparent"
      : "sticky top-0 w-full py-4 bg-background/90 backdrop-blur-xl"
  )}
> */}
      {/* <nav
        className={cn(
          "z-40 transition-all duration-500",

          // DESKTOP: lg+ → transparent at top, black when scrolled
          "lg:absolute lg:top-0 lg:left-0 lg:w-full lg:py-6 lg:bg-transparent",

          // MOBILE & TABLET: < lg → always black, sticky
          "w-full py-4 bg-black sticky top-0",

          // Add scrolled styles only for desktop
          isScrolled &&
            "lg:fixed lg:top-6 lg:left-1/2 lg:-translate-x-1/2 lg:w-[92%] lg:max-w-6xl lg:py-3 lg:bg-background/70 lg:backdrop-blur-2xl lg:border lg:border-white/30 lg:rounded-full lg:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
        )}
      > */}
      {/* <nav
  className={cn(
    "z-40 transition-all duration-500",

    // Base (mobile/tablet) → normal flow before scroll
    "relative w-full py-4 bg-black sticky top-0",

    // DESKTOP: lg+ → absolute top, transparent before scroll
    "lg:absolute lg:top-0 lg:left-0 lg:w-full lg:py-6 lg:bg-transparent",

    // SCROLLED → pill layout applied to all breakpoints
    isScrolled &&
      "fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl py-3 \
       rounded-full border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)] \
       backdrop-blur-2xl",

    // SCROLLED → color difference
    isScrolled
      ? "bg-white lg:bg-background/70" // mobile/tablet: black; desktop: translucent
      : ""
  )}
> */}
      {/* <nav
  className={cn(
    "z-40 transition-all duration-500",

    // AT TOP
    "relative w-full py-4 sticky top-0 bg-black lg:bg-transparent lg:absolute lg:top-0 lg:left-0 lg:w-full lg:py-6",

    // SCROLLED → GLASS PILL
    isScrolled &&
      "fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl py-3 rounded-full border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-2xl bg-white/10"
  )}
> */}
      <nav
        className={cn(
          "z-40 transition-all duration-500",

          // BASE (mobile/tablet at top)
          "relative w-full py-4 sticky top-0 bg-black",

          // DESKTOP (lg+) at top
          "lg:absolute lg:top-0 lg:left-0 lg:w-full lg:py-6 lg:bg-transparent",

          // PILL layout when scrolled
          isScrolled &&
            "fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl py-3 rounded-full border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-2xl bg-white/10 lg:bg-background/70"
        )}
      >
        <div className="container flex items-center justify-between">
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
              alt="Movion Pictures"
              className="w-3xs transition-all duration-300"
            />
          </NavLink>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => {
              const Icon = item.iconName;

              // 🔥 Contact → OPEN OVERLAY
              if (item.action === "overlay") {
                return (
                  <Button
                    // variant="surface"
                    variant={isScrolled ? "surface_black" : "primary"}
                    key={item.id}
                    onClick={handleContactOpen}
                    className="flex items-center gap-4"
                  >
                    <Icon size={24} />
                    {item.name}
                  </Button>
                );
              }

              return (
                <NavLink key={item.name} to={item.href}>
                  <Button
                    // variant="primary"
                    variant={isScrolled ? "primary_black" : "primary"}
                    size="lg"
                    key={item.name}
                    className={isScrolled ? "text-black" : "text-white"}
                  >
                    {item.name}
                  </Button>
                </NavLink>
              );
            })}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <X size={30} color="black" />
            ) : (
              <Menu size={30} color={isScrolled ? "black" : "white"} />
            )}
          </button>

          {/* MOBILE MENU */}
          <div
            className={cn(
              "fixed inset-0 bg-white backdrop-blur-3xl z-40 flex flex-col items-center justify-center",
              "transition-all duration-300 lg:hidden rounded-4xl",
              isMenuOpen
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-full opacity-0 pointer-events-none",
              isScrolled
                ? "h-100 text-white pointer-events-auto"
                : "h-100"
            )}
          >
            <div
              className="flex flex-col space-y-8 text-xl rounded-4xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {navItems.map((item) => {
                const Icon = item.iconName;

                // 🔥 Contact → OPEN OVERLAY
                if (item.action === "overlay") {
                  return (
                    <button
                      key={item.name}
                      onClick={handleContactOpen}
                      className="flex items-center gap-4 text-green-700"
                    >
                      <Icon size={24} />
                      {item.name}
                    </button>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="text-black hover:text-primary transition-colors flex gap-4 items-center"
                  >
                    <Icon size={24} />
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      {/* CONTACT OVERLAY */}
      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

