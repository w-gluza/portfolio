import { ReactNode } from "react";
import styles from "./Tag.module.css";
import clsx from "clsx";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export const Tag = ({ children, className }: TagProps) => {
  return <span className={clsx(styles.tag, className)}>{children}</span>;
};
