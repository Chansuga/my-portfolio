import Chip from "@/components/Chip";
import SectionHeading from "@/components/SectionHeading";
import { certifications, skills } from "@/data/site";
import { styles } from "./Skills.styles";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading>Skills</SectionHeading>
        <div className={styles.grid}>
          {skills.map((group) => {
            const flat = group.items.filter((item) => !item.items?.length);
            const nested = group.items.filter((item) => item.items?.length);
            return (
              <div key={group.category}>
                <h3 className={styles.categoryTitle}>{group.category}</h3>
                {flat.length > 0 && (
                  <ul className={styles.chipList}>
                    {flat.map((item) => (
                      <Chip key={item.name}>{item.name}</Chip>
                    ))}
                  </ul>
                )}
                {nested.map((item) => (
                  <div key={item.name} className={styles.nestedWrap}>
                    <p className={styles.nestedLabel}>{item.name}</p>
                    <ul className={styles.nestedChipList}>
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

        <SectionHeading as="h3" id="certifications" className={styles.certHeading}>
          Certifications
        </SectionHeading>
        <ul className={styles.certGrid}>
          {certifications.map((cert) => (
            <li key={cert.name} className={styles.certItem}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={styles.certIcon}
                strokeWidth="1.5"
              >
                <circle cx="12" cy="9" r="6" />
                <path d="M8.5 14 7 22l5-2.5L17 22l-1.5-8" />
              </svg>
              <div>
                <p className={styles.certName}>{cert.name}</p>
                <p className={styles.certOrg}>
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
