import { useEffect, useRef } from "react";

export const InstagramEmbed = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    const scriptId = "instagram-embed-script";
    let script = document.getElementById(scriptId);

    if (!window.instgrm) {
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
      
      const handleLoad = () => {
        if (window.instgrm) window.instgrm.Embeds.process();
      };

      script.addEventListener("load", handleLoad);
      return () => script.removeEventListener("load", handleLoad);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <blockquote
      key={url}
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
