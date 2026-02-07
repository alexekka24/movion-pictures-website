import { NavLink } from "react-router-dom";
import Button from "../components/Button";

export const ProjectCTA = ({ theme = "dark" }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`
        relative py-32 overflow-hidden
        ${isDark ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      {/* Background Accent */}
      <div className="absolute inset-0">
        <div
          className={`
            absolute -top-32 -left-32 w-125 h-125 rounded-full blur-3xl
            ${isDark ? "bg-yellow-400/10" : "bg-green-500/10"}
          `}
        />
        <div
          className={`
            absolute -bottom-32 -right-32 w-125 h-125 rounded-full blur-3xl
            ${isDark ? "bg-blue-300/10" : "bg-yellow-400/10"}
          `}
        />
      </div>

      {/* Glass Card */}
      <div className="relative max-w-5xl mx-auto px-6">
        <div
          className={`
            relative rounded-3xl p-12 md:p-16 text-center
            border backdrop-blur-xl shadow-2xl
            ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            }
          `}
        >
          {/* subtle shine */}
          <div
            className={`
              pointer-events-none absolute inset-0 rounded-3xl
              ${
                isDark
                  ? "bg-gradient-to-br from-white/10 via-transparent to-transparent"
                  : "bg-gradient-to-br from-black/10 via-transparent to-transparent"
              }
            `}
          />

          <div className="relative">
            <p
              className={`
                text-sm uppercase tracking-[0.3em] font-semibold mb-4
                ${isDark ? "text-green-400" : "text-green-700"}
              `}
            >
              Ready when you are
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Let’s build something{" "}
              <span className={isDark ? "text-green-400" : "text-green-700"}>
                meaningful
              </span>
              .
            </h2>

            <p
              className={`
                text-lg md:text-xl max-w-2xl mx-auto mb-10
                ${isDark ? "text-white/70" : "text-black/70"}
              `}
            >
              Whether it’s a brand film, commercial, or a creative campaign —
              let’s turn your idea into something people remember.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary */}
              <NavLink
                to="/contact"
                className={`
                  inline-flex items-center justify-center
                  px-10 py-4 rounded-full font-semibold
                  ${
                    isDark
                      ? "bg-green-500 text-white hover:bg-green-400 shadow-green-500/20"
                      : "bg-green-700 text-white hover:bg-green-800 shadow-green-700/30"
                  }
                    `}
              >
                <Button
                  variant="simple_black"
                  size="md"
                  text="Start a Conversation"
                />
              </NavLink>

              {/* Secondary */}
              <NavLink
                to="/ourwork"
                className={`
                  inline-flex items-center justify-center
                  px-10 py-4 rounded-full font-semibold
                  ${
                    isDark
                      ? "border-white/20 text-white hover:bg-white hover:text-black"
                      : "border-white/20 text-black hover:bg-black hover:text-white"
                  }
                `}
              >
                <Button variant="simple_black" text="View Work" size="md" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
