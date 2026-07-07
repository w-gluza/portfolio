import { Heading, Article, Highlight } from "../../common";

export const About = () => (
  <Article>
    <Heading level={2}>About Me</Heading>
    <p>
      Hello, I’m Wioletta - a frontend engineer with{" "}
      <Highlight>6+ years of experience</Highlight> building accessible,
      user-focused web applications with <Highlight>React</Highlight> and{" "}
      <Highlight>TypeScript</Highlight>.
    </p>

    <p>
      I enjoy working at the intersection of engineering, design, and product -
      creating interfaces that are thoughtful, consistent, and easy to use.
      Throughout my career, I’ve worked on{" "}
      <Highlight>AI applications</Highlight>,{" "}
      <Highlight>design systems</Highlight>, experimentation, and products used
      by businesses and users across different markets.
    </p>

    <p>
      I care about writing <Highlight>clean, maintainable code</Highlight> and
      building frontend foundations that make products easier to evolve - not
      only for users, but also for the teams who continue developing them.
    </p>

    <p>
      Always happy to chat about <Highlight>frontend engineering</Highlight>,
      AI products, thoughtful <Highlight>UX</Highlight>, or making things
      better.
    </p>
  </Article>
);
