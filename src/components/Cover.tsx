import Image from "next/image";
import { profile } from "@/data/site";
import { styles } from "./Cover.styles";

export default function Cover() {
  return (
    <section id="top" className={styles.section}>
      <Image
        src="/image.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Yuki Suga&apos;s portfolio</h1>
        <p className={styles.role}>{profile.role}</p>
      </div>
    </section>
  );
}
