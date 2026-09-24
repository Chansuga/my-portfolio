import { linkHover, sectionDivider } from "@/lib/styles";

export const styles = {
  footer: `py-10 ${sectionDivider}`,
  container:
    "mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-sm text-zinc-500 sm:flex-row sm:justify-between dark:text-zinc-500",
  socialWrap: "flex gap-4",
  githubLink: `flex items-center gap-1.5 ${linkHover}`,
  githubIcon: "h-4 w-4 fill-current",
  emailLink: linkHover,
};
