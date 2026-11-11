import type { ReactNode } from "react";
import styles from "./Highlight.module.css";

type HighlightProps = {
  children: ReactNode;
};

export const Highlight = ({ children }: HighlightProps) => {
  return <span className={styles.base}>{children}</span>;
};
