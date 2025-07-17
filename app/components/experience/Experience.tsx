import { Article, Heading, Tag, ExternalLinkIcon } from "../../common";
import { experience } from "../../data/experience";
import styles from "./Experience.module.css";

export const Experience = () => (
  <Article>
    <Heading level={2}>Experience</Heading>
    <ul className={styles.list}>
      {experience.map(({ company, url, title, period, duties, tags }) => (
        <li key={`${company}-${period}`} className={styles.entry}>
          <div className={styles.header}>
            <div className={styles.meta}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["company-link"]}
              >
                {company}
                <ExternalLinkIcon className={styles["external-icon"]} />
              </a>
              <span className={styles.title}> — {title}</span>
            </div>
            <span className={styles.period}>{period}</span>
          </div>

          <ul className={styles.duties}>
            {duties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>

          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </Article>
);
