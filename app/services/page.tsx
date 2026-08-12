import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { SectionTitle } from "../../components/section-title";
import { services } from "../../lib/site";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Services" title="Patient services, diagnostics, and care coordination." description="This page can later be split into detailed service subpages as the Figma map becomes available." />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Add supporting details, pricing, schedules, or department links here.
              </p>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
