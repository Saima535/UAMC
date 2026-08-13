import { FacilitiesPageShell } from "../../../components/facilities-page-shell";

export default function FacilitiesPublicationPage() {
  return (
    <FacilitiesPageShell
      eyebrow="Facilities"
      title="Publication"
      description="This placeholder page will later house publication-related content, including journals, research communication, and institutional academic output."
      introTitle="A research and publication page"
      introBody="The page can later present how UAMC publishes academic work, supports scholarly communication, and builds an institutional presence through articles, journals, and related outputs."
      highlights={[
        { label: "Primary Lens", value: "Research Output" },
        { label: "Page Use", value: "Academic Visibility" },
        { label: "Content State", value: "Placeholder" }
      ]}
      sections={[
        {
          title: "Publication Scope",
          body: "This section can later describe the types of publication activity associated with the institution.",
          points: ["Institutional journals", "Academic articles", "Research documentation"]
        },
        {
          title: "Possible Design Direction",
          body: "The page can eventually support archives, issue listings, and call-for-paper style information.",
          points: ["Publication archive", "Editorial overview", "Submission guidance"]
        }
      ]}
    />
  );
}
