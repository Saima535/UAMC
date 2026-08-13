import { AdmissionPageShell } from "../../../components/admission-page-shell";

export default function AdmissionProcedureAndFeesPage() {
  return (
    <AdmissionPageShell
      eyebrow="Admission"
      title="Admission Procedure and Fees"
      description="This placeholder page is prepared to explain the admission workflow and fee-related information in a structured and accessible format."
      introTitle="A process and cost overview page"
      introBody="The final page can later combine step-by-step application guidance with clearly presented fee information so prospective students and guardians can understand the process without confusion."
      highlights={[
        { label: "Primary Topic", value: "Procedure & Fees" },
        { label: "Audience", value: "Applicants" },
        { label: "Status", value: "Placeholder Ready" }
      ]}
      sections={[
        {
          title: "Admission Flow",
          body: "This section can later describe the full progression from inquiry to final enrollment.",
          points: ["Application steps", "Verification stages", "Final confirmation process"]
        },
        {
          title: "Fee Presentation",
          body: "This section can later present fee categories in a clearer and more official format.",
          points: ["Admission fees", "Installment details", "Policy notes and conditions"]
        }
      ]}
    />
  );
}
