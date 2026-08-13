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
  { href: "/facilities/seminar", label: "Seminar", active: true },
  { href: "/facilities/hostel", label: "Hostel" },
  { href: "/facilities/laboratory", label: "Laboratory" },
  { href: "/facilities/cafeteria", label: "Cafeteria" }
];

const infoCards = {
  weekly: [
    {
      title: "Rotational Participation:",
      body: "All departments of UAMC actively participate on a rotating basis, ensuring diverse medical insights across specialties."
    },
    {
      title: "Case-Based Learning:",
      body: "Focus on real clinical cases of academic interest to sharpen diagnostic and treatment skills."
    }
  ],
  guest: [
    {
      title: "National & International Experts:",
      body: "Distinguished speakers from other medical institutions in Bangladesh and abroad are invited to share their expertise."
    },
    {
      title: "Cross-disciplinary Learning:",
      body: "Encourages open dialogue and collaboration among specialties, fostering a holistic medical education environment."
    }
  ],
  activities: ["Clinical Seminars", "Symposia", "Workshops"]
};

function SeminarIcon() {
  return (
    <svg viewBox="0 0 104 104" fill="none" className="h-[96px] w-[96px] text-[#0b9444]" aria-hidden="true">
      <rect x="6" y="16" width="46" height="50" rx="8" fill="currentColor" />
      <path d="M20 42 32 30c2.2-2.2 5.8-2.2 8 0l6 6c2.2 2.2 2.2 5.8 0 8L34 56" stroke="#EEF8F0" strokeWidth="6.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 72 34 88" stroke="currentColor" strokeWidth="6.4" strokeLinecap="round" />
      <path d="M29 78h32" stroke="currentColor" strokeWidth="6.4" strokeLinecap="round" />
      <path d="M68 46c7-7 16.5-10.7 28-11.2" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M68 46c6.2 4.3 11.7 11.5 13.8 21.8" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
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
        src="/Seminar/hero-strip-placeholder.svg"
        alt="Seminar decorative strip placeholder"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="flex min-h-[96px] items-center justify-between gap-6 bg-[#e5f5e8] px-5 py-5 sm:px-6">
      <p className="max-w-[640px] text-[17px] leading-[1.65] text-[#575757]">
        <span className="font-extrabold text-[#4a4a4a]">{title}</span> {body}
      </p>
      <ArrowTile />
    </article>
  );
}

export default function FacilitiesSeminarPage() {
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
                      HOME &gt; FACILITIES &gt;&gt; <span className="text-[#0f9f49]">Seminar</span>
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
                  <SeminarIcon />
                  <div>
                    <h2 className="font-sans text-[clamp(2.8rem,4.4vw,4.4rem)] font-extrabold leading-[0.92] tracking-tight text-[#111]">
                      Scientific
                      <br />
                      <span className="text-[#0c9a45]">Seminars</span>
                    </h2>
                  </div>
                </div>

                <div className="max-w-[760px] pt-1 text-[17px] leading-[1.65] text-[#525252]">
                  <p>
                    <span className="font-extrabold text-[#4d4d4d]">Promoting Knowledge Through Shared Clinical Experiences</span>
                    <br />
                    At <span className="font-extrabold">Uttara Adhunik Medical College (UAMC)</span>, Scientific Seminars are
                    held every Saturday, playing a key role in enhancing academic exchange and clinical insight. These
                    sessions are coordinated by the Medical Education Unit (MEU).
                  </p>
                </div>
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-2">
                <div className="relative aspect-[1.15/0.74] overflow-hidden bg-[#ddebe0]">
                  <Image
                    src="/Seminar/seminar-left-placeholder.svg"
                    alt="Seminar left image placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[1.15/0.74] overflow-hidden bg-[#ddebe0]">
                  <Image
                    src="/Seminar/seminar-right-placeholder.svg"
                    alt="Seminar right image placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1480px]">
              <section>
                <h3 className="font-display text-[clamp(2.6rem,4vw,4rem)] leading-none text-[#111]">Weekly Academic Presentations</h3>
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  {infoCards.weekly.map((item) => (
                    <InfoCard key={item.title} title={item.title} body={item.body} />
                  ))}
                </div>
              </section>

              <section className="mt-14">
                <h3 className="font-display text-[clamp(2.5rem,3.8vw,3.8rem)] leading-none text-[#111]">Guest Speakers &amp; Collaboration</h3>
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  {infoCards.guest.map((item) => (
                    <InfoCard key={item.title} title={item.title} body={item.body} />
                  ))}
                </div>
              </section>

              <section className="mt-14">
                <h3 className="font-display text-[clamp(2.4rem,3.5vw,3.6rem)] leading-none text-[#111]">Academic Activities</h3>
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  {infoCards.activities.map((item) => (
                    <article key={item} className="flex min-h-[84px] items-center justify-between gap-6 bg-[#e5f5e8] px-5 py-5 sm:px-6">
                      <p className="max-w-[640px] text-[17px] font-extrabold leading-[1.65] text-[#575757]">{item}</p>
                      <ArrowTile />
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
