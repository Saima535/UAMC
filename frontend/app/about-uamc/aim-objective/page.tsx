import { AboutUamcPageShell } from "../../../components/about-uamc-page-shell";

export default function AboutUamcAimObjectivePage() {
  return (
    <AboutUamcPageShell
      eyebrow="About UAMC"
      title="Aim & Objective"
      description="This page is ready to hold the operational aims and measurable educational objectives of UAMC in a structured and easy-to-scan format."
      introTitle="A practical goals page"
      introBody="The purpose of this placeholder page is to separate broad institutional intention from practical objectives. That makes it easier later to present strategic goals, student outcomes, and operational priorities in a professional institutional format."
      highlights={[
        { label: "Focus", value: "Institutional Goals" },
        { label: "Use Case", value: "Policy & Public Info" },
        { label: "Layout Status", value: "Prepared" }
      ]}
      sections={[
        {
          title: "Institutional Aims",
          body: "This section can later describe what the college seeks to achieve in a broad academic and social sense.",
          points: ["Produce competent graduates", "Promote disciplined learning", "Support responsible healthcare culture"]
        },
        {
          title: "Operational Objectives",
          body: "This section can translate those aims into actionable objectives that are easier to understand and measure.",
          points: ["Strengthen clinical exposure", "Improve teaching resources", "Maintain academic standards"]
        }
      ]}
    />
  );
}
