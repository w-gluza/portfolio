export type SkillCategory = Record<string, string[]>;

export const skills: SkillCategory = {
  "Languages & Frameworks": [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "SASS",
    "MUI",
  ],
  "Design & UX": ["Figma", "Storybook", "Design Systems"],
  Testing: ["Jest", "React Testing Library", "Cypress", "MSW"],
  "Analytics & Experimentation": [
    "A/B Testing",
    "Product Analytics",
    "Amplitude",
    "Data Visualisation",
  ],
  "Forms & Data": ["React Hook Form", "Formik", "Yup", "REST APIs", "SWR"],
  "Tooling & CI": [
    "Git",
    "GitHub",
    "GitLab",
    "GitHub Actions",
    "GitLab CI",
    "Docker",
    "Sentry",
  ],
  "Code Standards": ["ESLint", "Prettier", "Linting Pipelines"],
  "AI-assisted Development": ["Claude", "GitHub Copilot"],
  Collaboration: ["Agile", "Jira", "Confluence"],
};
