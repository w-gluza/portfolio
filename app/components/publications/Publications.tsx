import styles from "./Publications.module.css";
import { ExternalLinkIcon } from "../../assets/icons";
import { Article, Heading, ExternalLink } from "../../common";

export const Publications = () => (
  <Article>
    <Heading level={2}>Publications</Heading>
    <div className={styles.entry}>
      <div className={styles.title}>
        <ExternalLink
          href="https://doi.org/10.1145/3479986.3479994"
          variant="secondary"
          icon={<ExternalLinkIcon />}
        >
          Wikipedia Edit-a-thons and Editor Experience: Lessons from a
          Participatory Observation
        </ExternalLink>
      </div>
      <ul className={styles.details}>
        <li>
          Presented at{" "}
          <ExternalLink href="https://opensym.org/os2021/program/">
            OpenSym 2021
          </ExternalLink>
          , the 17th International Symposium on Open Collaboration · September
          2021.
        </li>
        <li>
          Published in the ACM Digital Library · 15 October 2021 ·{" "}
          <ExternalLink href="https://doi.org/10.1145/3479986.3479994">
            DOI: 10.1145/3479986.3479994
          </ExternalLink>
          .
        </li>
      </ul>
      <p className={styles.description}>
        Gluza, W., Turaj, I. A., & Meier, F. Research exploring participation
        and contributor experiences within Wikipedia edit-a-thons.
      </p>
    </div>
  </Article>
);
