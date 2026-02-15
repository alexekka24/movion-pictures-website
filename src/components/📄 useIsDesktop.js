// import { useEffect, useState } from "react";

// export default function useIsDesktop() {
//   // ✅ Initialize synchronously (NO effect needed)
//   const [isDesktop, setIsDesktop] = useState(() => {
//     if (typeof window === "undefined") return false;
//     return window.matchMedia("(min-width: 1024px)").matches;
//   });

//   useEffect(() => {
//     const media = window.matchMedia("(min-width: 1024px)");

//     // ✅ Only update state when external system changes
//     const onChange = (e) => setIsDesktop(e.matches);

//     media.addEventListener("change", onChange);
//     return () => media.removeEventListener("change", onChange);
//   }, []);

//   return isDesktop;
// }
