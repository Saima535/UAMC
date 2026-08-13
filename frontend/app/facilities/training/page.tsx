import { FacilitiesPageShell } from "../../../components/facilities-page-shell";

export default function FacilitiesTrainingPage() {
  return (
    <FacilitiesPageShell
      eyebrow="Facilities"
      title="Training"
      description="This placeholder page is ready to describe training-oriented facilities and the practical learning environment available through UAMC."
      introTitle="A practical learning page"
      introBody="The future design can focus on hands-on preparation, workshop-based learning, and structured practical development that supports medical education in real and simulated settings."
      highlights={[
        { label: "Theme", value: "Practical Learning" },
        { label: "Future Format", value: "Programs & Labs" },
        { label: "Status", value: "Scaffolded" }
      ]}
      sections={[
        {
          title: "Training Environment",
          body: "This section can later introduce the spaces, tools, and learning arrangements that support structured training.",
          points: ["Hands-on exposure", "Guided sessions", "Applied learning spaces"]
        },
        {
          title: "Program Highlights",
          body: "This area can later summarize how training contributes to student readiness and academic growth.",
          points: ["Skill-building focus", "Faculty-led practice", "Clinical preparation"]
        }
      ]}
    />
  );
}
