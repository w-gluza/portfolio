import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { Publications } from "./components/publications";
import { Community } from "./components/community";
import { Education } from "./components/education";
import { Contact } from "./components/contact";
import { StructuredData } from "./components/structured-data";
import { Main, PageContainer } from "./common";

export default function Home() {
  return (
    <PageContainer>
      <StructuredData />
      <Hero />
      <Main>
        <About />
        <Experience />
        <Publications />
        <Education />
        <Community />
        <Skills />
      </Main>
      <Contact />
    </PageContainer>
  );
}
