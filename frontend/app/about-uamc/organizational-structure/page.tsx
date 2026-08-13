import { AboutUamcPageShell } from "../../../components/about-uamc-page-shell";

export default function AboutUamcOrganizationalStructurePage() {
  return (
    <AboutUamcPageShell
      eyebrow="About UAMC"
      title="Organizational Structure"
      description="This page is prepared to present how UAMC is organized across governance, administration, academics, and operational coordination."
      introTitle="A governance and reporting layout"
      introBody="The final version of this page can become a strong reference point for institutional transparency. It is suitable for later expansion with charts, reporting lines, administrative tiers, and department relationships."
      highlights={[
        { label: "Structure Type", value: "Institutional" },
        { label: "Best Format", value: "Chart + Summary" },
        { label: "Current Phase", value: "Placeholder" }
      ]}
      sections={[
        {
          title: "Leadership Layers",
          body: "This section can describe top-level institutional leadership and the relationship between policy and administration.",
          points: ["Governing body", "Executive committee", "Administrative leadership"]
        },
        {
          title: "Functional Areas",
          body: "This section can identify the operational blocks that support academic and institutional delivery.",
          points: ["Academic management", "Hospital operations", "Support services"]
        }
      ]}
    />
  );
}
