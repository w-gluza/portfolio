import { experience } from "../../data/experience";
import styles from "./Experience.module.css";
import {
  Article,
  Heading,
  Tag,
  ExternalLink,
  ExternalLinkIcon,
} from "../../common";

export const Experience = () => {
  return (
    <Article>
      <Heading level={2}>Experience</Heading>
      <ul className={styles.list}>
        {experience.map(({ company, url, title, period, duties, tags }) => (
          <li key={`${company}-${period}`} className={styles.entry}>
            <div className={styles.header}>
              <div className={styles.meta}>
                <ExternalLink
                  href={url}
                  variant="secondary"
                  icon={<ExternalLinkIcon />}
                >
                  {company}
                </ExternalLink>
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
};
