import { useEffect, useRef } from "react";

export const InstagramEmbed = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => window.instgrm.Embeds.process();
    } else {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <blockquote
      ref={ref}
      className="instagram-media w-full h-full"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ background: "#000", margin: 0 }}
    />
  );
};
