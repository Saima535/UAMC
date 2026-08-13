import { FacilitiesPageShell } from "../../../components/facilities-page-shell";

export default function FacilitiesCafeteriaPage() {
  return (
    <FacilitiesPageShell
      eyebrow="Facilities"
      title="Cafeteria"
      description="This placeholder page is prepared for cafeteria-related content and can later describe dining access, food service environment, and convenience for campus users."
      introTitle="A student support amenity page"
      introBody="The final design can use this page to present cafeteria facilities in a straightforward way, covering availability, environment, and its role in everyday campus life."
      highlights={[
        { label: "Facility Category", value: "Campus Support" },
        { label: "Main Purpose", value: "Daily Convenience" },
        { label: "Current Use", value: "Placeholder" }
      ]}
      sections={[
        {
          title: "Service Snapshot",
          body: "This section can later explain what the cafeteria provides and how it supports students, staff, and visitors.",
          points: ["Food availability", "Dining environment", "Convenient campus access"]
        },
        {
          title: "Possible Final Additions",
          body: "The page can eventually include practical information and visual presentation for a fuller experience.",
          points: ["Timings and service flow", "Menu-style highlights", "Space and seating details"]
        }
      ]}
    />
  );
}
