import { profile } from "@/data/site";
import { styles } from "./Header.styles";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
];

export default function Header() {
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
      </div>
    </header>
  );
}
