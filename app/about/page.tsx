import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { SectionTitle } from "../../components/section-title";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="About" title="A hospital experience that feels modern, readable, and reassuring." description="This page is a foundation for the design system and can be extended with the actual Figma copy and imagery once available." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {["Our mission", "Our values", "Our history"].map((item) => (
            <div key={item} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Placeholder content tuned for structure, spacing, and hierarchy. Replace with the exact content from Figma when available.
              </p>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
