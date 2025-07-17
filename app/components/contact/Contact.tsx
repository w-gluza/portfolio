import { Heading, ExternalLink } from "../../common";

export const Contact = () => (
  <footer>
    <Heading level={2}>Contact</Heading>
    <p>
      Let’s connect on{" "}
      <ExternalLink href="https://www.linkedin.com/in/w-gluza/">
        LinkedIn
      </ExternalLink>{" "}
      or check out my{" "}
      <ExternalLink href="https://github.com/w-gluza"> GitHub</ExternalLink> and{" "}
      <ExternalLink href="/gluza_wioletta_cv.pdf"> resume</ExternalLink>. You
      can also reach me at{" "}
      <ExternalLink href="mailto:wiolagluza@gmail.com">
        wiolagluza@gmail.com
      </ExternalLink>
      .
    </p>
  </footer>
);
