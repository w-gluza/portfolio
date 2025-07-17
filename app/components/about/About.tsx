import { Heading, Article, Highlight } from "../../common";

export const About = () => (
  <Article>
    <Heading level={2}>About Me</Heading>
    <p>
      Hello, I’m a front-end developer with{" "}
      <Highlight>6+ years of experience</Highlight> building accessible,
      user-focused <Highlight>web apps</Highlight> using
      <Highlight> React </Highlight> and <Highlight> TypeScript. </Highlight> I
      enjoy working closely with designers and product teams to create
      interfaces that are thoughtful,consistent, and aligned with business
      goals.
    </p>

    <p>
      I also care about writing <Highlight>clean, maintainable code</Highlight>{" "}
      and creating solutions that are easy to understand and build on - not just
      for users, but for the developers who maintain them.
    </p>

    <p>
      Always happy to chat about all things <Highlight> front-end</Highlight>,
      clean
      <Highlight> UX</Highlight>, or just how to make things better.
    </p>
  </Article>
);
