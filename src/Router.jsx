import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import OurWork from "./pages/OurWork";
// import Contact from "./pages/Contact";
import App from "./App";
import { AppLayout } from "./components/AppLayout";
import { AboutPage } from "./pages/AboutPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home />, },
      { path: "/aboutus", element: <AboutPage /> },
      { path: "/ourwork", element: <OurWork /> },
    ],
  },
]);
