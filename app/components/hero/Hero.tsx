import { ExternalLink, Heading } from "../../common";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <header className={styles.header}>
      <Heading level={1}>Wioletta Gluza</Heading>
      <p className={styles.tagline}>
        Senior Frontend Engineer - building AI products
      </p>
      <ul className={styles.links}>
        <li>
          <ExternalLink href="/gluza_wioletta_cv.pdf">CV</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.linkedin.com/in/w-gluza/">
            LinkedIn
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/w-gluza">GitHub</ExternalLink>
        </li>
        <li>
          <ExternalLink href="mailto:wiolagluza@gmail.com">Email</ExternalLink>
        </li>
      </ul>
    </header>
  );
};
