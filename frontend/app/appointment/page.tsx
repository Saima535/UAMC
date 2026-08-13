import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { SectionTitle } from "../../components/section-title";

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Appointment" title="A clean booking flow that can connect to real scheduling later." description="We can turn this into a multi-step booking experience after you share the exact Figma screen behavior." />
        <div className="mt-10 max-w-2xl rounded-3xl border border-line bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-2xl border border-line px-4 py-3 outline-none focus:border-primary" placeholder="Patient name" />
            <input className="rounded-2xl border border-line px-4 py-3 outline-none focus:border-primary" placeholder="Phone number" />
            <input className="rounded-2xl border border-line px-4 py-3 outline-none focus:border-primary" placeholder="Preferred date" />
            <input className="rounded-2xl border border-line px-4 py-3 outline-none focus:border-primary" placeholder="Department" />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
