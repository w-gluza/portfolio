import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Highlight.module.css";

type HighlightProps = {
  children: ReactNode;
  className?: string;
  variant?: "base" | "underline" | "caps";
};

export const Highlight = ({
  children,
  className,
  variant = "base",
}: HighlightProps) => {
  return <span className={clsx(styles[variant], className)}>{children}</span>;
};
