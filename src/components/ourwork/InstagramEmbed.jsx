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
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#000",
        margin: "0 auto",
        maxWidth: "400px",
        width: "100%",
        minWidth: "300px"
      }}
    />
  );
};
