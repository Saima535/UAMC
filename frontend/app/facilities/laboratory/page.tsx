import { FacilitiesPageShell } from "../../../components/facilities-page-shell";

export default function FacilitiesLaboratoryPage() {
  return (
    <FacilitiesPageShell
      eyebrow="Facilities"
      title="Laboratory"
      description="This placeholder page will later present the laboratory environment of UAMC, including practical training, diagnostic support, and academic lab access."
      introTitle="A technical learning and support page"
      introBody="The final page can describe laboratory infrastructure in a way that supports both academic understanding and institutional credibility, covering practical learning and service capability together."
      highlights={[
        { label: "Focus", value: "Technical Facilities" },
        { label: "Dual Role", value: "Learning & Support" },
        { label: "Stage", value: "Placeholder" }
      ]}
      sections={[
        {
          title: "Lab Capabilities",
          body: "This section can later outline the role of laboratories in both training and institutional operations.",
          points: ["Practical sessions", "Diagnostic assistance", "Equipment support"]
        },
        {
          title: "Future Presentation Style",
          body: "This route can later support image-driven sections and capability summaries.",
          points: ["Equipment highlights", "Safety and supervision", "Functional scope"]
        }
      ]}
    />
  );
}
