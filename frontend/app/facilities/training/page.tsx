import Image from "next/image";
import Link from "next/link";
import { LandingPageHeader } from "../../../components/landing-page-header";
import { SiteFooter } from "../../../components/site-footer";

const facilityLinks = [
  { href: "/facilities/hospital-service", label: "Hospital Service" },
  { href: "/facilities/departments", label: "Departments" },
  { href: "/facilities/library", label: "Library" },
  { href: "/facilities/medical-education-unit", label: "Medical Education Unit" },
  { href: "/facilities/training", label: "Training", active: true },
  { href: "/facilities/publication", label: "Publications" },
  { href: "/facilities/seminar", label: "Seminar" },
  { href: "/facilities/hostel", label: "Hostel" },
  { href: "/facilities/laboratory", label: "Laboratory" },
  { href: "/facilities/cafeteria", label: "Cafeteria" }
];

const trainingCards = [
  {
    title: "Undergraduate & Postgraduate Programs:",
    body: "Structured programs tailored to nurture knowledge, skills, and professional growth across medical disciplines."
  },
  {
    title: "Professional Roles Covered:",
    body: "Training is provided for: Indoor Medical Officers; Assistant Registrars; Registrars; Registrars in Training Positions"
  },
  {
    title: "Clinical Training System:",
    body: "A well-organized system involving: Clinical Meetings; Ward Rounds; Hands-on Classes"
  }
];

function TrainingIcon() {
  return (
    <svg viewBox="0 0 104 104" fill="none" className="h-[96px] w-[96px] text-[#0b9444]" aria-hidden="true">
      <rect x="18" y="20" width="44" height="52" rx="12" fill="#BDE8C9" />
      <rect x="24" y="16" width="50" height="64" rx="14" fill="currentColor" />
      <path d="M37 56h24" stroke="#EEF8F0" strokeWidth="6.4" strokeLinecap="round" />
      <path d="M31 10h36M35 4h28" stroke="#BDE8C9" strokeWidth="6" strokeLinecap="round" />
      <path d="M29 92h40" stroke="currentColor" strokeWidth="6.4" strokeLinecap="round" />
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
        src="/Training/camp2.jpg"
        alt="Training decorative strip"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

export default function FacilitiesTrainingPage() {
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
                      HOME &gt; FACILITIES &gt;&gt; <span className="text-[#0f9f49]">Training</span>
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
              <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                <div className="flex items-start gap-6">
                  <TrainingIcon />
                  <div>
                    <h2 className="font-sans text-[clamp(2.8rem,4.4vw,4.4rem)] font-extrabold leading-[0.92] tracking-tight text-[#111]">
                      <span className="text-[#0c9a45]">Training</span>
                      <br />
                      Facilities
                    </h2>
                  </div>
                </div>

                <div className="max-w-[780px] pt-1 text-[17px] leading-[1.65] text-[#525252]">
                  <p>
                    <span className="font-extrabold text-[#4d4d4d]">Building Future Healthcare Professionals</span>
                    <br />
                    <span className="font-extrabold">Uttara Adhunik Medical College &amp; Hospital (UAMCH)</span> is a proud
                    institution under Bangladesh Medical Studies and Research Institute (BMSRI), offering high-standard
                    training and learning opportunities for both undergraduate and postgraduate medical students.
                  </p>
                </div>
              </div>

              <div className="mt-14">
                <div className="relative aspect-[2.08/0.78] overflow-hidden border-[6px] border-white bg-[#ddebe0] shadow-[0_0_0_1px_rgba(15,15,15,0.06)]">
                  <Image
                    src="/Training/dept1.jpg"
                    alt="Training facilities"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1480px]">
              <div className="grid gap-8 lg:grid-cols-2">
                {trainingCards.slice(0, 2).map((item) => (
                  <article key={item.title} className="flex min-h-[100px] items-center justify-between gap-6 bg-[#e5f5e8] px-5 py-5 sm:px-6">
                    <p className="max-w-[640px] text-[17px] leading-[1.65] text-[#575757]">
                      <span className="font-extrabold text-[#4a4a4a]">{item.title}</span> {item.body}
                    </p>
                    <ArrowTile />
                  </article>
                ))}
                <article className="flex min-h-[100px] items-center justify-between gap-6 bg-[#e5f5e8] px-5 py-5 sm:px-6 lg:col-span-1">
                  <p className="max-w-[640px] text-[17px] leading-[1.65] text-[#575757]">
                    <span className="font-extrabold text-[#4a4a4a]">{trainingCards[2].title}</span> {trainingCards[2].body}
                  </p>
                  <ArrowTile />
                </article>
              </div>

              <p className="mt-12 text-center text-[17px] text-[#363636]">
                More detailed scopes and training outlines are available in the Academic Activities section.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
