import Image from "next/image";
import { mailto, profile } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={112}
          height={112}
          priority
          className="h-28 w-28 rounded-full object-cover ring-1 ring-black/8 dark:ring-white/12"
        />
        <p className="mt-6 text-sm font-medium text-zinc-500 dark:text-zinc-500">
          {profile.role}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {profile.tagline}
        </p>
        <div className="mt-8 flex gap-4 text-sm font-medium">
          <a
            href="#projects"
            className="rounded-full bg-zinc-950 px-5 py-2.5 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            View Projects
          </a>
          <a
            href={mailto(profile.social.email)}
            className="rounded-full border border-zinc-950/10 px-5 py-2.5 text-zinc-950 transition-colors hover:bg-zinc-950/5 dark:border-white/15 dark:text-zinc-50 dark:hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
