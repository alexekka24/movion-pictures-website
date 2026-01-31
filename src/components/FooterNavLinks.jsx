import { NavLink } from "react-router-dom";
import { Home, Info, Briefcase, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", iconName: Home },
  { name: "About Us", href: "/aboutus", iconName: Info },
  { name: "Our Work", href: "/ourwork", iconName: Briefcase },
  { name: "Contact", href: "/contact", iconName: Mail, action: "overlay" },
];

export const FooterNavLinks = ({ onContactClick }) => {
  return (
    <ul className="space-y-3">
      {navItems.map((item) => {
        const Icon = item.iconName;

        if (item.action === "overlay") {
          return (
            <li key={item.name}>
              <button
                onClick={onContactClick}
                className="flex items-center gap-3 text-white/70 hover:text-white transition"
              >
                <Icon size={18} />
                {item.name}
              </button>
            </li>
          );
        }

        return (
          <li key={item.name}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-3 transition ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

