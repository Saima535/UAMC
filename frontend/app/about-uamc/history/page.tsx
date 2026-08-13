import { AboutUamcPageShell } from "../../../components/about-uamc-page-shell";

export default function AboutUamcHistoryPage() {
  return (
    <AboutUamcPageShell
      eyebrow="About UAMC"
      title="History of UAMC"
      description="This placeholder history page establishes a clean structure for telling the story of the institution, from its founding context to later academic and organizational growth."
      introTitle="A timeline-oriented narrative page"
      introBody="The page is prepared to hold chronological storytelling about how UAMC was formed, what need it responded to, and how its educational and healthcare identity developed over time. Later, it can be turned into a richer visual history section."
      highlights={[
        { label: "Content Style", value: "Chronological" },
        { label: "Primary Use", value: "Institutional Story" },
        { label: "Expansion Ready", value: "Yes" }
      ]}
      sections={[
        {
          title: "Potential Historical Milestones",
          body: "This area can eventually highlight the major phases of UAMC's growth in a clear and authoritative way.",
          points: ["Founding year and background", "Academic launch milestones", "Infrastructure expansion"]
        },
        {
          title: "Historical Context",
          body: "A good history page should connect the institution's origin with the larger educational and healthcare needs of the community it serves.",
          points: ["Founders' original vision", "Community demand", "Early development challenges"]
        }
      ]}
    />
  );
}
