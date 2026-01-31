export function BentoItem({ children, className }) {
  return (
    <a
      href="#"
      className={`
        relative overflow-hidden rounded-xl
        bg-neutral-100 dark:bg-neutral-900
        p-6 group
        max-md:h-60
        ${className}
      `}
    >
      {children}
    </a>
  );
}
