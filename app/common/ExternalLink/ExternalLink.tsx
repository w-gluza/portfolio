import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./ExternalLink.module.css";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
};

export const ExternalLink = ({
  href,
  children,
  className,
  label,
}: ExternalLinkProps) => {
  const accessibleLabel =
    label || typeof children === "string"
      ? `${children} (opens in a new tab)`
      : undefined;

  return (
    <a
      href={href}
      className={clsx(styles.link, className)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={accessibleLabel}
    >
      {children}
      <span className={styles["sr-only"]}> (opens in a new tab)</span>
    </a>
  );
};
