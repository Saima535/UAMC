import { AboutUamcPageShell } from "../../../components/about-uamc-page-shell";

export default function AboutUamcVisionMissionPage() {
  return (
    <AboutUamcPageShell
      eyebrow="About UAMC"
      title="Vision & Mission"
      description="This page is structured to present the guiding philosophy of UAMC, including the long-term vision of the institution and the mission that informs its day-to-day academic direction."
      introTitle="The values and direction page"
      introBody="This placeholder layout is intended for formal institutional statements. It can later be enhanced with design elements that distinguish strategic vision from operational mission, while preserving a clear and professional reading flow."
      highlights={[
        { label: "Core Theme", value: "Direction" },
        { label: "Content Tone", value: "Formal" },
        { label: "Audience", value: "Public & Academic" }
      ]}
      sections={[
        {
          title: "Vision Block",
          body: "The vision area can present the long-range aspirations of UAMC in a compact but high-impact format.",
          points: ["Long-term institutional ambition", "Educational excellence", "Community contribution"]
        },
        {
          title: "Mission Block",
          body: "The mission area can explain how the institution intends to realize that vision in practical terms.",
          points: ["Teaching quality", "Ethical medical training", "Service-oriented leadership"]
        }
      ]}
    />
  );
}
