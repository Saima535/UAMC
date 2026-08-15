import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../../../components/site-footer";
import { SiteHeader } from "../../../components/site-header";

const aboutLinks = [
  { href: "/about-uamc/overview", label: "Overview", active: true },
  { href: "/about-uamc/history", label: "History of UAMC" },
  { href: "/about-uamc/vision-mission", label: "Vision & Mission" },
  { href: "/about-uamc/aim-objective", label: "Aim & Objective" },
  { href: "/about-uamc/organizational-structure", label: "Organizational Structure" },
  { href: "/about-uamc/founder-members", label: "Founder Member" },
  { href: "/about-uamc/ec-members", label: "EC Members" },
  { href: "/about-uamc/gb-members", label: "GB Members" }
];

function OverviewImagePlaceholder({
  label,
  className
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#d9ece0] ${className ?? ""}`}>
      <Image src="/Overview/camp3.jpg" alt={label} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 border border-[#c9ddd0]" />
    </div>
  );
}

function KnowledgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <path d="M6 8.5V5.5c0-1 0.8-1.5 1.6-1.1l1.9.9c.4.2.8.2 1.2 0l1.9-.9c.8-.4 1.6 0 1.6 1.1v3" />
      <path d="M6 8.5h12" />
      <path d="M8.8 8.5v8" />
      <path d="M15.2 8.5v8" />
      <path d="M10.5 8.5v8" />
      <path d="M13.5 8.5v8" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-5 w-5" aria-hidden="true">
      <path d="M21 16.2v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.12 3.5 2 2 0 0 1 3.1 1.3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.57 1.76L6.7 9.1a16 16 0 0 0 8.2 8.2l1.34-1.33a2 2 0 0 1 1.76-.57l3 .5A2 2 0 0 1 21 16.2Z" />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <path d="M4 14c2.5-2 4.2-2.8 7.2-2.8" />
      <path d="M9 12.2c-1.2-2.1-3.1-3.9-5-5.2" />
      <path d="M11.8 11.8c-.9-3-2.8-5.3-5.6-7" />
      <path d="M14.5 12.8c1.2-2.8 3.4-4.9 5.5-6" />
      <path d="M15.3 14.8c2.2-.2 3.7.4 4.7 1.4" />
      <path d="M7.2 17.3c1.4-.2 2.8-.7 4-1.6" />
      <path d="M12 5v5" />
      <circle cx="12" cy="12" r="1.2" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M6 21V10l6-5 6 5v11" />
      <path d="M9 21v-6h6v6" />
      <path d="M10 6h4" />
      <path d="M12 3v3" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-[#9fd5b4]" aria-hidden="true">
      <path d="M10.2 5.5c-2.8 1.4-4.9 4-5.4 7.6H8c0 2 .7 5.4-3.6 5.4H3.2c-1.3 0-2.2-.9-2.2-2.1C1 10.8 4.7 6.2 9.8 4.2l.4 1.3Zm11 0c-2.8 1.4-5 4-5.4 7.6H19c0 2 .6 5.4-3.7 5.4H14c-1.3 0-2.2-.9-2.2-2.1 0-5.6 3.7-10.2 8.8-12.2l.6 1.3Z" />
    </svg>
  );
}

