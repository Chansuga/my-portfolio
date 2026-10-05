export const styles = {
  section: "scroll-mt-16 py-20",
  container: "mx-auto max-w-4xl px-6",
  intro: "mt-6 flex flex-col items-center gap-8 sm:flex-row",
  photo: "w-40 shrink-0 object-cover sm:w-48",
  bio: "text-lg leading-8 text-zinc-700",
  location: "mt-4 text-sm text-zinc-500",
  careerHeading: "mt-12",
  timeline: "mt-6 flex flex-col gap-6",
  timelineItem: "flex gap-4",
  timelineMarkerWrap: "flex flex-col items-center",
  timelineDot: (isCurrent: boolean) =>
    `mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
      isCurrent ? "bg-zinc-950" : "bg-zinc-300"
    }`,
  timelineLine: "mt-1 w-px flex-1 bg-black/8",
  timelineContent: "pb-2",
  timelinePeriod: "text-xs text-zinc-500",
  timelineOrg: "mt-0.5 font-medium text-zinc-950",
  timelineRole: "text-sm text-zinc-500",
};
