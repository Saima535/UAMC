import { AdmissionPageShell } from "../../../components/admission-page-shell";

export default function OnlineRegistrationPage() {
  return (
    <AdmissionPageShell
      eyebrow="Admission"
      title="Online Registration"
      description="This placeholder page is designed for the online registration flow and can later support digital application access, instructions, and process guidance."
      introTitle="A digital registration page"
      introBody="The final page can serve as the main online registration entry point, giving applicants a guided path through registration requirements, system steps, and digital submission expectations."
      highlights={[
        { label: "Mode", value: "Online" },
        { label: "Use Case", value: "Digital Entry" },
        { label: "Design State", value: "Placeholder Ready" }
      ]}
      sections={[
        {
          title: "Registration Workflow",
          body: "This section can later break down the online registration process into clean, sequential steps.",
          points: ["Account or access step", "Data entry flow", "Submission confirmation"]
        },
        {
          title: "System Support",
          body: "This area can later provide help content and technical guidance for applicants using the registration system.",
          points: ["Eligibility reminders", "Troubleshooting help", "Submission checklist"]
        }
      ]}
    />
  );
}
