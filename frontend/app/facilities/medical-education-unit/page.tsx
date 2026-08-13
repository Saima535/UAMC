import Image from "next/image";
import Link from "next/link";
import { LandingPageHeader } from "../../../components/landing-page-header";
import { SiteFooter } from "../../../components/site-footer";

const facilityLinks = [
  { href: "/facilities/hospital-service", label: "Hospital Service" },
  { href: "/facilities/departments", label: "Departments" },
  { href: "/facilities/library", label: "Library" },
  { href: "/facilities/medical-education-unit", label: "Medical Education Unit", active: true },
  { href: "/facilities/training", label: "Training" },
  { href: "/facilities/publication", label: "Publications" },
  { href: "/facilities/seminar", label: "Seminar" },
  { href: "/facilities/hostel", label: "Hostel" },
  { href: "/facilities/laboratory", label: "Laboratory" },
  { href: "/facilities/cafeteria", label: "Cafeteria" }
];

const resourceCards = [
  {
    title: "Computer Access:",
    body: "Multiple modern computers equipped with webcams, digital cameras, and necessary peripherals."
  },
  {
    title: "Connectivity Tools:",
    body: "Fax, internet, and email services are freely available and extensively used."
  },
  {
    title: "Peripheral Devices:",
    body: "Printers and scanners available for both students and faculty."
  }
];

const activities = ["Clinical Seminars", "Symposia", "Workshops"];

function MeuIcon() {
  return (
    <svg viewBox="0 0 106 106" fill="none" className="h-[96px] w-[96px] text-[#0b9444]" aria-hidden="true">
      <rect x="20" y="18" width="46" height="58" rx="10" fill="currentColor" />
      <path d="M34 18c0-10.5 8.5-19 19-19h2c10.5 0 19 8.5 19 19v8H34v-8Z" fill="currentColor" />
      <circle cx="52" cy="50" r="14" fill="#EEF8F0" />
      <path d="M52 42v16M44 50h16" stroke="#0b9444" strokeWidth="5.6" strokeLinecap="round" />
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
        src="/Medical Education Unit/hero-strip-placeholder.svg"
        alt="Medical Education Unit decorative strip placeholder"
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
      <p className="max-w-[680px] text-[17px] leading-[1.65] text-[#575757]">
        <span className="font-extrabold text-[#4a4a4a]">{title}</span> {body}
      </p>
      <ArrowTile />
    </article>
  );
}

export default function FacilitiesMedicalEducationUnitPage() {
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
                      HOME &gt; FACILITIES &gt;&gt; <span className="text-[#0f9f49]">Medical Education Unit</span>
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
                  <MeuIcon />
                  <div>
                    <h2 className="font-sans text-[clamp(2.5rem,4.2vw,4.2rem)] font-extrabold leading-[0.92] tracking-tight text-[#111]">
                      <span className="text-[#0c9a45]">Medical Education</span>
                      <br />
                      <span className="text-[#0c9a45]">Unit (MEU)</span>
                    </h2>
                  </div>
                </div>

                <div className="max-w-[760px] pt-1 text-[17px] leading-[1.65] text-[#525252]">
                  <p>
                    <span className="font-extrabold text-[#4d4d4d]">Enhancing Learning Through Technology &amp; Collaboration</span>
                    <br />
                    The Medical Education Unit (MEU) is a vital academic support center of the college, situated adjacent to
                    the library. It is designed to enhance the quality of medical education by offering digital resources,
                    training facilities, and collaborative opportunities.
                  </p>
                </div>
              </div>

              <div className="mt-14">
                <div className="relative aspect-[2.12/0.79] overflow-hidden bg-[#ddebe0]">
                  <Image
                    src="/Medical Education Unit/main-meu-placeholder.svg"
                    alt="Medical Education Unit main image placeholder"
                    fill
                    sizes="100vw"
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
                <h3 className="font-display text-[clamp(2.7rem,4vw,4.1rem)] leading-none text-[#111]">Facilities &amp; Resources</h3>
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  {resourceCards.slice(0, 2).map((item) => (
                    <InfoCard key={item.title} title={item.title} body={item.body} />
                  ))}
                  <div className="lg:max-w-[48.5%]">
                    <InfoCard title={resourceCards[2].title} body={resourceCards[2].body} />
                  </div>
                </div>
              </section>

              <section className="mt-14">
                <h3 className="font-display text-[clamp(2.6rem,3.9vw,4rem)] leading-none text-[#111]">Academic Databases</h3>
                <div className="mt-8">
                  <InfoCard
                    title="Hinari & Medline:"
                    body="Students and teachers enjoy online access to internationally recognized medical databases such as Hinari and Medline, supporting evidence-based education and research."
                  />
                </div>
              </section>

              <section className="mt-14">
                <div className="grid gap-8 lg:grid-cols-2">
                  {activities.map((item) => (
                    <article key={item} className="flex min-h-[84px] items-center justify-between gap-6 bg-[#e5f5e8] px-5 py-5 sm:px-6">
                      <p className="max-w-[640px] text-[17px] font-extrabold leading-[1.65] text-[#575757]">{item}</p>
                      <ArrowTile />
                    </article>
                  ))}
                </div>
              </section>

              <p className="mt-10 text-center text-[17px] leading-[1.6] text-[#363636]">
                These activities are <span className="font-extrabold">regularly organized</span> under MEU, promoting{" "}
                <span className="font-extrabold">interdisciplinary collaboration</span> and{" "}
                <span className="font-extrabold">continuous professional development</span> among faculty and students.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
