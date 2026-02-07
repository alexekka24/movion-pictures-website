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

// export function BentoItem({ children, className }) {
//   return (
//     <a
//       href="#"
//       className={`
//         block               /* 👈 REQUIRED */
//         break-inside-avoid  /* 👈 REQUIRED */
//         relative overflow-hidden rounded-xl
//         bg-neutral-100 dark:bg-neutral-900
//         p-6
//         group
//         mb-8
//         ${className}
//       `}
//     >
//       {children}
//     </a>
//   );
// }
