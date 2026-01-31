const baseStyles = `
  relative inline-flex items-center justify-center
  rounded-4xl px-5 py-2.5
  font-medium tracking-wide
  backdrop-blur-md
  transition-all duration-200 ease-out
  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
  active:scale-[0.97]
  disabled:opacity-50 disabled:cursor-not-allowed
  cursor-pointer
`;

const variants = {
  primary: `
    bg-white/15 text-white
    shadow-[0_8px_24px_rgba(0,0,0,0.25)]
    hover:bg-white/20
    hover:bg-white/20
    hover:-translate-y-0.5
    hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
    active:translate-y-0
    active:scale-[0.97]
  `,
  surface: `
    bg-white/10 text-white
    shadow-[0_6px_18px_rgba(0,0,0,0.2)]
    hover:bg-white/15
    hover:-translate-y-0.5
    hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]
    active:scale-[0.97]
  `,
  outline: `
    bg-white/5 text-white
    border border-white/30
    hover:bg-white/10
    hover:border-white/50
    hover:-translate-y-0.5
    hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)]
    active:scale-[0.97]
  `,
  primary_black: `
    bg-black/15 text-black
    shadow-[0_8px_24px_rgba(255,255,255,0.25)]
    hover:bg-black/20
    hover:bg-black/20
    hover:-translate-y-0.5
    hover:shadow-[0_10px_30px_rgba(255,255,255,0.35)]
    active:translate-y-0
    active:scale-[0.97]
  `,
  surface_black: `
    bg-black/10 text-black
    shadow-[0_6px_18px_rgba(255,255,255,0.2)]
    hover:bg-black/15
    hover:-translate-y-0.5
    hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)]
    active:scale-[0.97]
  `,
  outline_black: `
    bg-black/5 text-black
    border border-black/30
    hover:bg-black/10
    hover:border-black/50
    hover:-translate-y-0.5
    hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]
    active:scale-[0.97]
  `,
};

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg px-6 py-3",
  ex_lg: "text-2xl px-9 py-6 rounded-6xl"
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {/* Glass highlight */}
      <span
        className="absolute inset-0 
          opacity-50
          transition-opacity duration-200
          group-hover:opacity-70"
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 white">
        {children}
      </span>
    </button>
  );
};

export default Button;
