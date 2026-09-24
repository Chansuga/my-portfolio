import { styles } from "./Chip.styles";

export default function Chip({ children }: { children: React.ReactNode }) {
  return <li className={styles.chip}>{children}</li>;
}
