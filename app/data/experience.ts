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
      "Led migration from a Ruby on Rails front end to React, establishing project architecture.",
      "Built a shared design system with Storybook, enabling reusable and consistent UI components.",
      "Supported agile delivery using Jira, Git, and CI/CD pipelines through sprint planning, retrospectives, and release coordination.",
    ],
    tags: ["React", "TypeScript", "Design Systems", "Storybook", "Jira", "Git"],
  },
  {
    company: "ITU",
    url: "https://www.linkedin.com/company/writewithlaika/",
    title: "Front-End Developer",
    period: "2022 - 2022",
    duties: [
      "Developed the initial version of the “Write with Laika” app using React, TypeScript, and REST APIs.",
      "Collaborated with backend engineers to define data schemas and integrations.",
      "Documented frontend workflows with Git, CI/CD to support handover and long-term maintainability.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Documentation",
      "Agile",
      "Cross-functional team",
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
      "Collaborated closely with product and design teams to plan and implement A/B tests, validating new features and UI changes.",
    ],
    tags: [
      "React",
      "Redux",
      "Material UI",
      "API Integration",
      "Cross-functional team",
    ],
  },
];
