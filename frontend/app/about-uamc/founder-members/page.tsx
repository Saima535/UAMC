import Image from "next/image";
import Link from "next/link";
import { LandingPageHeader } from "../../../components/landing-page-header";
import { SiteFooter } from "../../../components/site-footer";

const tabs = [
  { label: "Overview", href: "/about-uamc/overview" },
  { label: "History of UAMC", href: "/about-uamc/history" },
  { label: "Vision & Mission", href: "/about-uamc/vision-mission" },
  { label: "Aim & Objective", href: "/about-uamc/aim-objective" },
  { label: "Organizational Structure", href: "/about-uamc/organizational-structure" },
  { label: "Founder Members", href: "/about-uamc/founder-members" },
  { label: "EC Members", href: "/about-uamc/ec-members" },
  { label: "GB Members", href: "/about-uamc/gb-members" }
];

const members = [
  {
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
    image: "/Founder Members/download (1).jpg"
  },
  {
    name: "Late Mr. M. M. Zaman",
    role: "Ex-Co-Chairman, EC, BMSRI",
    image: "/Founder Members/download (1).jpg"
  },
  {
    name: "Late Prof. Abu Ahmed",
    role: "Ex-Co-Chairman, EC, BMSRI",
    image: "/Founder Members/download (1).jpg"
  },
  {
    name: "Late Prof. C. H. Kabir",
    role: "Ex-Hony. Secretary, EC, BMSRI",
    image: "/Founder Members/download (1).jpg"
  },
  {
    name: "Late Prof. K.A. Qamruddin",
    role: "Ex-Hony. Treasurer, EC, BMSRI",
    image: "/Founder Members/download (1).jpg"
  },
  {
    name: "Late Prof. M.I. Chowdhury",
    role: "Ex-Member, EC, BMSRI",
    image: "/Founder Members/download (1).jpg"
  },
  {
    name: "Late Prof. Shamsul Hug",
    role: "Ex-Vice Chancellor, Dhaka University",
    image: "/Founder Members/download (1).jpg"
  },
  {
    name: "Late Mr. Abdul Karim",
    role: "Ex-Managing Director (CSL)",
    image: "/Founder Members/download (1).jpg"
  },
  {
    name: "Late Mr. Sirajul Islam",
    role: "Ex-Managing Director (SIT)",
    image: "/Founder Members/download (1).jpg"
  }
];

export default function FounderMembersPage() {
  return (
    <div className="min-h-screen bg-[#f2f4ef] text-[#1b1b1b]">
      <LandingPageHeader />

      <main className="mx-auto w-full max-w-[1600px] px-4 pb-0 pt-8 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden border border-[#d9e3d9] bg-[#dfeae0]">
          <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-[#dfeae0] to-transparent" />
          <div className="absolute inset-y-0 right-[5%] hidden w-[260px] items-center justify-center lg:flex">
            <div className="relative h-[160px] w-[160px]">
              <Image src="/images/logo.png" alt="UAMC seal" fill sizes="160px" className="object-contain" />
            </div>
          </div>

          <div className="relative px-5 py-6 sm:px-7 lg:px-8 lg:py-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#183123]">
              Home <span className="px-2 text-[#4f6855]">&gt;</span> About UAMC <span className="px-2 text-[#4f6855]">&gt;</span> Founder Members
            </div>
            <div className="mt-4 flex items-end justify-between gap-4">
              <div>
                <h1 className="text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-none tracking-tight text-[#1b3229]">
                  About <span className="text-[#1a7d4f]">UAMC</span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-0 border border-[#d9e3d9] border-t-0 bg-[#eef3ee] px-2 py-3 sm:px-4">
          <nav className="flex flex-wrap items-center gap-2 sm:gap-3">
            {tabs.map((tab) => {
              const isActive = tab.href === "/about-uamc/founder-members";
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`inline-flex items-center justify-center rounded-md border px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.04em] transition sm:px-4 ${
                    isActive
                      ? "border-[#1d4f3d] bg-[#1a5e46] text-white shadow-sm"
                      : "border-[#d7ddd5] bg-[#f5f8f5] text-[#3c4d42] hover:border-[#bdd5c7] hover:text-[#1b7d4d]"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <section className="bg-[#f4f6f2] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="mb-8">
            <h2 className="text-[clamp(2.3rem,3vw,4rem)] font-semibold leading-none tracking-tight text-[#1d1d1d]">
              Founder Member
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {members.map((member, index) => (
              <article
                key={`${member.name}-${index}`}
                className="overflow-hidden border border-[#d8e1d8] bg-[#dfeae0] shadow-[0_4px_10px_rgba(0,0,0,0.04)]"
              >
                <div className="relative h-[315px] overflow-hidden bg-[#dfeae0]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#dfeae0] px-4 pb-5 pt-4 text-center">
                  <p className="text-[17px] font-medium leading-6 text-[#1f2b26]">{member.name}</p>
                  <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#4b584f]">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#2b6d3c] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.16),transparent_18%),linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.08))]" />
          <div className="relative mx-auto max-w-[1600px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[770px]">
                <h3 className="text-[clamp(2.3rem,4vw,3.5rem)] font-semibold leading-none tracking-tight text-white">
                  UAMC Admission
                </h3>
                <p className="mt-4 max-w-[820px] text-[15px] leading-8 text-white/85">
                  Uttara Adhunik Medical College (UAMC) was established in 2003 with a vision to provide quality medical education and healthcare services. Founded through the dedicated efforts of medical professionals and social leaders, UAMC is committed to training future doctors while ensuring affordable and accessible healthcare to the community.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex h-12 items-center justify-center border border-white/70 bg-[#1a7d4f] px-6 text-sm font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-[#12663e]"
              >
                Learn More <span className="ml-2 text-lg">→</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
