import styles from "./Experience.module.css";
import { Article, Heading, Tag } from "../../common";
import { experience } from "../../data/experience";

export const Experience = () => {
  return (
    <Article>
      <Heading level={2}>Experience</Heading>
      <ul className={styles.list}>
        {experience.map(({ company, title, period, duties, tags }) => (
          <li key={`${company}-${period}`}>
            <strong>
              {company} — {title} ({period})
            </strong>
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
