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
              <strong>Inpay (2022 - Present)</strong>
              <p>
                Led the transition to React, built and maintained a design
                system, and worked closely with product teams.
              </p>
            </li>
            <li>
              <strong>ITU (2022 - Contract)</strong>
              <p>
                Developed the “Write with Laika” app using React and TypeScript
                with a focus on maintainability and handover.
              </p>
            </li>
            <li>
              <strong>Too Good To Go (2019 - 2022)</strong>
              <p>
                Built internal tools using React, Redux, and MUI in
                collaboration with backend and design teams.
              </p>
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
