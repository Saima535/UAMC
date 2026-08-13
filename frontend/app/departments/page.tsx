import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { SectionTitle } from "../../components/section-title";
import { departments } from "../../lib/site";

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Departments" title="Browse the care network by specialty." description="A strong route structure keeps the information architecture clean as the prototype grows." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((dept) => (
            <article key={dept.name} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{dept.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{dept.description}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
