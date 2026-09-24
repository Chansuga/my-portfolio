import Image from "next/image";
import { mailto, profile } from "@/data/site";
import { styles } from "./Hero.styles";

export default function Hero() {
  return (
    <section id="top" className={styles.section}>
      <div className={styles.container}>
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={112}
          height={112}
          priority
          className={styles.avatar}
        />
        <p className={styles.role}>{profile.role}</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.tagline}>{profile.tagline}</p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>
            View Projects
          </a>
          <a
            href={mailto(profile.social.email)}
            className={styles.secondaryButton}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
