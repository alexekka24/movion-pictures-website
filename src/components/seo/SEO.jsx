export const SEO = ({ title, description, canonical, ogImage, twitterImage, type = "website" }) => {
    const siteName = "Movion Pictures";
    const fullTitle = `${title} | ${siteName}`;
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : "https://movionpictures.com";
    const fullCanonical = canonical ? `${baseUrl}${canonical === "/" ? "" : canonical}` : baseUrl;
    const defaultImage = `${baseUrl}/assets/images/og-image.jpg`;

    return (
        <>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage || defaultImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullCanonical} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={twitterImage || ogImage || defaultImage} />
        </>
    );
};
