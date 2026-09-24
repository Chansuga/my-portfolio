import SectionHeading from "@/components/SectionHeading";
import { career, profile } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading>About</SectionHeading>
        <p className="mt-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          {profile.bio}
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
          {profile.location}
        </p>

        <SectionHeading as="h3" className="mt-12">
          Career
        </SectionHeading>
        <ol className="mt-6 flex flex-col gap-6">
          {career.map((item, index) => {
            const isCurrent = index === career.length - 1;
            return (
              <li key={item.org} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                      isCurrent
                        ? "bg-zinc-950 dark:bg-zinc-50"
                        : "bg-zinc-300 dark:bg-zinc-700"
                    }`}
                  />
                  {index < career.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-black/8 dark:bg-white/12" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">
                    {item.period}
                  </p>
                  <p className="mt-0.5 font-medium text-zinc-950 dark:text-zinc-50">
                    {item.org}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    {item.role}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
