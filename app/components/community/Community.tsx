import { Heading, Article, ExternalLink } from "../../common";

export const Community = () => (
  <Article>
    <Heading level={2}>Community & Teaching</Heading>
    <p>
      Delivered live coding streams for{" "}
      <ExternalLink href="https://www.linkedin.com/company/girls-in-it-zealand/">
        Piger i IT
      </ExternalLink>{" "}
      (&ldquo;Girls in IT&rdquo;), a Danish initiative encouraging women into
      technology, in collaboration with Zealand Academy (2020).
    </p>
    <p>
      Tutored fellow students as a student tutor at{" "}
      <ExternalLink href="https://www.ek.dk/">KEA</ExternalLink> (Copenhagen
      School of Design and Technology) during my BA, supporting other
      developers-in-training.
    </p>
  </Article>
);
