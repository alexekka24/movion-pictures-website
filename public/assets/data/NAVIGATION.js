import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export const NAVIGATION = {
  images: [
    { id: 1, src: "/assets/images/image1.jpg" },
    { id: 2, src: "/assets/images/image2.jpg" },
    { id: 3, src: "/assets/images/image3.jpg" },
    { id: 4, src: "/assets/images/image4.jpg" },
  ],
  navItems: [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Our Work",
      href: "/ourwork",
    },
    {
      id: 3,
      name: "Process and Pricing",
      href: "/processandpricing",
    },
    {
      id: 4,
      name: "Contact",
      href: "/contact",
      action: "overlay",
    },
  ],

  socials: [
      {
        name: "YouTube",
        url: "https://www.youtube.com/@Movion_Pictures",
        icon: FaYoutube,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/movion_pictures",
        icon: FaInstagram,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/movionpictures/",
        icon: FaLinkedin,
      },
    ],
};
