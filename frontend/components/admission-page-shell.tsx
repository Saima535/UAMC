import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type AdmissionHighlight = {
  label: string;
  value: string;
};

type AdmissionSection = {
  title: string;
  body: string;
  points: string[];
};

type AdmissionPageShellProps = {
  title: string;
  description: string;
  eyebrow: string;
  introTitle: string;
  introBody: string;
  highlights: AdmissionHighlight[];
  sections: AdmissionSection[];
};

const admissionLinks = [
  { href: "/admission/admission-procedure-and-fees", label: "Admission Procedure and Fees" },
  { href: "/admission/admission-rules", label: "Admission Rules" },
  { href: "/admission/admission-paper", label: "Admission Paper" },
  { href: "/admission/admission-forms", label: "Admission Forms" },
  { href: "/admission/admission-results", label: "Admission Results" },
  { href: "/admission/online-registration", label: "Online Registration" }
];

export function AdmissionPageShell({
  title,
  description,
  eyebrow,
  introTitle,
  introBody,
  highlights,
  sections
}: AdmissionPageShellProps) {
  return (
    <div className="min-h-screen bg-[#f5f8f3]">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-[28px] border border-[#d9e4dc] bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#14843f]">Admission</p>
            <div className="mt-5 space-y-2">
              {admissionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-[#33413a] transition hover:bg-[#edf5ef] hover:text-[#14843f]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>

          <section className="space-y-8">
            <div className="overflow-hidden rounded-[32px] border border-[#d9e4dc] bg-white shadow-sm">
              <div className="bg-[linear-gradient(135deg,#eef5ef_0%,#fbfcfa_55%,#e2efe6_100%)] px-8 py-10 sm:px-10 sm:py-12">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#14843f]">{eyebrow}</p>
                    <h1 className="mt-4 text-[clamp(2.2rem,4vw,4.1rem)] font-semibold tracking-tight text-[#16211a]">{title}</h1>
                    <p className="mt-6 max-w-3xl text-base leading-8 text-[#5d6d63]">{description}</p>
                  </div>

                  <div className="relative hidden h-[128px] w-[128px] shrink-0 lg:block">
                    <Image src="/images/logo.png" alt="UAMC logo" fill sizes="128px" className="object-contain" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 border-t border-[#d9e4dc] px-8 py-8 sm:grid-cols-3 sm:px-10">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-[#dfe9e1] bg-[#f8fbf9] px-5 py-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#14843f]">{item.label}</p>
                    <p className="mt-3 text-2xl font-semibold text-[#1b2b21]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
              <article className="rounded-[32px] border border-[#d9e4dc] bg-white p-8 shadow-sm sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14843f]">Overview</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1d2c23]">{introTitle}</h2>
                <p className="mt-5 text-sm leading-8 text-[#627267]">{introBody}</p>
              </article>

              <article className="rounded-[32px] border border-dashed border-[#cfe0d5] bg-[#f7fbf8] p-8 shadow-sm sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14843f]">Placeholder Status</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1d2c23]">Ready For Final Design</h2>
                <p className="mt-5 text-sm leading-8 text-[#627267]">
                  This admission page now has route structure, sample content, and a consistent placeholder layout. Final
                  UI design, official policy details, and downloadable resources can be added later without changing the
                  page structure.
                </p>
              </article>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {sections.map((section) => (
                <article key={section.title} className="rounded-[32px] border border-[#d9e4dc] bg-white p-8 shadow-sm sm:p-10">
                  <h2 className="text-2xl font-semibold text-[#1d2c23]">{section.title}</h2>
                  <p className="mt-4 text-sm leading-8 text-[#627267]">{section.body}</p>
                  <div className="mt-6 space-y-3">
                    {section.points.map((point) => (
                      <div key={point} className="rounded-2xl bg-[#f3f8f4] px-4 py-4 text-sm font-medium text-[#31443a]">
                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
