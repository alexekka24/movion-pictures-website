import { Outlet, useLocation, useMatches, ScrollRestoration } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloatingButton } from "./WhatsAppFloatingButton";
import { StructuredData } from "../seo/StructuredData";
import { SEO } from "../seo/SEO";

export const AppLayout = () => {
  const location = useLocation();
  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];
  const { title, description, canonical } = lastMatch?.handle || {};

  const isDarkPage =
    location.pathname === "/ourwork" ||
    location.pathname === "/contact";

  return (
    <div className={`min-h-screen ${isDarkPage ? "bg-black text-white" : "bg-white text-black"}`}>
      <SEO
        title={title}
        description={description}
        canonical={canonical}
      />
      <StructuredData />
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
