import { Heading, Article, Highlight } from "../../common";

export const About = () => (
  <Article>
    <Heading level={2}>About Me</Heading>
    <p>
      Hello, I’m Wioletta - a frontend engineer with{" "}
      <Highlight>7+ years of experience</Highlight> building web applications
      with <Highlight>React</Highlight> and <Highlight>TypeScript</Highlight>.
      Currently, I’m building AI products in London.
    </p>

    <p>
      I enjoy working at the intersection of engineering, design, and product,
      bringing ideas to life through intuitive interfaces. Throughout my
      career, I’ve worked on <Highlight>AI applications</Highlight>,{" "}
      <Highlight>design systems</Highlight>, and products used by businesses
      across different markets.
    </p>

    <p>
      I care about the details, from how an interface feels to how the code
      behind it is structured. I enjoy making things simpler, improving what
      already exists, and building <Highlight>maintainable frontend
      foundations</Highlight> that work well for both the people using a
      product and the teams building it.
    </p>

    <p>
      Always happy to chat about <Highlight>frontend engineering</Highlight>,
      AI products, product development, or making things better.
    </p>
  </Article>
);
