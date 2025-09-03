export type SkillCategory = Record<string, string[]>;

export const skills: SkillCategory = {
  "Languages & Frameworks": [
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Redux",
    "HTML5",
    "CSS3",
    "SASS",
    "MUI",
  ],
  "Design & UX": ["Figma", "Storybook", "Design Systems"],
  Tools: ["Git", "GitHub", "GitLab", "Jenkins"],
  "Code Standards": ["ESLint", "Prettier", "Linting Pipelines"],
  Testing: ["Jest", "React Testing Library", "A/B Testing"],
  "Code Productivity": ["GitHub Copilot", "ChatGPT"],
  Collaboration: ["Agile", "Jira", "Confluence"],
};
