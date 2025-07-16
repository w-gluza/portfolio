import styles from "./Skills.module.css";
import { Heading, Tag, Article } from "../../common";
import { skills } from "../../data/skills";

export const Skills = () => (
  <Article>
    <Heading level={2}>Skills</Heading>
    {Object.entries(skills).map(([category, tags]) => (
      <div key={category} className={styles.skillGroup}>
        <Heading level={3}>{category}</Heading>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </Article>
);
