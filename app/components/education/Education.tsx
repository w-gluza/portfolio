import { education } from "../../data/education";
import { Article, Heading, EntryList } from "../../common";

export const Education = () => (
  <Article>
    <Heading level={2}>Education</Heading>
    <EntryList entries={education} />
  </Article>
);
