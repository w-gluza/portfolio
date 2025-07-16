import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { Main, PageContainer } from "./common";

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Main>
        <About />
        <Experience />
        <Skills />
        <Contact />
      </Main>
    </PageContainer>
  );
}
