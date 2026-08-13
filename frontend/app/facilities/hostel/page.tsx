import { FacilitiesPageShell } from "../../../components/facilities-page-shell";

export default function FacilitiesHostelPage() {
  return (
    <FacilitiesPageShell
      eyebrow="Facilities"
      title="Hostel"
      description="This placeholder page is intended for hostel facility information and can later be expanded with accommodation details, rules, and student support information."
      introTitle="An accommodation support page"
      introBody="The final version can clearly communicate hostel availability, living arrangements, safety expectations, and resident support systems in a student-friendly format."
      highlights={[
        { label: "Facility Type", value: "Accommodation" },
        { label: "Audience", value: "Students" },
        { label: "Current State", value: "Placeholder Ready" }
      ]}
      sections={[
        {
          title: "Accommodation Overview",
          body: "This section can later summarize the nature of hostel arrangements and student residency options.",
          points: ["Seat availability", "Basic amenities", "Residential environment"]
        },
        {
          title: "Future Content Detail",
          body: "This structure can later be expanded into richer practical guidance for applicants and current students.",
          points: ["Eligibility and process", "Rules and supervision", "Support facilities"]
        }
      ]}
    />
  );
}
