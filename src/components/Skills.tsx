import Chip from "@/components/Chip";
import SectionHeading from "@/components/SectionHeading";
import { certifications, skills } from "@/data/site";
import { sectionDivider } from "@/lib/styles";

export default function Skills() {
  return (
    <section id="skills" className={`scroll-mt-16 py-20 ${sectionDivider}`}>
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading>Skills</SectionHeading>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {skills.map((group) => {
            const flat = group.items.filter((item) => !item.items?.length);
            const nested = group.items.filter((item) => item.items?.length);
            return (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {group.category}
                </h3>
                {flat.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {flat.map((item) => (
                      <Chip key={item.name}>{item.name}</Chip>
                    ))}
                  </ul>
                )}
                {nested.map((item) => (
                  <div key={item.name} className="mt-3">
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
                      {item.name}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {item.items!.map((sub) => (
                        <Chip key={sub}>{sub}</Chip>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <SectionHeading as="h3" id="certifications" className="mt-14">
          Certifications
        </SectionHeading>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="flex items-start gap-3 rounded-xl border border-black/8 p-4 dark:border-white/10"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 fill-none stroke-zinc-400 dark:stroke-zinc-600"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="9" r="6" />
                <path d="M8.5 14 7 22l5-2.5L17 22l-1.5-8" />
              </svg>
              <div>
                <p className="text-sm font-medium leading-5 text-zinc-950 dark:text-zinc-50">
                  {cert.name}
                </p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                  {cert.org}
                  {cert.note ? ` ・ ${cert.note}` : ""}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
