import type { ReactNode } from "react";
import styles from "./Heading.module.css";

type HeadingProps = {
  level?: 1 | 2 | 3;
  children: ReactNode;
};

export const Heading = ({ level = 2, children }: HeadingProps) => {
  const HeadingTag = `h${level}` as const;

  return <HeadingTag className={styles[HeadingTag]}>{children}</HeadingTag>;
};
