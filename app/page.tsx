import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { Publications } from "./components/publications";
import { Community } from "./components/community";
import { Education } from "./components/education";
import { Contact } from "./components/contact";
import { Main, PageContainer } from "./common";

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Main>
        <About />
        <Experience />
        <Publications />
        <Community />
        <Education />
        <Skills />
        <Contact />
      </Main>
    </PageContainer>
  );
}
