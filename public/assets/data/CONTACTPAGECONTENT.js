import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export const ContactPageContent = {
  headline: "Let’s create something together",

  email: {
    label: "contact@movionpictures.in",
    value: "contact@movionpictures.in",
  },

  phone: {
    label: "+91 8928741497",
    value: "918928741497",
  },

  location: "Based in India · Working worldwide",

  services: ["Brand Films", "Commercials", "Music Videos", "Social Content"],

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

  whatsapp: {
    number: "918928741497",
    message: "Hello Movion Pictures 👋 I'd love to explore a potential collaboration.",
  },

  availability: "Currently accepting projects",
};