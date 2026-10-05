"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/site";
import { styles } from "./Header.styles";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#works", label: "Works" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#top" className={styles.logo}>
          {profile.name}
        </a>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span
            className={`${styles.menuBar} ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`${styles.menuBar} ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`${styles.menuBar} ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>
      {isOpen && (
        <nav id="mobile-nav" className={styles.mobileNav}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
