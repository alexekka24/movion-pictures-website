import { useEffect } from "react";
import { Outlet, useLocation, useMatches, ScrollRestoration } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloatingButton } from "./WhatsAppFloatingButton";
import { StructuredData } from "../seo/StructuredData";

export const AppLayout = () => {
  const location = useLocation();
  const matches = useMatches();

  useEffect(() => {
    const lastMatch = matches[matches.length - 1];
    const { title, description, canonical } = lastMatch?.handle || {};

    if (title) {
      document.title = title;
    }

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    // Update OG & Twitter titles/descriptions
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (ogTitle && title) ogTitle.setAttribute("content", title);
    if (twitterTitle && title) twitterTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (ogDesc && description) ogDesc.setAttribute("content", description);
    if (twitterDesc && description) twitterDesc.setAttribute("content", description);

    // Update Canonical URL
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag && canonical) {
      const baseUrl = "https://movionpictures.com";
      canonicalTag.setAttribute("href", baseUrl + (canonical === "/" ? "" : canonical));
    }
  }, [matches]);

  const isDarkPage =
    location.pathname === "/ourwork" ||
    location.pathname === "/contact";

  return (
    <div className={`min-h-screen ${isDarkPage ? "bg-black text-white" : "bg-white text-black"}`}>
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
