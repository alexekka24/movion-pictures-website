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
        border backdrop-blur-xl shadow-2xl
        ${className}
      `}
    >
      {children}
    </a>
  );
}

