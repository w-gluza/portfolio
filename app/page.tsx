import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Wioletta Gluza</h1>
        <p>Front-End Developer | React & TypeScript</p>
      </header>

      <main className={styles.main}>
        <section>
          <h2>About Me</h2>
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
          <h2>Experience</h2>
          <ul className={styles.list}>
            <li>
              <strong>Inpay - Front-End Developer (2022 - Present)</strong>
              <ul className={styles.duties}>
                <li>
                  Took the lead in introducing React, working on the initial
                  setup and migration from Ruby
                </li>
                <li>
                  Helped build and maintain a shared design system and reusable
                  component library
                </li>
                <li>
                  Participated in sprint planning, retrospectives, and release
                  coordination in an agile environment
                </li>
              </ul>

              <ul className={styles.tags}>
                <li>React</li>
                <li>TypeScript</li>
                <li>Design Systems</li>
                <li>Storybook</li>
              </ul>
            </li>

            <li>
              <strong>ITU - Front-End Developer (2022 - Contract)</strong>
              <ul className={styles.duties}>
                <li>
                  Developed the first version of the “Write with Laika” app
                  using React and TypeScript
                </li>
                <li>
                  Worked closely with product and backend teams to align on
                  features and functionality
                </li>
                <li>
                  Documented frontend workflows and setup to support handover
                  and long-term maintainability
                </li>
              </ul>
              <ul className={styles.tags}>
                <li>React</li>
                <li>TypeScript</li>
                <li>Documentation</li>
                <li>Agile</li>
                <li>Cross-team Collaboration</li>
              </ul>
            </li>

            <li>
              <strong>Too Good To Go — Front-End Developer (2019 - 2022)</strong>
              <ul className={styles.duties}>
                <li>
                  Built and maintained key app features using React, Redux, and
                  Material UI
                </li>
                <li>
                  Integrated internal APIs and third-party services in close
                  collaboration with backend teams
                </li>
                <li>Collaborated closely with product and design</li>
              </ul>
              <ul className={styles.tags}>
                <li>React</li>
                <li>Redux</li>
                <li>Material UI</li>
                <li>API Integration</li>
                <li>Cross-functional Collaboration</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2>Skills</h2>
          <ul className={styles.list}>
            <li>React, TypeScript, JavaScript</li>
            <li>Design Systems, MUI, Storybook</li>
            <li>Jest, React Testing Library</li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Let`s connect on{" "}
            <a
              href="https://www.linkedin.com/in/w-gluza/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >LinkedIn
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
