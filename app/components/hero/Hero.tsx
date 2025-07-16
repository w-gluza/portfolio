import { Heading } from "../../common";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <header className={styles.header}>
      <Heading level={1}>Wioletta Gluza</Heading>
      <p>Front-End Developer | React & TypeScript</p>
    </header>
  );
};