export default function AboutUamcOverviewPage() {
  return (
    <div className="min-h-screen bg-white text-[#1f2a21]">
      <SiteHeader />

      <main>
        <section className="bg-[#edf7f0]">
          <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-4 lg:px-10">
            <div className="relative overflow-hidden bg-[#bfe3c6]">
              <div className="absolute inset-x-0 top-0 h-[86px] bg-[repeating-linear-gradient(90deg,#f7d4d8_0_76px,#d8eef0_76px_140px,#f5f2de_140px_220px,#f6d6b8_220px_300px,#dce8f6_300px_380px)] opacity-95" />
              <div className="absolute inset-x-0 top-[58px] h-[34px] bg-[radial-gradient(circle_at_18%_20%,rgba(0,0,0,0.78)_0_2px,transparent_2px),radial-gradient(circle_at_38%_24%,rgba(0,0,0,0.78)_0_2px,transparent_2px),radial-gradient(circle_at_57%_30%,rgba(0,0,0,0.78)_0_2px,transparent_2px),radial-gradient(circle_at_76%_22%,rgba(0,0,0,0.78)_0_2px,transparent_2px)] opacity-55" />
              <div className="relative flex min-h-[280px] items-end justify-between px-6 pb-10 pt-24 sm:px-10 lg:px-12">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#254536]">Home &gt; About UAMC &gt; Overview</p>
                  <h1 className="mt-3 font-display text-[clamp(2.7rem,5vw,4.5rem)] leading-none text-[#5c5c5c]">
                    About <span className="font-semibold text-[#11984a]">UAMC</span>
                  </h1>
                </div>
                <div className="relative hidden h-[138px] w-[138px] shrink-0 lg:block">
                  <Image src="/images/logo.png" alt="UAMC logo" fill sizes="138px" className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {aboutLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`min-w-[138px] px-5 py-3 text-center text-[12px] font-semibold transition ${
                  item.active ? "bg-[#129547] text-white" : "bg-[#6d6d6d] text-white hover:bg-[#129547]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-14 px-6 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="grid gap-4 sm:grid-cols-[0.8fr_1fr]">
            <div className="relative h-[420px] overflow-hidden">
              <OverviewImagePlaceholder label="About Left Image" className="h-full" />
              <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 p-3 shadow-[0_14px_32px_rgba(16,32,24,0.2)]">
                <div className="relative h-full w-full">
                  <Image src="/images/logo2.jpg" alt="UAMC seal" fill sizes="150px" className="rounded-full object-cover" />
                </div>
              </div>
            </div>
            <OverviewImagePlaceholder label="About Right Image" className="h-[420px]" />
          </div>

          <div className="max-w-[640px]">
            <p className="flex items-center gap-2 text-[13px] font-semibold text-[#29a764]">
              <KnowledgeIcon />
              knowledge meets innovation
            </p>
            <h2 className="mt-4 font-display text-[clamp(3.1rem,4vw,4.7rem)] leading-none text-[#5a5a5a]">
              About <span className="font-semibold text-[#efbe2d]">UAMC</span>
            </h2>
            <p className="mt-7 text-[15px] font-semibold leading-7 text-[#616161]">
              Uttara Adhunik Medical College (UAMC) is a prestigious medical institution located in Uttara Model Town, Dhaka, Bangladesh. Established in 2003.
            </p>
            <p className="mt-5 text-[15px] leading-8 text-[#7a7a7a]">
              UAMC offers a Bachelor of Medicine and Bachelor of Surgery (MBBS) program, designed to equip students with the knowledge, skills, and hands-on clinical training needed to excel in the medical profession.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border border-dashed border-[#7dd0a0] px-5 py-5 text-[#129547]">
                <div className="flex items-center gap-3">
                  <MissionIcon />
                  <div>
                    <p className="text-[16px] font-semibold leading-5">College Mission</p>
                    <p className="text-[16px] font-semibold leading-5">Statement</p>
                  </div>
                </div>
              </div>
              <div className="border border-dashed border-[#7dd0a0] px-5 py-5 text-[#129547]">
                <div className="flex items-center gap-3">
                  <VisionIcon />
                  <div>
                    <p className="text-[16px] font-semibold leading-5">College Vision</p>
                    <p className="text-[16px] font-semibold leading-5">Achievement</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="mt-8 inline-flex items-center gap-2 bg-[#129547] px-8 py-4 text-sm font-semibold text-white">
              View Our Program
              <ArrowIcon />
            </button>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-14 px-6 py-10 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div className="relative overflow-hidden bg-[linear-gradient(135deg,#fff_0%,#fff_52%,#f4f4f4_52%,#f4f4f4_100%)] px-10 py-12">
            <h3 className="font-display text-[2.6rem] leading-none text-[#3b302d]">Visiting At UAMC</h3>
            <p className="mt-6 max-w-[470px] text-[14px] leading-7 text-[#7b7b7b]">
              Here you'll find all the information about the reasons why the University of Law is a unique institution. Get to know why over 200 thousand people are your.
            </p>
            <p className="mt-4 max-w-[470px] text-[14px] leading-7 text-[#7b7b7b]">
              Welcome to Fak, where knowledge meets innovation and where every student is journey to success begins.
            </p>

            <div className="mt-8 inline-flex items-center gap-4 rounded-full bg-[#f3faf5] px-5 py-3 text-[#11984a] shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#129547] text-white">
                <CallIcon />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#8c8c8c]">Call +32112345678</p>
                <p className="text-[12px] text-[#8c8c8c]">For any kind of admission enquiry</p>
              </div>
            </div>

            <button className="mt-8 inline-flex items-center gap-2 bg-[#129547] px-7 py-4 text-sm font-semibold text-white">
              View Our Program
              <ArrowIcon />
            </button>
          </div>

          <div className="relative grid gap-3 sm:grid-cols-[0.75fr_1.25fr]">
            <div className="grid gap-3">
              <OverviewImagePlaceholder label="Visiting Top Image" className="h-[150px]" />
              <OverviewImagePlaceholder label="Visiting Bottom Image" className="h-[150px]" />
            </div>
            <OverviewImagePlaceholder label="Visiting Main Image" className="h-[313px]" />
            <div className="absolute bottom-3 left-[18%] z-10 flex items-center gap-4 bg-[#7bc793] px-5 py-3 text-white shadow-[0_10px_20px_rgba(0,0,0,0.12)]">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#24352b] text-sm font-semibold">28+</div>
              <div>
                <p className="text-[34px] font-semibold leading-none">28+</p>
                <p className="text-[11px] leading-4 text-white/92">Department Available For Student</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10">
          <div className="relative overflow-hidden">
            <OverviewImagePlaceholder label="Statistics Background" className="absolute inset-0" />
            <div className="absolute inset-0 bg-[#0f7c3f]/78" />
            <div className="relative grid gap-8 px-8 py-10 text-center text-white sm:grid-cols-3">
              <div>
                <p className="font-display text-[3.1rem] leading-none">90%</p>
                <p className="mt-2 text-[13px] font-semibold leading-5 text-[#ffd43f]">
                  Post-Graduation
                  <br />
                  Success Rate
                </p>
              </div>
              <div>
                <p className="font-display text-[3.1rem] leading-none">Top 10</p>
                <p className="mt-2 text-[13px] font-semibold leading-5 text-[#ffd43f]">
                  Colleges That
                  <br />
                  Create Futures
                </p>
              </div>
              <div>
                <p className="font-display text-[3.1rem] leading-none">No. 1</p>
                <p className="mt-2 text-[13px] font-semibold leading-5 text-[#ffd43f]">
                  In The Nation For
                  <br />
                  Materials R&amp;D
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="grid gap-3 sm:grid-cols-[0.85fr_1fr]">
            <OverviewImagePlaceholder label="Admission Left Image" className="h-[300px]" />
            <div className="grid gap-3">
              <OverviewImagePlaceholder label="Admission Top Right" className="h-[144px]" />
              <OverviewImagePlaceholder label="Admission Bottom Right" className="h-[144px]" />
            </div>
          </div>

          <div className="border-t border-[#e6e6e6] pt-4">
            <h3 className="font-display text-[clamp(2.7rem,4vw,4.6rem)] leading-none text-[#129547]">
              Admission <span className="font-semibold text-[#22422f]">&amp; Aid</span>
            </h3>
            <p className="mt-6 max-w-[520px] text-[15px] leading-8 text-[#7a7a7a]">
              At UAMC, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn practical skills.
            </p>
            <div className="mt-8 divide-y divide-[#e8d482] border-t border-[#e8d482]">
              {["Process Overview", "Fees & Financial Information", "How To Apply"].map((item) => (
                <div key={item} className="flex items-center justify-between py-5 text-[15px] font-semibold text-[#4f6d59]">
                  <span>{item}</span>
                  <span className="text-[#129547]">→</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <h3 className="font-display text-[clamp(2.4rem,4vw,4.2rem)] leading-none text-[#11984a]">Sustainability at UAMC</h3>
            <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-[#7a7a7a]">
              Uttara Adhunik Medical College (UAMC) is committed to sustainability by integrating innovative solutions in healthcare and education while minimizing its environmental impact.
            </p>
            <div className="mt-7 space-y-4 text-[14px] leading-7 text-[#6f786f]">
              {[
                "Eco-Friendly Campus – UAMC integrates energy-efficient infrastructure and waste management to promote a greener learning environment.",
                "Sustainable Healthcare Practices – The institution adopts responsible resource management to reduce environmental impact in medical education and patient care.",
                "Innovation & Collaboration – UAMC explores partnerships and modern solutions to enhance long-term sustainability in healthcare and education."
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 text-[#e8c142]">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute right-0 top-[18px] h-[230px] w-[320px] bg-[#cfe4f4]" />
            <div className="relative z-10 flex items-end gap-6">
              <OverviewImagePlaceholder label="Sustainability Main Image" className="h-[320px] w-[220px] shadow-[0_18px_32px_rgba(16,32,24,0.14)]" />
              <OverviewImagePlaceholder label="Sustainability Side Image" className="h-[260px] w-[180px] shadow-[0_18px_32px_rgba(16,32,24,0.14)]" />
            </div>
          </div>
        </section>

        <section className="bg-[#e7f5ea]">
          <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10 lg:py-16">
            <div className="text-center">
              <p className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#29a764]">
                <KnowledgeIcon />
                knowledge meets innovation
              </p>
              <h3 className="mt-4 font-display text-[clamp(3rem,4vw,5.4rem)] leading-none text-[#111]">
                Message from the <span className="font-semibold text-[#efbe2d]">Principal</span>
              </h3>
            </div>

            <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="mb-4 h-16 w-28">
                  <Image src="/images/signature.png" alt="Signature" width={112} height={64} className="h-full w-full object-contain object-left" />
                </div>
                <p className="text-[20px] font-semibold text-[#1f2a21]">Honorable</p>
                <p className="mt-1 text-[27px] font-semibold leading-8 text-[#11984a]">Prof. Dr. Mohammad Mohibur Rahman</p>
                <div className="mt-4 flex items-end gap-2">
                  <h4 className="font-display text-[clamp(3.5rem,5vw,6rem)] leading-none text-[#5b5b5b]">Principal</h4>
                  <span className="mb-3 text-[15px] font-semibold text-[#666]">(In Charge)</span>
                </div>
                <p className="mt-2 text-[18px] font-semibold text-[#4a4a4a]">Ensuring Quality Healthcare &amp; Medical Education</p>
                <p className="mt-5 max-w-[620px] text-[12px] leading-6 text-[#6f6f6f]">
                  Bangladesh faces significant challenges in delivering healthcare nationwide. To support government efforts, Uttara Adhunik Medical College Hospital (UAMCH) has been providing comprehensive health services since 2003, evolving into a tertiary-level multidisciplinary hospital.
                </p>
                <button className="mt-8 inline-flex items-center gap-2 bg-[#129547] px-8 py-4 text-sm font-semibold text-white">
                  Read More
                  <ArrowIcon />
                </button>
              </div>

              <OverviewImagePlaceholder label="Principal Image" className="h-[420px]" />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <OverviewImagePlaceholder label="Admission Banner Background" className="absolute inset-0" />
          <div className="absolute inset-0 bg-[#0f6a34]/80" />
          <div className="relative mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-[1200px] bg-[rgba(8,68,33,0.46)] px-8 py-10 text-center text-white backdrop-blur-[1px]">
              <h3 className="font-display text-[clamp(3rem,4vw,5rem)] leading-none">
                <span className="font-semibold text-[#efbe2d]">UAMC</span> Admission
              </h3>
              <p className="mx-auto mt-5 max-w-[980px] text-[13px] leading-6 text-white/92">
                Uttara Adhunik Medical College (UAMC) was established in 2003 with a vision to provide quality medical education and healthcare services. Founded through the dedicated efforts of medical professionals and social leaders, UAMC is committed to training future doctors while ensuring affordable healthcare for the community.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 bg-[#129547] px-10 py-4 text-sm font-semibold text-white">
                Learn More
                <ArrowIcon />
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10">
          <div className="text-center">
            <h3 className="font-display text-[clamp(2.8rem,4vw,4.7rem)] leading-none text-[#129547]">My Students Feedback</h3>
            <p className="mt-3 text-[13px] text-[#a0a0a0]">You'll find something to spark your curiosity and enhance</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { name: "Emma Elizabeth", role: "Assistant Teacher", filename: "feedback-1.jpg" },
              { name: "Zent Ekizie", role: "Assistant Teacher", filename: "feedback-2.jpg" },
              { name: "Samantha Willow", role: "Teacher", filename: "feedback-3.jpg" }
            ].map((item, index) => (
              <article key={item.name} className="border border-[#efefef] bg-white px-7 py-7 shadow-[0_12px_28px_rgba(16,32,24,0.05)]">
                <p className="text-[#f2c33b]">★★★★★</p>
                <p className="mt-4 text-[13px] leading-7 text-[#777]">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </p>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <OverviewImagePlaceholder
                      label={`Feedback ${index + 1}`}
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <p className="text-[14px] font-semibold text-[#129547]">{item.name}</p>
                      <p className="text-[12px] text-[#666]">{item.role}</p>
                    </div>
                  </div>
                  <QuoteIcon />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center text-[#efbe2d]">•</div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
