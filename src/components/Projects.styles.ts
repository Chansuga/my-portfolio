import { sectionDivider } from "@/lib/styles";

export const styles = {
  section: `scroll-mt-16 py-20 ${sectionDivider}`,
  container: "mx-auto max-w-4xl px-6",
  grid: "mt-6 grid gap-6 sm:grid-cols-2",
  card:
    "relative flex flex-col rounded-2xl border border-black/8 p-6 transition-colors hover:border-black/16 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-zinc-950",
  // カード全体をクリックできるよう、疑似要素でカードを覆う
  cardButton:
    "cursor-pointer text-left after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none",
  title: "text-lg font-semibold text-zinc-950",
  period: "mt-1 text-xs text-zinc-500",
  meta: "mt-3 flex flex-col gap-1 text-sm",
  metaRow: "flex gap-3",
  metaLabel: "w-20 shrink-0 text-zinc-500",
  metaValue: "text-zinc-700",
  tagList: "mt-4 flex flex-wrap gap-2",
  dialog:
    "m-auto h-[min(480px,calc(100dvh-2rem))] w-[min(640px,calc(100vw-2rem))] max-h-none max-w-none rounded-2xl bg-white shadow-xl backdrop:bg-black/50",
  dialogInner: "flex h-full flex-col",
  dialogHeader:
    "flex items-start justify-between gap-4 border-b border-black/8 px-6 py-4",
  closeButton:
    "-mr-2 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950",
  closeIcon: "h-5 w-5 fill-none stroke-current stroke-2",
  dialogBody: "flex-1 overflow-y-auto px-6 py-5",
  detailSection: "mt-6",
  detailHeading: "text-sm font-semibold text-zinc-950",
  detailText: "mt-2 text-sm leading-6 text-zinc-600",
  detailList:
    "mt-2 flex list-disc flex-col gap-1 pl-5 text-sm leading-6 text-zinc-600",
};
