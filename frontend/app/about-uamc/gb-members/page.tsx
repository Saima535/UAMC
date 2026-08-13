import { AboutUamcPageShell } from "../../../components/about-uamc-page-shell";

export default function AboutUamcGbMembersPage() {
  return (
    <AboutUamcPageShell
      eyebrow="About UAMC"
      title="GB Members"
      description="This page is structured as a placeholder for governing body information and can later evolve into an official presentation of governance membership and responsibility."
      introTitle="Governing body overview"
      introBody="The governing body page should eventually communicate oversight, accountability, and long-term stewardship. This placeholder layout provides a clean base for adding the final official member listing and related governance context."
      highlights={[
        { label: "Committee", value: "Governing Body" },
        { label: "Primary Theme", value: "Oversight" },
        { label: "Design Status", value: "Ready for Buildout" }
      ]}
      sections={[
        {
          title: "Governance Scope",
          body: "This section can explain the function of the governing body and how it supports institutional continuity and oversight.",
          points: ["Policy-level guidance", "Institutional accountability", "Long-term direction"]
        },
        {
          title: "Member Information",
          body: "This section can later display structured member details in whichever format suits the final design system best.",
          points: ["Official member list", "Designation and affiliation", "Governance responsibilities"]
        }
      ]}
    />
  );
}
