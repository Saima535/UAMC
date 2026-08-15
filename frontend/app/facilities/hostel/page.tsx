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
  { href: "/facilities/hostel", label: "Hostel", active: true },
  { href: "/facilities/laboratory", label: "Laboratory" },
  { href: "/facilities/cafeteria", label: "Cafeteria" }
];

const hostelCards = [
  {
    title: "Secure & Comfortable:",
    body: "Hostel accommodations are available for female students with a limited number of seats."
  },
  {
    title: "Essential Amenities:",
    body: "Basic facilities such as furnished rooms, electricity, water, and security are provided to ensure a safe and supportive environment for learning."
  },
  {
    title: "Secure & Comfortable:",
    body: "Hostel accommodations are available for female students with a limited number of seats."
  }
];

function HostelIcon() {
  return (
    <svg viewBox="0 0 102 102" fill="none" className="h-[102px] w-[102px] text-[#0b9444]" aria-hidden="true">
      <path d="M34 14c0-7.7 6.3-14 14-14s14 6.3 14 14c0 6.2-4.1 11.5-9.8 13.3v6.5h16.3c4.4 0 7.9 3.5 7.9 7.9v43.6H25.6V41.7c0-4.4 3.5-7.9 7.9-7.9h11.9v-6.5C38.1 25.5 34 20.2 34 14Zm14 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Z" fill="currentColor" />
      <path d="M36 48h30M36 61h30M36 74h30" stroke="#EEF8F0" strokeWidth="6.2" strokeLinecap="round" />
      <path d="M17 34h8v51h-8zm60 0h8v51h-8z" fill="#BDE8C9" />
      <path d="M44 85V67h14v18" stroke="#EEF8F0" strokeWidth="6.2" strokeLinecap="round" strokeLinejoin="round" />
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
        src="/Hostel/umac2.jpg"
        alt="Hostel decorative strip"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

export default function FacilitiesHostelPage() {
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
                      HOME &gt; FACILITIES &gt;&gt; <span className="text-[#0f9f49]">Hostel</span>
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
              <div className="flex items-start gap-6">
                <HostelIcon />
                <div>
                  <h2 className="font-sans text-[clamp(3rem,4.6vw,4.6rem)] font-extrabold leading-[0.92] tracking-tight text-[#111]">
                    <span className="text-[#0c9a45]">Hostel</span>
                    <br />
                    Services
                  </h2>
                </div>
              </div>

              <div className="min-h-[250px]" />
            </div>
          </div>
        </section>

        <section className="bg-white py-28">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-[1480px] gap-8 lg:grid-cols-2">
              {hostelCards.slice(0, 2).map((item) => (
                <article key={item.title + item.body} className="flex min-h-[112px] items-center justify-between gap-6 bg-[#e5f5e8] px-5 py-5 sm:px-6">
                  <p className="max-w-[640px] text-[17px] leading-[1.65] text-[#575757]">
                    <span className="font-extrabold text-[#4a4a4a]">{item.title}</span> {item.body}
                  </p>
                  <ArrowTile />
                </article>
              ))}
              <article className="flex min-h-[112px] items-center justify-between gap-6 bg-[#e5f5e8] px-5 py-5 sm:px-6 lg:col-span-1">
                <p className="max-w-[640px] text-[17px] leading-[1.65] text-[#575757]">
                  <span className="font-extrabold text-[#4a4a4a]">{hostelCards[2].title}</span> {hostelCards[2].body}
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
