import React from "react";

const InfiniteMarquee = () => {
  const items = [
    "/src/assets/images/clients/indian-army.png",
    "/src/assets/images/clients/indian-army.png",
    "/src/assets/images/clients/indian-army.png",
    "/src/assets/images/clients/indian-army.png",
    "/src/assets/images/clients/indian-army.png",
  ];

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Optional fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10" />

      <div
        className="
          flex w-max
          animate-[marquee_18s_linear_infinite]
          hover:[animation-play-state:paused]
          will-change-transform
        "
      >
        {[...items, ...items].map((src, idx) => (
          <div
            key={idx}
            className="flex shrink-0 items-center justify-center px-12"
          >
            <img
              src={src}
              alt=""
              className="
                h-40 md:h-60
                grayscale opacity-70
                transition-all duration-300 ease-out
                hover:scale-110 hover:grayscale-0 hover:opacity-100
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
