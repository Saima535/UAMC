import { AdmissionPageShell } from "../../../components/admission-page-shell";

export default function AdmissionFormsPage() {
  return (
    <AdmissionPageShell
      eyebrow="Admission"
      title="Admission Forms"
      description="This placeholder page is prepared for admission form access and can later provide instructions, downloadable resources, and form submission details."
      introTitle="A forms access page"
      introBody="The final version can become the main entry point for form-related tasks, allowing applicants to find forms quickly and understand how to complete them correctly."
      highlights={[
        { label: "Resource Type", value: "Forms" },
        { label: "Main Goal", value: "Easy Access" },
        { label: "State", value: "Placeholder" }
      ]}
      sections={[
        {
          title: "Form Availability",
          body: "This section can later list the different forms that applicants may need throughout the process.",
          points: ["Primary admission form", "Supplementary forms", "Correction or update forms"]
        },
        {
          title: "Completion Guidance",
          body: "This area can later explain how to complete and submit forms correctly.",
          points: ["How to fill the form", "Submission instructions", "Common applicant mistakes"]
        }
      ]}
    />
  );
}
