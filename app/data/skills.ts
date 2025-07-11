export type SkillCategory = Record<string, string[]>;

export const skills: SkillCategory = {
  "Languages & Frameworks": [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "HTML5",
    "CSS3",
    "SASS",
    "MUI",
  ],
  "Design & UX": ["Figma", "Storybook", "Design Systems"],
  Tools: ["Git", "GitHub", "GitLab", "Jenkins"],
  "Code Standards": ["ESLint", "Prettier", "Linting Pipelines"],
  Testing: ["Jest", "React Testing Library"],
  Collaboration: ["Agile", "Jira", "Confluence"],
};
