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
  { href: "/facilities/publication", label: "Publications", active: true },
  { href: "/facilities/seminar", label: "Seminar" },
  { href: "/facilities/hostel", label: "Hostel" },
  { href: "/facilities/laboratory", label: "Laboratory" },
  { href: "/facilities/cafeteria", label: "Cafeteria" }
];

const publications = Array.from({ length: 5 }, () => ({
  day: "12",
  month: "Mar 25",
  time: "3.40 PM",
  title: '"BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training"'
}));

function MedicalPattern() {
  return (
    <div className="absolute inset-x-0 top-0 h-[104px] overflow-hidden">
      <Image
        src="/Publications/hero-strip-placeholder.svg"
        alt="Publications decorative strip placeholder"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.8v4.8l3.1 1.7" />
    </svg>
  );
}

export default function FacilitiesPublicationPage() {
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
                      HOME &gt; FACILITIES &gt;&gt; <span className="text-[#0f9f49]">Publications</span>
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

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1480px]">
              <h2 className="font-display text-[clamp(3rem,4.4vw,4.6rem)] font-semibold leading-none text-[#0d9a44]">
                Publication
              </h2>

              <div className="mt-14 overflow-hidden bg-[#eaebf8]">
                <div className="grid grid-cols-2">
                  <div className="border-b-[3px] border-[#0d9a44] bg-white px-6 py-5 text-center text-[18px] font-semibold text-[#0d9a44] shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                    Journal
                  </div>
                  <div className="px-6 py-5 text-center text-[18px] font-medium text-[#333]">Tenders</div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {publications.map((item, index) => (
                  <article key={`${item.title}-${index}`} className="bg-[#eaebf8] px-6 py-6">
                    <div className="grid gap-6 md:grid-cols-[84px_1fr]">
                      <div className="text-center">
                        <div className="text-[50px] font-bold leading-none text-[#333]">{item.day}</div>
                        <div className="mt-3 inline-flex min-h-[54px] min-w-[90px] items-center justify-center bg-[#0c9a45] px-3 text-[16px] font-bold text-white">
                          {item.month}
                        </div>
                      </div>

                      <div className="pt-1">
                        <h3 className="text-[18px] font-medium leading-[1.5] text-[#3e3e3e]">{item.title}</h3>
                        <div className="mt-6 flex items-center gap-3 text-[15px] font-semibold text-[#545454]">
                          <ClockIcon />
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
