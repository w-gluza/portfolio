import { Heading, ExternalLink } from "../../common";

export const Contact = () => (
  <footer>
    <Heading level={2}>Contact</Heading>
    <p>
      Let’s connect on{" "}
      <ExternalLink href="https://www.linkedin.com/in/w-gluza/">
        LinkedIn
      </ExternalLink>{" "}
      or <ExternalLink href="https://github.com/w-gluza">GitHub</ExternalLink>.
    </p>
  </footer>
);
