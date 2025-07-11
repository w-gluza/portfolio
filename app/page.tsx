import styles from "./page.module.css";
import { experience } from "./data/experience";
import { skills } from "./data/skills";
import { ExternalLink, Tag, Heading } from "./common";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Heading level={1}>Wioletta Gluza</Heading>
        <p>Front-End Developer | React & TypeScript</p>
      </header>

      <main className={styles.main}>
        <section>
          <Heading level={2}>About Me</Heading>
          <p>
            <p>
              Hello, I’m a front-end developer with 6+ years of experience
              building accessible, user-focused web apps using React and
              TypeScript. I enjoy working closely with designers and product
              teams to create interfaces that are thoughtful, consistent, and
              aligned with business goals.
            </p>

            <p>
              I also care about writing clean, maintainable code and creating
              solutions that are easy to understand and build on not just for
              users, but for the developers who maintain them.
            </p>

            <p>
              Always happy to chat about all things front end, clean UX, or just
              how to make things better.
            </p>
          </p>
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
          <Heading level={2}>Contact</Heading>
          <p>
            Let`s connect on{" "}
            <ExternalLink href="https://www.linkedin.com/in/w-gluza/">
              LinkedIn
            </ExternalLink>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
