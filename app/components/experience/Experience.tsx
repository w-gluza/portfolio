import { experience } from "../../data/experience";
import { Article, Heading, EntryList } from "../../common";

export const Experience = () => (
  <Article>
    <Heading level={2}>Experience</Heading>
    <EntryList entries={experience} />
  </Article>
);
