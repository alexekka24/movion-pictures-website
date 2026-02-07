import { NavLink } from "react-router-dom";
import { Home, Info, Briefcase, Mail } from "lucide-react";
import Button from "./Button";

const navItems = [
  { name: "Home", href: "/", iconName: Home },
  { name: "About Us", href: "/aboutus", iconName: Info },
  { name: "Our Work", href: "/ourwork", iconName: Briefcase },
  // { name: "Contact", href: "/contact", iconName: Mail, action: "overlay" },
];

export const FooterNavLinks = ({ onContactClick }) => {
  return (
    <ul className="space-y-3">
      {navItems.map((item) => {
        const Icon = item.iconName;

        return (
          <li key={item.name}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-3 transition ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
            >
              <Button text={item.name.toUpperCase()} size="md" variant="simple" />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
