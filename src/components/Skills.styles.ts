import { sectionDivider } from "@/lib/styles";

export const styles = {
  section: `scroll-mt-16 py-20 ${sectionDivider}`,
  container: "mx-auto max-w-4xl px-6",
  grid: "mt-6 grid gap-8 sm:grid-cols-2",
  categoryTitle: "text-sm font-semibold text-zinc-950 dark:text-zinc-50",
  chipList: "mt-3 flex flex-wrap gap-2",
  nestedWrap: "mt-3",
  nestedLabel: "text-xs font-medium text-zinc-500 dark:text-zinc-500",
  nestedChipList: "mt-2 flex flex-wrap gap-2",
  certHeading: "mt-14",
  certGrid: "mt-6 grid gap-3 sm:grid-cols-2",
  certItem:
    "flex items-start gap-3 rounded-xl border border-black/8 p-4 dark:border-white/10",
  certIcon:
    "mt-0.5 h-5 w-5 shrink-0 fill-none stroke-zinc-400 dark:stroke-zinc-600",
  certName:
    "text-sm font-medium leading-5 text-zinc-950 dark:text-zinc-50",
  certOrg: "mt-1 text-xs text-zinc-500 dark:text-zinc-500",
};
