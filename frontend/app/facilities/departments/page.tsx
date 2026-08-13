import { FacilitiesPageShell } from "../../../components/facilities-page-shell";

export default function FacilitiesDepartmentsPage() {
  return (
    <FacilitiesPageShell
      eyebrow="Facilities"
      title="Departments"
      description="This placeholder page is designed to introduce academic or service departments in a more facilities-oriented way, separate from the broader department listing."
      introTitle="A departmental access page"
      introBody="The final design can later present departments as a structured network of academic and service units, helping users understand specialization areas, support functions, and institutional scope."
      highlights={[
        { label: "Structure", value: "Department Network" },
        { label: "Use Case", value: "Navigation & Info" },
        { label: "Layout State", value: "Prepared" }
      ]}
      sections={[
        {
          title: "Department Presentation",
          body: "This page can later organize department introductions in a way that feels informative and easy to browse.",
          points: ["Clinical units", "Academic departments", "Support and administrative divisions"]
        },
        {
          title: "Potential Expansion",
          body: "This structure supports future links into dedicated department profile pages or summaries.",
          points: ["Department cards", "Leadership info", "Quick service summaries"]
        }
      ]}
    />
  );
}
