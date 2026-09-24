export default function SectionHeading({
  as: Tag = "h2",
  id,
  className = "",
  children,
}: {
  as?: "h2" | "h3";
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      id={id}
      className={`scroll-mt-16 text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500 ${className}`}
    >
      {children}
    </Tag>
  );
}
