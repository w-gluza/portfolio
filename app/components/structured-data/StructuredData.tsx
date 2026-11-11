import { education } from "../../data/education";
import { experience } from "../../data/experience";
import { skills } from "../../data/skills";

const currentRole = experience.find(({ period }) => period.endsWith("Present"));

const profile = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Wioletta Gluza",
    alternateName: "Wiola Gluza",
    url: "https://www.wiola.dev/",
    jobTitle: currentRole?.title,
    worksFor: currentRole
      ? {
          "@type": "Organization",
          name: currentRole.name,
          url: currentRole.url,
        }
      : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    email: "mailto:wiolagluza@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/w-gluza/",
      "https://github.com/w-gluza",
    ],
    alumniOf: education.map(({ name, url }) => ({
      "@type": "CollegeOrUniversity",
      name,
      url,
    })),
    knowsAbout: Object.values(skills).flat(),
  },
};

export const StructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(profile).replace(/</g, "\\u003c"),
    }}
  />
);
