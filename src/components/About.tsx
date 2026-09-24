import SectionHeading from "@/components/SectionHeading";
import { career, profile } from "@/data/site";
import { styles } from "./About.styles";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading>About</SectionHeading>
        <p className={styles.bio}>{profile.bio}</p>
        <p className={styles.location}>{profile.location}</p>

        <SectionHeading as="h3" className={styles.careerHeading}>
          Career
        </SectionHeading>
        <ol className={styles.timeline}>
          {career.map((item, index) => {
            const isCurrent = index === career.length - 1;
            return (
              <li key={item.org} className={styles.timelineItem}>
                <div className={styles.timelineMarkerWrap}>
                  <span className={styles.timelineDot(isCurrent)} />
                  {index < career.length - 1 && (
                    <span className={styles.timelineLine} />
                  )}
                </div>
                <div className={styles.timelineContent}>
                  <p className={styles.timelinePeriod}>{item.period}</p>
                  <p className={styles.timelineOrg}>{item.org}</p>
                  <p className={styles.timelineRole}>{item.role}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
