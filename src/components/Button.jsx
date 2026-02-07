import { useRef } from "react";
import gsap from "gsap";
//inline-flex items-center justify-center
const baseStyles = `
  relative 
  cursor-pointer select-none
  font-medium tracking-wide
  transition-all duration-200 ease-out
  focus:outline-none
  disabled:opacity-50 disabled:cursor-not-allowed
  group
`;

const variants = {
  primary: `
    rounded-4xl px-5 py-2.5
    bg-white/15 text-white
    backdrop-blur-md
    shadow-[0_8px_24px_rgba(0,0,0,0.25)]
    hover:bg-white/20
    hover:-translate-y-0.5
    hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
    active:scale-[0.97]
  `,
  surface: `
    rounded-4xl px-5 py-2.5
    bg-white/10 text-white
    backdrop-blur-md
    shadow-[0_6px_18px_rgba(0,0,0,0.2)]
    hover:bg-white/15
    hover:-translate-y-0.5
    hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]
    active:scale-[0.97]
  `,
  outline: `
    rounded-4xl px-5 py-2.5
    bg-white/5 text-white
    border border-white/30
    hover:bg-white/10 hover:border-white/50
    hover:-translate-y-0.5
    hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)]
    active:scale-[0.97]
  `,
  primary_black: `
    rounded-4xl px-5 py-2.5
    bg-black/15 text-black
    backdrop-blur-md
    shadow-[0_8px_24px_rgba(255,255,255,0.25)]
    hover:bg-black/20
    hover:-translate-y-0.5
    hover:shadow-[0_10px_30px_rgba(255,255,255,0.35)]
    active:scale-[0.97]
  `,
  surface_black: `
    rounded-4xl px-5 py-2.5
    bg-black/10 text-black
    backdrop-blur-md
    shadow-[0_6px_18px_rgba(255,255,255,0.2)]
    hover:bg-black/15
    hover:-translate-y-0.5
    hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)]
    active:scale-[0.97]
  `,
  outline_black: `
    rounded-4xl px-5 py-2.5
    bg-black/5 text-black
    border border-black/30
    hover:bg-black/10 hover:border-black/50
    hover:-translate-y-0.5
    hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]
    active:scale-[0.97]
  `,

  // ✅ TEXT ONLY
  simple_black: `
    bg-transparent
    p-0
    hover:opacity-80
  `,
  simple: `
    bg-transparent
    p-0
    hover:opacity-80
    text-white
  `,
};

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "lg:text-5xl text-4xl",
  ex_lg: "lg:text-6xl md:text-4xl text-3xl",
};

const Button = ({
  text,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const rollRef = useRef(null);

  const onEnter = () => {
    if (!rollRef.current) return;
    gsap.to(rollRef.current, {
      yPercent: -50,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    if (!rollRef.current) return;
    gsap.to(rollRef.current, {
      yPercent: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <button
      {...props}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {/* Content mask */}
      <span className="relative z-10 block overflow-hidden leading-[1.2] h-[1.2em]">
        {text ? (
          <span ref={rollRef} className="block">
            <span className="block h-[1.2em]">{text}</span>
            <span className="block h-[1.2em]">{text}</span>
          </span>
        ) : (
          children
        )}
      </span>
    </button>
  );
};

export default Button;
