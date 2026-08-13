import { AboutUamcPageShell } from "../../../components/about-uamc-page-shell";

export default function AboutUamcFounderMembersPage() {
  return (
    <AboutUamcPageShell
      eyebrow="About UAMC"
      title="Founder Members"
      description="This page is designed to recognize the founder members of UAMC and reserve a clear space for their names, roles, and contribution to the institution's establishment."
      introTitle="A founding acknowledgment page"
      introBody="The final design can eventually introduce the founding personalities in a respectful and structured way, combining short biographies, contribution summaries, and archival material where appropriate."
      highlights={[
        { label: "Purpose", value: "Recognition" },
        { label: "Content Type", value: "Profiles" },
        { label: "Later Use", value: "Formal Presentation" }
      ]}
      sections={[
        {
          title: "Founding Contribution",
          body: "This section can explain how the founder members shaped the early identity, direction, and institutional foundation of UAMC.",
          points: ["Institutional formation", "Initial planning", "Foundational leadership"]
        },
        {
          title: "Profile Presentation",
          body: "This section can later be transformed into individual member cards or a biography grid.",
          points: ["Name and designation", "Role in establishment", "Legacy and contribution"]
        }
      ]}
    />
  );
}
