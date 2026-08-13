import { FacilitiesPageShell } from "../../../components/facilities-page-shell";

export default function FacilitiesSeminarPage() {
  return (
    <FacilitiesPageShell
      eyebrow="Facilities"
      title="Seminar"
      description="This placeholder page is ready to describe seminar spaces, academic discussion formats, and event-based learning opportunities within UAMC."
      introTitle="A scholarly engagement page"
      introBody="The final page can later present seminars as a formal academic feature of the institution, including event culture, discussion platforms, and continuing learning opportunities."
      highlights={[
        { label: "Format", value: "Academic Sessions" },
        { label: "Core Benefit", value: "Knowledge Exchange" },
        { label: "Readiness", value: "Route Complete" }
      ]}
      sections={[
        {
          title: "Seminar Use Cases",
          body: "This section can later explain how seminars support engagement across academic and professional themes.",
          points: ["Guest sessions", "Academic discussions", "Faculty-student interaction"]
        },
        {
          title: "Future Content Blocks",
          body: "This page can be expanded later with schedules, records, and featured seminar highlights.",
          points: ["Upcoming seminar listings", "Past event snapshots", "Speaker details"]
        }
      ]}
    />
  );
}
