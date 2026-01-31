const FILTERS = [
  "ALL",
  "BEAUTY & LIFESTYLE",
  "AD FILMS / BRAND FILMS ",
  "CORPORATE & INNOVATION",
  "NARRATIVE",
  "SPEC AD & CONCEPTS",
];

export const FilterTabs = ({ active, setActive }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {FILTERS.map((filter) => {
        const isActive = active === filter;

        return (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`
              text-xl
              relative px-8 py-4 rounded-full
              backdrop-blur-md
              border
              hover:-translate-y-px
              transition-all duration-300 ease-in-out
              cursor-pointer
              ${
                isActive
                  ? `
                    bg-white
                    text-black
                    border-white/40
                  `
                  : `
                    text-white
                    border-white/40
                    hover:border-white/80
                  `
              }
            `}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};
