import type { Entry } from "../common";

export const projects: readonly Entry[] = [
  {
    name: "Dusty UI",
    url: "https://www.dustyui.com/",
    title: "React Component Library",
    period: "2025 - Present",
    duties: [
      "Designed and published an open-source library of 26 React components, including a virtualised tree, object inspector, and tempo dial.",
      "Built with accessibility in mind, supporting keyboard navigation, screen readers, RTL layouts, and reduced motion.",
      "Over 900 browser-based tests, Storybook documentation, and showcase apps built entirely with the library.",
    ],
    tags: [
      "React",
      "TypeScript",
      "CSS Modules",
      "Accessibility",
      "Storybook",
      "Vitest",
    ],
  },
  {
    name: "Ghostnote",
    url: "https://github.com/w-gluza/ghostnote-native",
    title: "iOS Drum Practice App",
    period: "2026 - Present",
    duties: [
      "Designing and building an iOS app for practising drum rudiments, creating routines, and tracking progress.",
      "Native-first approach using iOS navigation, SF Symbols, Dynamic Type, and haptics.",
    ],
    tags: ["React Native", "Expo", "TypeScript", "iOS"],
  },
];
