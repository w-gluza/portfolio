import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./ExternalLink.module.css";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
};

export const ExternalLink = ({
  href,
  children,
  icon,
  variant = "primary",
}: ExternalLinkProps) => {
  const opensInNewTab = !href.startsWith("mailto:");

  return (
    <a
      href={href}
      className={clsx(styles[variant], styles.base)}
      {...(opensInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
      {opensInNewTab && (
        <span className={styles["sr-only"]}> (opens in a new tab)</span>
      )}
    </a>
  );
};
