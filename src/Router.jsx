import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import {OurWork} from "./pages/OurWork";
// import Contact from "./pages/Contact";
import App from "./App";
import { AppLayout } from "./components/AppLayout";
import { AboutPage } from "./pages/AboutPage";
import { ProcessAndPricing } from "./pages/Process&Pricing";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home />, },
      { path: "/processandpricing", element: <ProcessAndPricing /> },
      { path: "/ourwork", element: <OurWork /> },
    ],
  },
]);
