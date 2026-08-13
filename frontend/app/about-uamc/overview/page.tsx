import { AboutUamcPageShell } from "../../../components/about-uamc-page-shell";

export default function AboutUamcOverviewPage() {
  return (
    <AboutUamcPageShell
      eyebrow="About UAMC"
      title="Overview"
      description="Uttara Adhunik Medical College is presented here as a modern academic and healthcare institution focused on quality education, disciplined training, and community-centered service."
      introTitle="A concise institutional snapshot"
      introBody="This placeholder overview page is designed to introduce the college in a balanced way, covering identity, academic environment, service orientation, and the broader institutional promise. It can later be expanded with official copy, imagery, and section-level storytelling."
      highlights={[
        { label: "Institution Type", value: "Medical College" },
        { label: "Primary Focus", value: "Education & Care" },
        { label: "Content Status", value: "Placeholder Ready" }
      ]}
      sections={[
        {
          title: "What This Page Will Cover",
          body: "The final version of this page can serve as the foundational introduction for visitors, prospective students, guardians, and institutional partners.",
          points: ["Institution profile", "Academic positioning", "Campus and hospital relationship"]
        },
        {
          title: "Suggested Future Additions",
          body: "When the final design phase begins, this page can be extended with visual storytelling and stronger navigational anchors.",
          points: ["Hero image and message", "Principal summary", "Quick facts and milestones"]
        }
      ]}
    />
  );
}
