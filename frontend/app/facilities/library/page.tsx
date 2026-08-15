import Image from "next/image";
import Link from "next/link";
import { LandingPageHeader } from "../../../components/landing-page-header";
import { SiteFooter } from "../../../components/site-footer";

const facilityLinks = [
  { href: "/facilities/hospital-service", label: "Hospital Service" },
  { href: "/facilities/departments", label: "Departments" },
  { href: "/facilities/library", label: "Library", active: true },
  { href: "/facilities/medical-education-unit", label: "Medical Education Unit" },
  { href: "/facilities/training", label: "Training" },
  { href: "/facilities/publication", label: "Publications" },
  { href: "/facilities/seminar", label: "Seminar" },
  { href: "/facilities/hostel", label: "Hostel" },
  { href: "/facilities/laboratory", label: "Laboratory" },
  { href: "/facilities/cafeteria", label: "Cafeteria" }
];

const featureCards = [
  {
    title: "Reading Space:",
    body: "Accommodation for 105 students and teachers at a time in a quiet, focused environment."
  },
  {
    title: "Internet Access:",
    body: "High-speed internet is available for research and study."
  },
  {
    title: "Book Lending:",
    body: "Textbooks can be borrowed for on-campus or at-home use."
  },
  {
    title: "Photocopying:",
    body: "A photocopy machine is available for quick access to academic materials."
  }
];

function LibraryIcon() {
  return (
    <svg viewBox="0 0 104 104" fill="none" className="h-[96px] w-[96px] text-[#0b9444]" aria-hidden="true">
      <rect x="20" y="26" width="58" height="48" rx="14" fill="currentColor" />
      <path d="M36 56h26" stroke="#EEF8F0" strokeWidth="6.4" strokeLinecap="round" />
      <path d="M28 10h42M24 18h50" stroke="#BDE8C9" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.8 1.8" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path d="M7 2v4" />
      <path d="M17 2v4" />
      <path d="M3 9h18" />
      <path d="M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
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
        src="/Library/camp1.jpg"
        alt="Library decorative strip"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="flex min-h-[98px] items-center justify-between gap-6 bg-[#e5f5e8] px-5 py-5 sm:px-6">
      <p className="max-w-[640px] text-[17px] leading-[1.65] text-[#575757]">
        <span className="font-extrabold text-[#4a4a4a]">{title}</span> {body}
      </p>
      <ArrowTile />
    </article>
  );
}

export default function FacilitiesLibraryPage() {
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
                      HOME &gt; FACILITIES &gt;&gt; <span className="text-[#0f9f49]">Library</span>
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
              <div className="mx-auto flex w-fit items-center gap-10 bg-[#dff0df] px-10 py-4 text-[18px] text-[#2e4732]">
                <div className="flex items-center gap-3">
                  <ClockIcon />
                  <p>
                    <span className="font-extrabold text-[#1c2d1f]">Open:</span> 8:00 AM - 9:00 PM
                  </p>
                </div>
                <div className="h-7 w-px bg-[#5f7763]" />
                <div className="flex items-center gap-3">
                  <CalendarIcon />
                  <p>
                    <span className="font-extrabold text-[#1c2d1f]">Days:</span> All working days
                  </p>
                </div>
              </div>

              <div className="mt-12 grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                <div className="flex items-start gap-6">
                  <LibraryIcon />
                  <div>
                    <h2 className="font-display text-[clamp(2.6rem,4.2vw,4.4rem)] leading-[0.95] text-[#111]">
                      About the
                      <br />
                      <span className="font-semibold text-[#0c9a45]">Library</span>
                    </h2>
                  </div>
                </div>

                <div className="max-w-[760px] pt-1 text-[17px] leading-[1.7] text-[#525252]">
                  <p>
                    <span className="font-extrabold text-[#4d4d4d]">A Modern Hub for Academic Excellence</span>
                    <br />
                    The College Library is a fully air-conditioned, modern facility located on the 12th floor of the
                    academic building, designed to support students and faculty with rich academic resources and a
                    comfortable study environment.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <div className="relative aspect-[2.08/0.78] overflow-hidden bg-[#ddebe0]">
                  <Image
                    src="/Library/camp1.jpg"
                    alt="Library main hall"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-12 flex flex-col items-center justify-center gap-8 text-center md:flex-row md:gap-16">
                <div>
                  <p className="text-[56px] font-extrabold leading-none text-[#0c9a45]">3,371 +</p>
                  <p className="mt-2 text-[15px] text-[#8a8a8a]">latest editions</p>
                  <p className="mt-1 text-[22px] font-extrabold text-[#262626]">Books</p>
                </div>
                <div className="hidden h-24 w-px bg-[#666] md:block" />
                <div>
                  <p className="text-[56px] font-extrabold leading-none text-[#0c9a45]">1,187 +</p>
                  <p className="mt-2 text-[15px] text-[#8a8a8a]">367 Foreign journals</p>
                  <p className="mt-1 text-[22px] font-extrabold text-[#262626]">Journals</p>
                </div>
              </div>

              <p className="mt-10 text-center text-[18px] text-[#4a4a4a]">
                <span className="font-extrabold">Digital Catalog:</span> All resources are indexed and catalogued in a computerized database for easy access.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-[1480px] gap-8 lg:grid-cols-2">
              {featureCards.map((item) => (
                <InfoCard key={item.title} title={item.title} body={item.body} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
