import { sectionDivider } from "@/lib/styles";

export const styles = {
  section: `scroll-mt-16 py-20 ${sectionDivider}`,
  container: "mx-auto max-w-4xl px-6",
  grid: "mt-6 grid gap-6 sm:grid-cols-2",
  card:
    "flex flex-col rounded-2xl border border-black/8 p-6 transition-colors hover:border-black/16",
  titleRow: "flex items-baseline justify-between gap-2",
  title: "text-lg font-semibold text-zinc-950",
  period: "shrink-0 text-xs text-zinc-500",
  description:
    "mt-2 flex-1 text-sm leading-6 text-zinc-600",
  tagList: "mt-4 flex flex-wrap gap-2",
  linksRow: "mt-4 flex gap-4 text-sm font-medium",
  link:
    "text-zinc-950 underline underline-offset-4 hover:text-zinc-700",
};
