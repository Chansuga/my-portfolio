export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-black/8 px-3 py-1 text-sm text-zinc-700 dark:border-white/12 dark:text-zinc-300">
      {children}
    </li>
  );
}
