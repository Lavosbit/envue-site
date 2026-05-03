import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import logo from "../assets/logo.png";
import menuIcon from "../assets/images/menu.svg";
import closeIcon from "../assets/images/x.svg";

const overlayVariants: Variants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const linkVariants: Variants = {
  closed: {
    opacity: 0,
    y: 18,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="#" aria-label="Envue home">
          <img src={logo} alt="envue logo" />
        </a>

        <button
          className="menuToggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <motion.img
            key={menuOpen ? "close" : "menu"}
            src={menuOpen ? closeIcon : menuIcon}
            alt=""
            initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          />
        </button>
        <nav className="nav desktopNav">
          <motion.a whileHover={{ y: -1 }} href="#shop">
            Shop by Category
          </motion.a>
          <motion.a whileHover={{ y: -1 }} href="#help">
            Help & Info
          </motion.a>
          <motion.a whileHover={{ y: -1 }} href="#about">
            About Us
          </motion.a>
          <motion.a whileHover={{ y: -1 }} className="navCta" href="#account">
            Create Account
          </motion.a>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="mobileNav navOpen"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.a
                variants={linkVariants}
                href="#shop"
                onClick={closeMenu}
              >
                Shop by Category
              </motion.a>

              <motion.a
                variants={linkVariants}
                href="#help"
                onClick={closeMenu}
              >
                Help & Info
              </motion.a>

              <motion.a
                variants={linkVariants}
                href="#about"
                onClick={closeMenu}
              >
                About Us
              </motion.a>

              <motion.a
                variants={linkVariants}
                className="navCta"
                href="#account"
                onClick={closeMenu}
              >
                Create Account
              </motion.a>

              <motion.div className="navUtility" variants={linkVariants}>
                <a href="#contact" onClick={closeMenu}>
                  Contact Us
                </a>

                <a href="#returns" onClick={closeMenu}>
                  Returns & Exchanges
                </a>

                <a href="#privacy" onClick={closeMenu}>
                  Privacy Policy
                </a>

                <div className="navSocial">
                  <a href="#">Instagram</a>

                  <a href="#">Facebook</a>

                  <a href="#">Twitter/X</a>
                </div>

                <p className="navCopyright">© envue 2026</p>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
