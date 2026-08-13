import { AdmissionPageShell } from "../../../components/admission-page-shell";

export default function AdmissionPaperPage() {
  return (
    <AdmissionPageShell
      eyebrow="Admission"
      title="Admission Paper"
      description="This placeholder page is intended for admission paper information and can later describe required documents, submission sets, and official supporting papers."
      introTitle="A document-oriented page"
      introBody="The final version can help applicants understand exactly which papers are required, how they should be prepared, and which documents are mandatory at each stage of admission."
      highlights={[
        { label: "Theme", value: "Documents" },
        { label: "Primary Use", value: "Preparation Guide" },
        { label: "Page Readiness", value: "Prepared" }
      ]}
      sections={[
        {
          title: "Document Categories",
          body: "This section can later organize all required papers into clear groups for easier understanding.",
          points: ["Academic documents", "Identity records", "Supporting certificates"]
        },
        {
          title: "Submission Guidance",
          body: "This section can later explain how and when papers are expected during the admission process.",
          points: ["Original vs photocopy", "Submission stages", "Verification notes"]
        }
      ]}
    />
  );
}
