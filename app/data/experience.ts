export interface ExperienceEntry {
  company: string;
  url: string;
  title: string;
  period: string;
  duties: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Inpay",
    url: "https://inpay.com",
    title: "Front-End Developer",
    period: "2022 - Present",
    duties: [
      "Took the lead in introducing React, working on the initial setup and migration from Ruby",
      "Helped build and maintain a shared design system and reusable component library",
      "Participated in sprint planning, retrospectives, and release coordination in an agile environment",
    ],
    tags: ["React", "TypeScript", "Design Systems", "Storybook"],
  },
  {
    company: "ITU",
    url: "https://www.linkedin.com/company/writewithlaika/",
    title: "Front-End Developer",
    period: "2022 - 2022",
    duties: [
      "Developed the first version of the “Write with Laika” app using React and TypeScript",
      "Worked closely with product and backend teams to align on features and functionality",
      "Documented frontend workflows and setup to support handover and long-term maintainability",
    ],
    tags: [
      "React",
      "TypeScript",
      "Documentation",
      "Agile",
      "Cross-team Collaboration",
    ],
  },
  {
    company: "Too Good To Go",
    url: "https://www.toogoodtogo.com",
    title: "Front-End Developer",
    period: "2019 - 2022",
    duties: [
      "Built and maintained key app features using React, Redux, and Material UI",
      "Integrated internal APIs and third-party services in close collaboration with backend teams",
      "Collaborated closely with product and design",
    ],
    tags: [
      "React",
      "Redux",
      "Material UI",
      "API Integration",
      "Cross-functional Collaboration",
    ],
  },
];
