export function BentoItem({ children, className, onClick }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      }}
      className={`
        relative overflow-hidden rounded-3xl
        bg-neutral-100 dark:bg-neutral-900
        p-6 group
        max-md:h-60
        shadow-black/60 shadow-lg
        transition-all duration-500
        hover:shadow-2xl hover:shadow-black/40
        ${className}
      `}
    >
      {children}
    </a>
  );
}

