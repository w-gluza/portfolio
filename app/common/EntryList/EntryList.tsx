import type { ReactNode } from "react";
import styles from "./EntryList.module.css";
import { ExternalLinkIcon } from "../../assets/icons";
import { ExternalLink } from "../ExternalLink/ExternalLink";
import { Tag } from "../Tag/Tag";

export interface Entry {
  name: string;
  url: string;
  title: string;
  period: string;
  duties?: readonly ReactNode[];
  tags?: readonly string[];
}

export const EntryList = ({ entries }: { entries: readonly Entry[] }) => (
  <ul className={styles.list}>
    {entries.map(({ name, url, title, period, duties, tags }) => (
      <li key={`${name}-${period}`} className={styles.entry}>
        <div className={styles.header}>
          <h3 className={styles.meta}>
            <ExternalLink
              href={url}
              variant="secondary"
              icon={<ExternalLinkIcon />}
            >
              {name}
            </ExternalLink>
            <span className={styles.title}> - {title}</span>
          </h3>
          <span className={styles.period}>{period}</span>
        </div>

        {duties && duties.length > 0 && (
          <ul className={styles.duties}>
            {duties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        )}

        {tags && tags.length > 0 && (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);
