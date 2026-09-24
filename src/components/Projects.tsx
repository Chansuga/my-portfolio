import Chip from "@/components/Chip";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/site";
import { sectionDivider } from "@/lib/styles";

export default function Projects() {
  return (
    <section
      id="projects"
      className={`scroll-mt-16 py-20 ${sectionDivider}`}
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading>Projects</SectionHeading>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-black/8 p-6 transition-colors hover:border-black/16 dark:border-white/10 dark:hover:border-white/20"
            >
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </ul>
              <div className="mt-4 flex gap-4 text-sm font-medium">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-950 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
                  >
                    Live
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-950 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
                  >
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
