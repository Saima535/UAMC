import Image from "next/image";
import Link from "next/link";
import { LandingPageHeader } from "../../../components/landing-page-header";
import { SiteFooter } from "../../../components/site-footer";

const tabs = [
  { label: "Admission Procedure & Fees", href: "/admission" },
  { label: "Admission Papers", href: "/admission/papers" },
  { label: "Application Form", href: "/admission/admission-forms" },
  { label: "Admission Results", href: "/admission/admission-results" },
  { label: "Online Registration", href: "/admission/online-registration" }
];

const rules = [
  "Applicants must meet the academic and medical eligibility criteria set by DGME and the Government of Bangladesh.",
  "All applications must be submitted with complete documents and supporting certificates as required by the admission authority.",
  "Selection is based on merit, quota policies, and the official admission notice published by the relevant authority.",
  "Students must complete admission and registration within the declared deadline; otherwise the seat may be cancelled and offered to the next eligible candidate.",
  "Any false information or incomplete submission may lead to rejection or cancellation of the admission process."
];

export default function AdmissionRulesPage() {
  return (
    <div className="min-h-screen bg-[#f3f5f1] text-[#171717]">
      <LandingPageHeader />

      <main className="mx-auto w-full max-w-[1600px] px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <section className="overflow-hidden border border-[#dfeae0] bg-[#dfeae0]">
          <div className="relative px-5 py-6 sm:px-7 lg:px-8 lg:py-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1d3428]">
              HOME <span className="px-2 text-[#4f6754]">&gt;</span> <span className="text-[#1a7d4f]">Admission Rules</span>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <h1 className="text-[clamp(2.2rem,4vw,5rem)] font-medium leading-[0.95] tracking-tight text-[#111]">
                Admission <span className="text-[#1a7d4f]">UAMC</span>
              </h1>
              <div className="hidden lg:flex">
                <div className="relative h-[128px] w-[128px] rounded-full border-[10px] border-[#dfeae0] bg-[#cdf2d5] shadow-[0_12px_24px_rgba(17,36,25,0.12)]">
                  <div className="absolute inset-[18px] rounded-full border-[5px] border-[#2e7d4b] bg-[#edf5ee]" />
                  <div className="absolute inset-[32px] rounded-full border-[6px] border-[#204a33] bg-[#d4ead8]" />
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5f39]">UAMC</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-3 flex flex-wrap gap-2 bg-[#f1f4f0] px-2 py-4">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.04em] ${
                tab.href === "/admission/admission-rules" ? "bg-[#1a7d4f] text-white" : "bg-[#4a514d] text-white/90"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <section className="mt-8 rounded-[18px] bg-white p-4 shadow-[0_10px_30px_rgba(17,38,28,0.04)] ring-1 ring-[#e2ebdf] sm:p-6 lg:p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-1 bg-[#1a7d4f]" />
              <h2 className="text-3xl font-medium text-[#1b1b1b]">Admission Rules</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-6">
                <p className="text-[15px] leading-8 text-[#4d5e55]">
                  Uttara Adhunik Medical College (UAMC) follows the admission policies and guidelines set by the Government of Bangladesh, the Directorate General of Medical Education (DGME), and the relevant medical education authorities. Applicants are required to comply with the documented eligibility, selection, and submission rules for each intake cycle.
                </p>

                <div className="rounded-[14px] border border-[#dfeae0] bg-[#f8faf8] p-4">
                  <h3 className="text-xl font-semibold text-[#1a7d4f]">Eligibility & Conditions</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-8 text-[#485b52]">
                    {rules.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-[14px] border border-[#dfeae0] bg-[#ebf4ed]">
                <div className="relative h-[260px] w-full">
                  <Image src="/Admission Rules/camp2.jpg" alt="Admission rules illustration" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1a7d4f]">Official Policy</p>
                  <p className="mt-2 text-[15px] leading-7 text-[#42594d]">Applicants are advised to check the latest notices before final submission, as admission criteria and seat allocation rules may be revised by the authority.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

