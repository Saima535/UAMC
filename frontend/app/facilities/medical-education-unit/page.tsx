import { FacilitiesPageShell } from "../../../components/facilities-page-shell";

export default function FacilitiesMedicalEducationUnitPage() {
  return (
    <FacilitiesPageShell
      eyebrow="Facilities"
      title="Medical Education Unit"
      description="This placeholder page is intended for the Medical Education Unit and can later explain its academic role, faculty development contribution, and institutional support function."
      introTitle="A quality and academic development page"
      introBody="The final version can present how the Medical Education Unit contributes to modern teaching approaches, curriculum development, and academic quality enhancement across the institution."
      highlights={[
        { label: "Focus", value: "Academic Quality" },
        { label: "Audience", value: "Faculty & Students" },
        { label: "Prepared For", value: "Formal Content" }
      ]}
      sections={[
        {
          title: "Unit Responsibilities",
          body: "This section can later define the academic and institutional scope of the unit.",
          points: ["Faculty development", "Teaching improvement", "Curriculum support"]
        },
        {
          title: "Future Page Additions",
          body: "This structure can later be expanded with program information and official process details.",
          points: ["Workshop information", "Academic policies", "Evaluation support"]
        }
      ]}
    />
  );
}
