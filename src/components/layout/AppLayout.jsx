import { useEffect } from "react";
import { Outlet, useLocation, useMatches, ScrollRestoration } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloatingButton } from "./WhatsAppFloatingButton";

export const AppLayout = () => {
  const location = useLocation();
  const matches = useMatches(); 

  useEffect(() => {
    const lastMatch = matches[matches.length - 1];
    const title = lastMatch?.handle?.title;

    if (title) document.title = title;
  }, [matches]);

  const isDarkPage =
    location.pathname === "/ourwork" ||
    location.pathname === "/contact";

  return (
    <div className={`min-h-screen ${isDarkPage ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />

      <main className="pt-20 md:pt-0">
        <ScrollRestoration />
        <Outlet />
      </main>

      <Footer pageTheme={isDarkPage ? "dark" : "light"} />

      <WhatsAppFloatingButton />
    </div>
  );
};

