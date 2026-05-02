import { useState } from "react";
import logo from "../assets/logo.png";
import menuIcon from "../assets/images/menu.svg";
import closeIcon from "../assets/images/x.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="#">
          <img src={logo} alt="envue logo" />
        </a>

        <button
          className="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <img src={menuOpen ? closeIcon : menuIcon} alt="" />
        </button>

        <nav className={`nav ${menuOpen ? "navOpen" : ""}`}>
          <a href="#shop" onClick={() => setMenuOpen(false)}>
            Shop by Category
          </a>
          <a href="#help" onClick={() => setMenuOpen(false)}>
            Help & Info
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Us
          </a>

          <a
            className="navCta"
            href="#account"
            onClick={() => setMenuOpen(false)}
          >
            Create Account
          </a>
        </nav>
      </div>
    </header>
  );
}
