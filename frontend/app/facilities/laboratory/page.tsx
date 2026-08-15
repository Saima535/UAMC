import Image from "next/image";
import Link from "next/link";
import { LandingPageHeader } from "../../../components/landing-page-header";
import { SiteFooter } from "../../../components/site-footer";

const facilityLinks = [
  { href: "/facilities/hospital-service", label: "Hospital Service" },
  { href: "/facilities/departments", label: "Departments" },
  { href: "/facilities/library", label: "Library" },
  { href: "/facilities/medical-education-unit", label: "Medical Education Unit" },
  { href: "/facilities/training", label: "Training" },
  { href: "/facilities/publication", label: "Publications" },
  { href: "/facilities/seminar", label: "Seminar" },
  { href: "/facilities/hostel", label: "Hostel" },
  { href: "/facilities/laboratory", label: "Laboratory", active: true },
  { href: "/facilities/cafeteria", label: "Cafeteria" }
];

const labItems = [
  "Hematology",
  "Mycology",
  "Clinical Chemistry",
  "Parasitology",
  "Urinalysis",
  "Diagnostic Serology",
  "Therapeutic Drug Monitoring",
  "Surgical Pathology",
  "Bacteriology",
  "Cytopathology"
];

function LaboratoryIcon() {
  return (
    <svg viewBox="0 0 104 104" fill="none" className="h-[92px] w-[92px] text-[#0a9843]" aria-hidden="true">
      <rect x="4" y="6" width="90" height="90" rx="13" fill="currentColor" />
      <path d="M23 22h7v28h-7V22Zm12 0h7v28h-7V22Zm12 10h7v18h-7V32Zm-21 35h36" stroke="#EFF8F0" strokeWidth="4.8" strokeLinecap="round" />
      <path d="m60 22 8 16-11 22c-2.4 4.8 1.1 10.5 6.5 10.5H80" stroke="#EFF8F0" strokeWidth="5.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M67 22h18" stroke="#EFF8F0" strokeWidth="5.4" strokeLinecap="round" />
      <path d="M55 79h33" stroke="#EFF8F0" strokeWidth="5.4" strokeLinecap="round" />
    </svg>
  );
}

function ArrowTile() {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center bg-white text-[28px] font-light text-[#1fa14a] shadow-[0_0_0_1px_rgba(18,135,63,0.05)]">
      →
    </span>
  );
}

function MedicalPattern() {
  return (
    <div className="absolute inset-x-0 top-0 h-[104px] overflow-hidden">
      <Image
        src="/Laboratory/umac2.jpg"
        alt="Laboratory decorative strip"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

export default function FacilitiesLaboratoryPage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1d]">
      <LandingPageHeader />

      <main>
        <section className="bg-[#eff8f1] pb-14 pt-1">
          <div className="mx-auto max-w-[1600px] px-0">
            <div className="relative min-h-[510px] overflow-hidden bg-[#eff8f1]">
              <MedicalPattern />

              <div className="mx-auto px-4 pt-[118px] sm:px-6 lg:px-8">
                <div className="mx-auto flex min-h-[324px] max-w-[1480px] items-center justify-between bg-[#a8d7af] px-10 py-10 sm:px-12 lg:px-14">
                  <div className="pt-10">
                    <p className="text-[18px] font-semibold uppercase tracking-[-0.01em] text-[#111111]">
                      HOME &gt; FACILITIES &gt;&gt; <span className="text-[#0f9f49]">Laboratory</span>
                    </p>
                    <h1 className="mt-4 font-display text-[clamp(3.8rem,6vw,6rem)] font-medium leading-[0.9] tracking-tight text-[#1a1a1a]">
                      FACILITES <span className="font-semibold text-[#0d9a44]">UAMC</span>
                    </h1>
                  </div>

                  <div className="relative hidden h-[220px] w-[220px] shrink-0 lg:block">
                    <Image src="/images/logo2.jpg" alt="UAMC seal" fill sizes="220px" className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-[1480px] grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
              {facilityLinks.slice(0, 6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-[48px] items-center justify-center rounded-[4px] px-4 text-center text-[13px] font-medium text-white transition ${
                    item.active ? "bg-[#0c9a45]" : "bg-[#7f7f82] hover:bg-[#0c9a45]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="hidden lg:block" />
              {facilityLinks.slice(6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-[48px] items-center justify-center rounded-[4px] px-4 text-center text-[13px] font-medium text-white transition ${
                    item.active ? "bg-[#0c9a45]" : "bg-[#7f7f82] hover:bg-[#0c9a45]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        <section className="bg-[#eef8f1] py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1480px]">
              <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                <div className="flex items-start gap-5">
                  <LaboratoryIcon />
                  <div>
                    <h2 className="font-sans text-[clamp(3rem,4.6vw,4.6rem)] font-extrabold leading-[0.92] tracking-tight text-[#111]">
                      <span className="text-[#0c9a45]">Laboratory</span>
                      <br />
                      Services
                    </h2>
                  </div>
                </div>

                <div className="max-w-[780px] pt-3 text-[22px] leading-[1.45] text-[#525252]">
                  <p>
                    <span className="font-extrabold text-[#4d4d4d]">Accuracy. Efficiency. Around-the-Clock Support.</span>
                    <br />
                    At <span className="font-extrabold">Uttara Adhunik Medical College &amp; Hospital (UAMCH)</span>, we prioritize
                    precision and speed in delivering diagnostic test results, ensuring optimal care for every patient.
                  </p>
                </div>
              </div>

              <div className="mt-14">
                <div className="relative aspect-[2.18/0.7] overflow-hidden bg-[#ddebe0]">
                  <Image
                    src="/Laboratory/dept1.jpg"
                    alt="Laboratory services"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-28">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-[1480px] gap-8 lg:grid-cols-2">
              {labItems.map((item) => (
                <article key={item} className="flex min-h-[96px] items-center justify-between gap-6 bg-[#e5f5e8] px-5 py-5 sm:px-6">
                  <p className="max-w-[620px] text-[17px] font-extrabold leading-[1.65] text-[#575757]">{item}</p>
                  <ArrowTile />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
