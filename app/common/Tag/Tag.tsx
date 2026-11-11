import type { ReactNode } from "react";
import styles from "./Tag.module.css";

type TagProps = {
  children: ReactNode;
};

export const Tag = ({ children }: TagProps) => {
  return <span className={styles.tag}>{children}</span>;
};
