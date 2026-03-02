import { useEffect } from "react";

export const StructuredData = () => {
    useEffect(() => {
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Movion Pictures",
            "url": "https://movionpictures.com",
            "logo": "https://movionpictures.com/assets/images/logos/favicon.png",
            "sameAs": [
                "https://www.instagram.com/movion_pictures",
                "https://www.youtube.com/@Movion_Pictures",
                "https://www.linkedin.com/company/movionpictures/"
            ],
            "description": "Premier creative studio and production house specializing in cinematic video production and brand storytelling."
        };

        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Video Production",
            "provider": {
                "@type": "Organization",
                "name": "Movion Pictures"
            },
            "areaServed": "Worldwide",
            "description": "Bespoke cinematic video production, editing, color grading, and creative storytelling for brands and individuals."
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify([organizationSchema, serviceSchema]);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};
