import Marquee from "react-fast-marquee";
import { CLIENTS } from "../../../public/assets/data/CLIENTS";

export const MarqueeComponent = ({ content }) => {
  return (
    <section className="bg-white">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
          {content.preTitle}
        </p>

        <h1 className="text-4xl md:text-8xl font-semibold tracking-tight text-gray-900">
          {content.title}
        </h1>

        <p className="mt-4 text-base md:text-lg text-gray-600">
          {content.description}
        </p>
      </div>

      <Marquee
        direction="left"
        gradient={true}
        gradientWidth={100}
        speed={100}
        gradientColor="white"
        className="bg-white"
      >
        {CLIENTS.map((logo, index) => (
          <div
            key={index}
            className="mx-6 md:mx-12 flex items-center justify-center w-32 h-16 md:w-60 md:h-24 shrink-0"
          >
            <img
              loading="lazy"
              decoding="async"
              src={logo}
              alt={`Client ${index}`}
              className="max-h-full max-w-full w-auto object-contain grayscale opacity-60 
                           hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};
