"use client";

import { useEffect, useRef, useState } from "react";
import Chip from "@/components/Chip";
import SectionHeading from "@/components/SectionHeading";
import { projects, type Project } from "@/data/site";
import { styles } from "./Projects.styles";

function ProjectMeta({ project }: { project: Project }) {
  return (
    <>
      {project.period && <p className={styles.period}>{project.period}</p>}
      <dl className={styles.meta}>
        <div className={styles.metaRow}>
          <dt className={styles.metaLabel}>規模</dt>
          <dd className={styles.metaValue}>{project.teamSize}</dd>
        </div>
        <div className={styles.metaRow}>
          <dt className={styles.metaLabel}>ポジション</dt>
          <dd className={styles.metaValue}>{project.position}</dd>
        </div>
      </dl>
      <ul className={styles.tagList}>
        {project.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </ul>
    </>
  );
}

function DetailList({ heading, items }: { heading: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <section className={styles.detailSection}>
      <h4 className={styles.detailHeading}>{heading}</h4>
      <ul className={styles.detailList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selected) dialogRef.current?.showModal();
  }, [selected]);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading>Projects</SectionHeading>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <h3 className={styles.title}>
                <button
                  type="button"
                  aria-haspopup="dialog"
                  className={styles.cardButton}
                  onClick={() => setSelected(project)}
                >
                  {project.title}
                </button>
              </h3>
              <ProjectMeta project={project} />
            </article>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        className={styles.dialog}
        onClose={() => setSelected(null)}
        // 枠の外（背景）をクリックしたときだけ閉じる
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
      >
        {selected && (
          <div className={styles.dialogInner}>
            <div className={styles.dialogHeader}>
              <h3 id="project-dialog-title" className={styles.title}>
                {selected.title}
              </h3>
              <button
                type="button"
                aria-label="閉じる"
                className={styles.closeButton}
                onClick={() => dialogRef.current?.close()}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={styles.closeIcon}
                >
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <div className={styles.dialogBody}>
              <ProjectMeta project={selected} />
              <section className={styles.detailSection}>
                <h4 className={styles.detailHeading}>概要</h4>
                <p className={styles.detailText}>{selected.overview}</p>
              </section>
              <DetailList
                heading="担当業務"
                items={selected.responsibilities}
              />
              <DetailList heading="成果・工夫" items={selected.achievements} />
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
