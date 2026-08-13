import { AboutUamcPageShell } from "../../../components/about-uamc-page-shell";

export default function AboutUamcEcMembersPage() {
  return (
    <AboutUamcPageShell
      eyebrow="About UAMC"
      title="EC Members"
      description="This page is ready to present executive committee members with a clean placeholder structure that can later support official lists, roles, and profile-level details."
      introTitle="Executive committee placeholder"
      introBody="The purpose of this page is to keep executive committee information separated and organized. When fully designed, it can include leadership cards, committee responsibilities, and administrative functions."
      highlights={[
        { label: "Committee", value: "Executive" },
        { label: "Display Mode", value: "Profiles / List" },
        { label: "Prepared For", value: "Official Content" }
      ]}
      sections={[
        {
          title: "Committee Role",
          body: "This section can summarize the role of the executive committee in guiding administrative and institutional decisions.",
          points: ["Strategic oversight", "Administrative coordination", "Operational review"]
        },
        {
          title: "Member Listing",
          body: "This section can later be upgraded into member cards, a table, or a role-based listing depending on your preferred design direction.",
          points: ["Chair and member roles", "Designation details", "Term or responsibility notes"]
        }
      ]}
    />
  );
}
