import { FacilitiesPageShell } from "../../../components/facilities-page-shell";

export default function FacilitiesLibraryPage() {
  return (
    <FacilitiesPageShell
      eyebrow="Facilities"
      title="Library"
      description="This placeholder page provides the future home for library-related content, including reading resources, academic references, and learning support materials."
      introTitle="A learning resources page"
      introBody="The page can later highlight how the library supports medical study, research habits, and quiet academic preparation through physical and digital resources."
      highlights={[
        { label: "Facility Type", value: "Academic Support" },
        { label: "Main Benefit", value: "Learning Access" },
        { label: "Current Status", value: "Placeholder Ready" }
      ]}
      sections={[
        {
          title: "Resource Coverage",
          body: "This area can later explain the scope of library holdings and how students access them.",
          points: ["Textbooks and journals", "Reading space", "Reference materials"]
        },
        {
          title: "Student Support",
          body: "This section can later focus on how the library contributes to day-to-day academic life.",
          points: ["Study environment", "Research assistance", "Scheduled access information"]
        }
      ]}
    />
  );
}
