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
            relative px-6 py-2 rounded-full
            backdrop-blur-md
            border
            hover:-translate-y-px
            transition-all duration-300 ease-in-out
            cursor-pointer
            ${
              isActive
                ? `
                  bg-white/40
                  text-white
                  border-white/40
                  shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                `
                : `
                  bg-white/10
                  text-white
                  border-white/20
                  hover:bg-white/20
                  hover:border-white/40
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
