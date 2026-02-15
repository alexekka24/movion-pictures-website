import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import { OurWork } from "./pages/OurWork";
// import App from "./App";
import { AppLayout } from "./components/layout/AppLayout";
import { AboutPage } from "./pages/AboutPage";
import { ProcessAndPricing } from "./pages/Process&Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home />, handle: { title: "Movion Pictures"} },
      { path: "processandpricing", element: <ProcessAndPricing />, handle: { title: "Movion Pictures | Process and Pricing"}  },
      { path: "ourwork", element: <OurWork />, handle: { title: "Movion Pictures | Our Work"}  },
    ],
  },
]);
