import { FacilitiesPageShell } from "../../../components/facilities-page-shell";

export default function FacilitiesHospitalServicePage() {
  return (
    <FacilitiesPageShell
      eyebrow="Facilities"
      title="Hospital service"
      description="This placeholder page is prepared to present the hospital service environment of UAMC, including patient care support, treatment flow, and healthcare delivery strengths."
      introTitle="A patient-service focused page"
      introBody="The final version of this page can combine institutional information with service highlights, giving visitors a clear understanding of clinical support, care access, and operational strengths within the hospital setting."
      highlights={[
        { label: "Primary Theme", value: "Patient Care" },
        { label: "Page Type", value: "Service Overview" },
        { label: "Content Stage", value: "Placeholder" }
      ]}
      sections={[
        {
          title: "What This Page Can Present",
          body: "This section can later describe the range and character of hospital service support available through the institution.",
          points: ["Clinical care overview", "Service coordination", "Patient support systems"]
        },
        {
          title: "Future Content Opportunities",
          body: "The design can later expand into visual sections, service counters, and patient-facing explanations.",
          points: ["Department summaries", "Emergency and OPD info", "Service contact references"]
        }
      ]}
    />
  );
}
