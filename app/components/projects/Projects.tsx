import { projects } from "../../data/projects";
import { Article, Heading, EntryList } from "../../common";

export const Projects = () => (
  <Article>
    <Heading level={2}>Projects</Heading>
    <EntryList entries={projects} />
  </Article>
);
