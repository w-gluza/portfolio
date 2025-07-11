import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>👋 Hey, I’m Wiola, a Front-End Developer</h1>
        <p>
          I’ve been building web apps with React, TypeScript, and design systems for
          over 6 years - always with a focus on accessibility, clean UX, and code that’s easy to work with.
        </p>
        <p>
          I love working with designers and product teams to bring ideas to life,
          and I care a lot about making things that are not just usable - but enjoyable.
        </p>
        <p>
          This site’s still under construction - but feel free to{" "}
          <a
            href="https://www.linkedin.com/in/w-gluza/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >connect with me on LinkedIn
          </a>{" "}
          if you want to chat or see what I’ve been up to.
        </p>
      </main>
    </div>
  );
}
