import { AdmissionPageShell } from "../../../components/admission-page-shell";

export default function AdmissionRulesPage() {
  return (
    <AdmissionPageShell
      eyebrow="Admission"
      title="Admission Rules"
      description="This placeholder page is designed for official admission rules and can later present eligibility, conditions, and procedural expectations in a formal structure."
      introTitle="A policy-focused page"
      introBody="The final design can communicate admission rules with clarity and authority, helping applicants understand institutional requirements before they begin the process."
      highlights={[
        { label: "Content Type", value: "Policy" },
        { label: "Purpose", value: "Guidance & Rules" },
        { label: "Current Stage", value: "Scaffolded" }
      ]}
      sections={[
        {
          title: "Eligibility and Conditions",
          body: "This section can later present the main admission conditions in a clean and easily referenced format.",
          points: ["Eligibility requirements", "Academic qualifications", "Compliance conditions"]
        },
        {
          title: "Institutional Rules",
          body: "This area can later explain additional policies that affect the admission process and applicant responsibilities.",
          points: ["Submission rules", "Verification expectations", "Policy-based restrictions"]
        }
      ]}
    />
  );
}
