import { AdmissionPageShell } from "../../../components/admission-page-shell";

export default function AdmissionResultsPage() {
  return (
    <AdmissionPageShell
      eyebrow="Admission"
      title="Admission Results"
      description="This placeholder page is ready to present admission result information in a clear and organized way once the final result workflow is defined."
      introTitle="A result publication page"
      introBody="The final version can support official publication of admission outcomes, result notices, schedules, and follow-up guidance for selected candidates."
      highlights={[
        { label: "Topic", value: "Results" },
        { label: "Best Use", value: "Official Notice" },
        { label: "Current Phase", value: "Placeholder" }
      ]}
      sections={[
        {
          title: "Result Announcement",
          body: "This section can later explain when and how admission results are released.",
          points: ["Publication schedule", "Result channels", "Notification methods"]
        },
        {
          title: "Post-Result Guidance",
          body: "This area can later help applicants understand the next steps after results are announced.",
          points: ["Selected candidate instructions", "Waiting list guidance", "Required confirmation steps"]
        }
      ]}
    />
  );
}
