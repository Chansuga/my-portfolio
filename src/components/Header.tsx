import { profile } from "@/data/site";
import { linkHover } from "@/lib/styles";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/80 backdrop-blur dark:border-white/8 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors ${linkHover}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
