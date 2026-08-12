import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { SectionTitle } from "../../components/section-title";
import { doctors } from "../../lib/site";

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Doctors" title="Specialist profiles with room for booking and timings." description="A clean doctor directory makes the design easy to scan and easy to extend." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-lg font-semibold text-primary">
                {doctor.name
                  .split(" ")
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{doctor.name}</h3>
              <p className="mt-1 text-sm text-muted">{doctor.role}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
