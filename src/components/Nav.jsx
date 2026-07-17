import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data";
import { scrollToSection } from "../utils";


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <nav className="sp-nav">
        <div className="sp-logo sp-mono">
          SP<span>.</span>dev
        </div>

        <div className="sp-nav-links">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              className="sp-nav-link"
              onClick={() => handleClick(l.id)}
            >
              {l.label.split("").map((char, index) => (
                <span
                  key={index}
                  className="nav-letter"
                  style={{ transitionDelay: `${index * 35}ms` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </button>
          ))}
        </div>

        <button
          className="sp-nav-mobile-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div className={`sp-nav-mobile-panel ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <button key={l.id} onClick={() => handleClick(l.id)}>
            {l.label}
          </button>
        ))}
      </div>
    </>
  );
}