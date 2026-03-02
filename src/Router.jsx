import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import { OurWork } from "./pages/OurWork";
import { AppLayout } from "./components/layout/AppLayout";
import { ProcessAndPricing } from "./pages/Process&Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          title: "Movion Pictures | Cinematic Video Production & Brand Storytelling",
          description: "Premier creative studio specializing in cinematic video production, brand storytelling, and high-impact visual content.",
          canonical: "/"
        }
      },
      {
        path: "process-and-pricing",
        element: <ProcessAndPricing />,
        handle: {
          title: "Process & Pricing | Movion Pictures",
          description: "Our seamless production workflow. Transparent, efficient, and uncompromising cinematic excellence from concept to delivery.",
          canonical: "/process-and-pricing"
        }
      },
      {
        path: "ourwork",
        element: <OurWork />,
        handle: {
          title: "Our Work | Movion Pictures Cinematic Portfolio",
          description: "Explore our portfolio of cinematic masterpieces, brand films, and award-winning visual storytelling.",
          canonical: "/ourwork"
        }
      },
    ],
  },
]);
