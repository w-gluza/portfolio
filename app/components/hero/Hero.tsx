import { Heading } from "../../common";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <header className={styles.header}>
      <Heading level={1}>Wioletta Gluza</Heading>
      <p>Frontend Engineer - building AI products</p>
    </header>
  );
};
