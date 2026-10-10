import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import Chip from "@/components/Chip";
import SectionHeading from "@/components/SectionHeading";
import { works } from "@/data/site";
import { styles } from "./Works.styles";

function WorkImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={withBasePath(src)}
      alt={alt}
      fill
      sizes="(min-width: 640px) 400px, 100vw"
      className={styles.image}
    />
  );
}

export default function Works() {
  return (
    <section id="works" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading>Works</SectionHeading>
        <div className={styles.grid}>
          {works.map((work) => (
            <article key={work.title} className={styles.card}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{work.title}</h3>
                {work.period && (
                  <span className={styles.period}>{work.period}</span>
                )}
              </div>
              <div
                className={`${styles.imageFrame} ${work.image ? "" : styles.emptyImageFrame}`}
              >
                {work.image ? (
                  work.link ? (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.imageLink}
                    >
                      <WorkImage src={work.image} alt={work.title} />
                    </a>
                  ) : (
                    <WorkImage src={work.image} alt={work.title} />
                  )
                ) : (
                  <span className={styles.noImage}>No Image</span>
                )}
              </div>
              <p className={styles.description}>{work.description}</p>
              <ul className={styles.tagList}>
                {work.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </ul>
              <div className={styles.linksRow}>
                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Site
                  </a>
                )}
                {work.repo && (
                  <a
                    href={work.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    GitHub
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
