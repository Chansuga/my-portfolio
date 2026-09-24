import Chip from "@/components/Chip";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/site";
import { styles } from "./Projects.styles";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading>Projects</SectionHeading>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{project.title}</h3>
                {project.period && (
                  <span className={styles.period}>{project.period}</span>
                )}
              </div>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.tagList}>
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </ul>
              <div className={styles.linksRow}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Live
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
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
