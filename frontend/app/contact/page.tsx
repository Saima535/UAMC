import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { SectionTitle } from "../../components/section-title";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Contact" title="A simple contact page with clear support details." description="This is ready for a map embed, contact form, and department-level routing." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Reach us</h3>
            <p className="mt-3 text-sm leading-6 text-muted">House 12, Road 5, Dhanmondi, Dhaka</p>
            <p className="text-sm leading-6 text-muted">+880 1234 567 890</p>
            <p className="text-sm leading-6 text-muted">info@uamc.com</p>
          </div>
          <form className="rounded-3xl border border-line bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Send a message</h3>
            <div className="mt-5 grid gap-4">
              <input className="rounded-2xl border border-line px-4 py-3 outline-none focus:border-primary" placeholder="Your name" />
              <input className="rounded-2xl border border-line px-4 py-3 outline-none focus:border-primary" placeholder="Your email" />
              <textarea className="min-h-32 rounded-2xl border border-line px-4 py-3 outline-none focus:border-primary" placeholder="How can we help?" />
            </div>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
