// import { Header } from "./Header";
// import { Outlet, useNavigation } from "react-router-dom";
// import { Footer } from "./Footer";
// import WhatsAppFloatingButton from "./WhatsAppFloatingButton";

// export const AppLayout = () => {
//   const navigation = useNavigation();
//   // console.log(navigation);

//   if (navigation.state === "loading") return <h1>Loading...</h1>;

//   return (
//     <>
//       <div className="min-h-screen text-foreground">
//         <Header />
//         <main className="pt-[80px] md:pt-0">
//           <Outlet />
//         </main>
//         <Footer />
//         <WhatsAppFloatingButton />
//       </div>
//     </>
//   );
// };

import { Header } from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";

export const AppLayout = () => {
  const location = useLocation();

  const isDarkPage =
    location.pathname === "/ourwork" ||
    location.pathname === "/contact";

  return (
    <div className={`min-h-screen ${isDarkPage ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />

      <main className="pt-[80px] md:pt-0">
        <Outlet />
      </main>

      <Footer pageTheme={isDarkPage ? "dark" : "light"} />

      <WhatsAppFloatingButton />
    </div>
  );
};

