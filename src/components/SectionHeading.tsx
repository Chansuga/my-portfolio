import { styles } from "./SectionHeading.styles";

export default function SectionHeading({
  as: Tag = "h2",
  id,
  className = "",
  children,
}: {
  as?: "h2" | "h3";
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag id={id} className={styles.heading(className)}>
      {children}
    </Tag>
  );
}
