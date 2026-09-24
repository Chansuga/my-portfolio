import { linkHover } from "@/lib/styles";

export const styles = {
  header:
    "sticky top-0 z-50 border-b border-black/8 bg-white/80 backdrop-blur dark:border-white/8 dark:bg-black/80",
  container: "mx-auto flex h-16 max-w-4xl items-center justify-between px-6",
  logo: "font-semibold tracking-tight",
  nav: "flex gap-6 text-sm text-zinc-600 dark:text-zinc-400",
  navLink: `transition-colors ${linkHover}`,
};
