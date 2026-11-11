import { isValidElement, type ReactNode } from "react";
import type { Entry } from "../common";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { skills } from "../data/skills";

export const dynamic = "force-static";

const siteUrl = "https://www.wiola.dev";

const toText = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(toText).join("");
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return toText(node.props.children);
  }
  return "";
};

const toLine = (node: ReactNode) => toText(node).replace(/\s+/g, " ").trim();

const formatEntry = ({ name, title, period, duties, tags }: Entry) =>
  [
    `### ${title}, ${name} (${period})`,
    "",
    ...(duties ?? []).map((duty) => `- ${toLine(duty)}`),
    ...(tags ? ["", `Technologies: ${tags.join(", ")}`] : []),
  ].join("\n");

const currentRole = experience.find(({ period }) => period.endsWith("Present"));

const summary = [
  `${currentRole?.title ?? "Frontend Engineer"} based in London, UK, with 7+ years of experience building web applications with React and TypeScript.`,
  currentRole ? `Currently building AI products at ${currentRole.name}.` : "",
]
  .join(" ")
  .trim();

const document = [
  "# Wioletta Gluza",
  "",
  `> ${summary}`,
  "",
  "## Contact",
  "",
  `- [Website](${siteUrl}/)`,
  `- [CV (PDF)](${siteUrl}/gluza_wioletta_cv.pdf)`,
  "- [LinkedIn](https://www.linkedin.com/in/w-gluza/)",
  "- [GitHub](https://github.com/w-gluza)",
  "- Email: wiolagluza@gmail.com",
  "",
  "## Experience",
  "",
  experience.map(formatEntry).join("\n\n"),
  "",
  "## Education",
  "",
  education.map(formatEntry).join("\n\n"),
  "",
  "## Publication",
  "",
  "- [Wikipedia Edit-a-thons and Editor Experience: Lessons from a Participatory Observation](https://doi.org/10.1145/3479986.3479994)",
  "- Authors: Gluza, W., Turaj, I. A., & Meier, F.",
  "- Presented at OpenSym 2021, the 17th International Symposium on Open Collaboration, September 2021.",
  "- Published in the ACM Digital Library, 15 October 2021.",
  "",
  "## Skills",
  "",
  ...Object.entries(skills).map(
    ([category, tags]) => `- ${category}: ${tags.join(", ")}`,
  ),
  "",
].join("\n");

export function GET() {
  return new Response(document, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
