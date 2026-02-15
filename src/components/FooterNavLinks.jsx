import { NavLink } from "react-router-dom";
import { Home, Info, Briefcase, Mail } from "lucide-react";
import Button from "./common/Button";
import { NAVIGATION } from "../../public/assets/data/NAVIGATION";

export const FooterNavLinks = ({ onContactClick }) => {
  
  return (
    <ul className="space-y-3">
      {NAVIGATION.navItems.map((item) => {
        const Icon = item.iconName;

        // Contact → OPEN OVERLAY
            if (item.action === "overlay") {
              return (
                <a className="flex" key={item.name}>
                  <Button
                    key={item.name}
                    // onClick={handleContactOpen}
                    className="text-white hover:text-white/60 transition-colors"
                    variant="simple"
                    size="ex_md"
                    text={item.name.toUpperCase()}
                  ></Button>
                </a>
              );
            }

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
              <Button text={item.name.toUpperCase()} size="ex_md" variant="simple" />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
