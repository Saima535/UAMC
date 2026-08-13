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
  { href: "/facilities/laboratory", label: "Laboratory" },
  { href: "/facilities/cafeteria", label: "Cafeteria", active: true }
];

const featureCards = [
  {
    title: "Healthy Food Options:",
    body: "Carefully selected menus focused on wellness and nutrition."
  },
  {
    title: "Hygiene & Quality:",
    body: "Cleanliness and food safety are strictly maintained."
  },
  {
    title: "Extended Hours:",
    body: "Services are available until late to accommodate busy academic and clinical schedules."
  }
];

function CafeteriaIcon() {
  return (
    <svg viewBox="0 0 96 96" fill="none" className="h-[78px] w-[78px] text-[#0b9444]" aria-hidden="true">
      <path d="M16 63c0-14.6 11.4-26.5 25.7-27.5C43.5 26 51.1 19 60.4 19c11 0 20.1 9 20.1 20.1 0 3.3-.8 6.4-2.2 9.2 6 3.1 10.2 9.4 10.2 16.7H16Z" fill="currentColor" />
      <path d="M21 70h67c2.8 0 5 2.2 5 5v3H16v-3c0-2.8 2.2-5 5-5Z" fill="currentColor" />
      <path d="M44 47c8 0 14.2 3.5 18.2 8.3" stroke="#eaf6eb" strokeWidth="7" strokeLinecap="round" />
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
        src="/Cafeteria/hero-strip-placeholder.svg"
        alt="Cafeteria decorative strip placeholder"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

export default function FacilitiesCafeteriaPage() {
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
                  <div className="pt-14">
                    <p className="text-[18px] font-semibold uppercase tracking-[-0.01em] text-[#111111]">
                      HOME &gt; FACILITIES &gt;&gt; <span className="text-[#0f9f49]">Cafeteria</span>
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
              <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
                <div className="flex items-start gap-6">
                  <CafeteriaIcon />
                  <div>
                    <h2 className="font-sans text-[clamp(3rem,4.6vw,4.6rem)] font-extrabold leading-[0.92] tracking-tight text-[#111]">
                      <span className="text-[#0c9a45]">Cafeteria</span>
                      <br />
                      Services
                    </h2>
                  </div>
                </div>

                <div className="max-w-[720px] pt-2 text-[22px] leading-[1.45] text-[#525252]">
                  <p>
                    <span className="font-extrabold text-[#4d4d4d]">Nourishing Meals in a Relaxed Setting</span>
                    <br />
                    Located on the 3rd floor, the <span className="font-extrabold">UAMCH</span> cafeteria offers a variety of
                    balanced, nutritious, and hygienic meals at subsidized prices for students, staff, and visitors.
                  </p>
                </div>
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-2">
                <div className="relative aspect-[1.08/0.72] overflow-hidden bg-[#ddebe0]">
                  <Image
                    src="/Cafeteria/dining-hall-left-placeholder.svg"
                    alt="Cafeteria left image placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[1.08/0.72] overflow-hidden bg-[#ddebe0]">
                  <Image
                    src="/Cafeteria/dining-hall-right-placeholder.svg"
                    alt="Cafeteria right image placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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
              {featureCards.slice(0, 2).map((item) => (
                <article key={item.title} className="flex min-h-[96px] items-center justify-between gap-6 bg-[#e5f5e8] px-5 py-5 sm:px-6">
                  <p className="max-w-[620px] text-[17px] leading-[1.65] text-[#575757]">
                    <span className="font-extrabold text-[#4a4a4a]">{item.title}</span> {item.body}
                  </p>
                  <ArrowTile />
                </article>
              ))}
              <article className="flex min-h-[96px] items-center justify-between gap-6 bg-[#e5f5e8] px-5 py-5 sm:px-6 lg:col-span-1">
                <p className="max-w-[620px] text-[17px] leading-[1.65] text-[#575757]">
                  <span className="font-extrabold text-[#4a4a4a]">{featureCards[2].title}</span> {featureCards[2].body}
                </p>
                <ArrowTile />
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
