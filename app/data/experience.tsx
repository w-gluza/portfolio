import { ReactNode } from "react";
import { ExternalLink } from "../common";

export interface ExperienceEntry {
  company: string;
  url: string;
  title: string;
  period: string;
  duties: ReactNode[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Apron",
    url: "https://getapron.com",
    title: "Frontend Engineer",
    period: "2025 - Present",
    duties: [
      <>
        Building the frontend experience for{" "}
        <ExternalLink href="https://getapron.com/william">
          William AI
        </ExternalLink>
        , Apron’s autonomous bookkeeping agent for accounting firms.
      </>,
      "Contributing to the platform's foundations, including design-system components, data-layer migrations, and frontend reliability improvements.",
      "Represented Apron at Accountex, speaking with accounting professionals to understand their workflows and gather feedback that informed product decisions.",
    ],
    tags: [
      "React",
      "TypeScript",
      "AI Applications",
      "Design Systems",
      "User Research",
    ],
  },
  {
    company: "Inpay",
    url: "https://inpay.com",
    title: "Frontend Developer",
    period: "2022 - 2025",
    duties: [
      "Introduced React to the codebase, establishing the foundations for the migration from a Ruby on Rails frontend to a modern React-based application.",
      "Built and evolved a shared React design system in Storybook, creating reusable components, design tokens, theming, and supporting utilities. The system was adopted and extended by the wider team over three years, with component test coverage established alongside it.",
      "Built product features across payment processing, payment network configuration, and financial reconciliation workflows for a regulated cross-border payments platform.",
    ],
    tags: ["React", "TypeScript", "Design Systems", "Storybook", "Fintech"],
  },
  {
    company: "ITU",
    url: "https://www.linkedin.com/company/writewithlaika/",
    title: "Frontend Developer",
    period: "2022",
    duties: [
      "Developed the initial version of Write with LAIKA, an AI-powered creative writing assistant, building the frontend with React and TypeScript.",
      "Built interfaces for AI-assisted writing workflows, collaborating with backend engineers on APIs and how generated content was presented within the writing experience.",
    ],
    tags: ["React", "TypeScript", "AI Applications", "REST APIs"],
  },
  {
    company: "Too Good To Go",
    url: "https://www.toogoodtogo.com",
    title: "Frontend Developer",
    period: "2019 - 2022",
    duties: [
      "Built core features for Too Good To Go's merchant platform, enabling food businesses across 15+ European markets to manage and sell their surplus food.",
      "Developed the frontend experimentation framework and supported end-to-end A/B testing workflows, from implementing variants and analytics instrumentation to experiment rollout and cleanup.",
      "Built partner-facing analytics dashboards, including sales performance and meals-saved insights, giving businesses visibility into their performance and food waste reduction impact.",
    ],
    tags: [
      "React",
      "Redux",
      "A/B Testing",
      "Product Analytics",
      "Data Visualisation",
    ],
  },
];
