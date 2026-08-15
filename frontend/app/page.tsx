import Image from "next/image";
import { HomeUpdatesPanels } from "../components/content/home-updates-panels";
import { LandingPageHeader } from "../components/landing-page-header";
import { SiteFooter } from "../components/site-footer";

const facilities = ["Laboratory", "Hospital Services", "Cafeteria", "Training", "Medical Educational Skill", "Departments", "Publications", "Seminar"];

const campusCards = [
  { title: "Student Life", tone: "from-emerald-600/90 to-emerald-900/90" },
  { title: "Arts & Culture", tone: "from-amber-500/90 to-stone-900/90" },
  { title: "Recreation & Wellness", tone: "from-rose-500/90 to-orange-900/90" }
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6 text-center">
      <p className="text-sm font-semibold text-primary/90">{eyebrow}</p>
      <h2 className="mt-2 text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight text-ink">{title}</h2>
    </div>
  );
}

function BadgeIcon({ kind }: { kind: "mission" | "vision" | "knowledge" }) {
  const common = "h-8 w-8 shrink-0 text-[#1b7e47]";
  if (kind === "mission") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

  if (kind === "vision") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M6 21V10l6-5 6 5v11" />
        <path d="M9 21v-6h6v6" />
        <path d="M10 6h4" />
        <path d="M12 3v3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 8.5V5.5c0-1 0.8-1.5 1.6-1.1l1.9.9c.4.2.8.2 1.2 0l1.9-.9c.8-.4 1.6 0 1.6 1.1v3" />
      <path d="M6 8.5h12" />
      <path d="M8.8 8.5v8" />
      <path d="M15.2 8.5v8" />
      <path d="M10.5 8.5v8" />
      <path d="M13.5 8.5v8" />
    </svg>
  );
}

function PrincipalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#1b7e47]" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 15.5c2.2-1.8 4.1-2.7 7.1-2.7" />
      <path d="M8.4 13.3c-1.1-2.2-2.9-4-4.7-5.3" />
      <path d="M11.2 12.2c-.9-2.9-2.7-5.2-5.2-6.8" />
      <path d="M14.3 12.8c1.1-2.8 3.2-4.8 5.2-5.8" />
      <path d="M15.2 14.7c2.1-.2 3.6.4 4.6 1.3" />
      <path d="M7.3 17.1c1.5-.2 2.8-.7 4.1-1.6" />
      <path d="M12 5.2v4.8" />
      <circle cx="12" cy="12.1" r="1.1" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#f5f8f3] text-ink">
      <LandingPageHeader />

      <section className="relative isolate min-h-[calc(100vh-116px)] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="UAMC hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,45,24,0.72)_0%,rgba(7,45,24,0.42)_40%,rgba(7,45,24,0.18)_100%),linear-gradient(180deg,rgba(7,45,24,0.22),rgba(7,45,24,0.3))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(20,123,67,0.26),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,214,83,0.12),transparent_18%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-116px)] max-w-[1600px] items-end px-4 pb-14 pt-12 sm:px-6 lg:px-8">
          <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.72fr] lg:items-end">
            <div className="max-w-2xl text-white">
              <p className="mb-4 text-sm font-medium text-white/80">UAMC • knowledge meets innovation</p>
              <h1 className="font-display text-[clamp(2.6rem,5.2vw,5.1rem)] leading-[0.94] tracking-tight text-white">
                Excellence in Medical <span className="text-[#eccb4e]">Education</span>, Innovation in Healthcare
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/88 sm:text-lg">
                Build your future with a modern medical college that combines academic rigor, practical experience, and a patient-centered campus community.
              </p>
              <button className="mt-8 rounded-sm bg-white px-5 py-3 text-sm font-semibold text-[#1b7e47] shadow-lg shadow-black/20">
                View Our Program
              </button>
            </div>

            <aside className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
              <p className="text-sm text-[#f5d96f]">MBBS Degrees</p>
              <div className="mt-6 space-y-5 text-sm">
                <div className="border-l border-white/30 pl-4">
                  <p className="font-semibold">Bachelor of Medicine and Bachelor of Surgery</p>
                  <p className="mt-1 text-white/75">Year-round academic intake and clinical training.</p>
                </div>
                <div className="border-l border-white/30 pl-4">
                  <p className="font-semibold">Clinical learning environment</p>
                  <p className="mt-1 text-white/75">Hospital rotations, practical labs, and mentorship.</p>
                </div>
                <div className="border-l border-white/30 pl-4">
                  <p className="font-semibold">Student-focused support</p>
                  <p className="mt-1 text-white/75">Mentoring, transport, residential, and study services.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <HomeUpdatesPanels />
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative mx-auto grid w-full max-w-[500px] grid-cols-[1fr_0.95fr] gap-4">
            <div className="relative h-[360px] overflow-hidden bg-[#eef3ed] shadow-[0_12px_30px_rgba(16,32,24,0.10)]">
              <Image
                src="/images/uamc1.jpg"
                alt="UAMC campus view"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover object-[center_22%]"
              />
            </div>
            <div className="relative mt-8 h-[300px] overflow-hidden bg-[#eef3ed] shadow-[0_12px_30px_rgba(16,32,24,0.10)]">
              <Image
                src="/images/umac2.jpg"
                alt="UAMC entrance view"
                fill
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover object-[center_24%]"
              />
            </div>

            <div className="absolute left-1/2 top-1/2 z-10 h-[164px] w-[164px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-transparent shadow-[0_14px_40px_rgba(16,32,24,0.22)]">
              <Image
                src="/images/logo2.jpg"
                alt="UAMC logo"
                fill
                sizes="164px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-medium text-[#1b7e47]">
              <BadgeIcon kind="knowledge" />
              knowledge meets innovation
            </p>
            <h2 className="mt-2 font-display text-[clamp(2.5rem,4vw,4.4rem)] leading-none text-[#242424]">
              About <span className="text-[#e0b03a]">UAMC</span>
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[#6f6f6f]">
              Uttara Adhunik Medical College (UAMC) is a prestigious medical institution located in Uttara Model Town, Dhaka, Bangladesh. Established in 2003.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-[#6f6f6f]">
              UAMC offers a Bachelor of Medicine and Bachelor of Surgery (MBBS) program, designed to equip students with the knowledge, skills, and hands-on clinical training needed to excel in the medical profession.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-4 border border-dashed border-[#7ec79d] bg-white px-4 py-5 text-[#1b7e47]">
                <BadgeIcon kind="mission" />
                <div>
                  <p className="text-[15px] font-semibold leading-5">College Mission</p>
                  <p className="text-[15px] font-semibold leading-5">Statement</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border border-dashed border-[#7ec79d] bg-white px-4 py-5 text-[#1b7e47]">
                <BadgeIcon kind="vision" />
                <div>
                  <p className="text-[15px] font-semibold leading-5">College Vision</p>
                  <p className="text-[15px] font-semibold leading-5">Achievement</p>
                </div>
              </div>
            </div>
            <button className="mt-6 rounded-sm bg-[#1b7e47] px-6 py-3 text-sm font-semibold text-white">
              View Our Program →
            </button>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-10">
        <Image
          src="/images/d.jpg"
          alt="Students background"
          fill
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,35,22,0.22),rgba(12,35,22,0.22))]" />
        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[760px] grid-cols-1 gap-8 bg-[#1c8c50]/82 px-8 py-8 text-center text-white shadow-[0_10px_40px_rgba(16,32,24,0.18)] backdrop-blur-[1px] sm:grid-cols-3 sm:gap-0">
            {[
              ["90%", "Post-Graduation", "Success Rate"],
              ["Top 10", "Colleges That", "Create Futures"],
              ["No. 1", "In The Nation For", "Materials R&D"]
            ].map(([value, line1, line2], index) => (
              <div key={line1} className={`px-4 ${index < 2 ? "sm:border-r sm:border-white/20" : ""}`}>
                <p className="font-display text-[clamp(2rem,3vw,3.4rem)] leading-none text-white">{value}</p>
                <p className="mt-3 text-[13px] font-bold leading-5 text-[#ffd24d]">
                  {line1}
                  <br />
                  {line2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div>
            <h3 className="text-[clamp(2rem,3.6vw,4rem)] font-semibold leading-none text-[#1b7e47]">Find Your Department</h3>
            <p className="mt-6 max-w-[760px] text-[15px] leading-8 text-[#6a6a6a]">
              Use the search bar below to explore our comprehensive MBBS program and discover the perfect path to kickstart your medical career. Join UAMC and embark on a journey of academic excellence, hands-on clinical training, and cutting-edge medical research!
            </p>
            <div className="mt-10 flex h-[76px] items-center gap-4 border border-[#e0def0] bg-[#efeffb] px-6 text-[15px] text-[#8f8f99] shadow-[0_8px_20px_rgba(16,32,24,0.04)]">
              <span className="text-[20px] text-[#0d8f4d]">⌕</span>
              <span>Find your program like \"Department of Phycology\"</span>
            </div>
            <p className="mt-4 text-[12px] leading-5 text-[#6b6b6b]">
              <span className="font-semibold text-[#1b7e47]">Popular Search:</span> Department of Microbiology Department of Community Medicine Department of Pathology
            </p>

            <div className="mt-10 overflow-hidden border border-dashed border-[#8fd0a7] bg-[#edf5ef] px-4 py-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-[56px] w-[70px] overflow-hidden">
                    <Image src="/images/thmb.jpg" alt="Department thumbnail" fill sizes="70px" className="object-cover object-[center_35%]" />
                  </div>
                  <div>
                    <span className="inline-flex bg-[#f2c300] px-3 py-1 text-[10px] font-bold uppercase text-[#1f3d20]">
                      Popular Program
                    </span>
                    <p className="mt-4 text-[17px] font-semibold text-[#0f7b45]">Department of Microbiology</p>
                  </div>
                </div>
                <div className="grid h-[70px] w-[70px] place-items-center bg-[#129547] text-[36px] leading-none text-white">→</div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[338px]">
            <div className="absolute right-[148px] top-0 h-[150px] w-[160px] overflow-hidden bg-[#dbe6dd] shadow-[0_12px_30px_rgba(16,32,24,0.10)]">
              <Image src="/images/dept1.jpg" alt="Department image 1" fill sizes="160px" className="object-cover object-[center_22%]" />
            </div>
            <div className="absolute right-0 top-[26px] h-[310px] w-[374px] overflow-hidden bg-[#dbe6dd] shadow-[0_12px_30px_rgba(16,32,24,0.10)]">
              <Image src="/images/dept2.jpg" alt="Department image 2" fill sizes="374px" className="object-cover object-[center_30%]" />
            </div>
            <div className="absolute left-0 top-[118px] z-10 flex h-[120px] w-[248px] items-center gap-4 bg-[#63be7b] px-5 text-white shadow-[0_12px_30px_rgba(16,32,24,0.12)]">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-black text-sm font-semibold">🏅</div>
              <div>
                <p className="text-[40px] font-semibold leading-none">28+</p>
                <p className="mt-1 text-[12px] leading-5 text-white/88">Department Available For Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/d.jpg"
            alt="Admission background"
            fill
            sizes="100vw"
            className="object-cover object-[center_34%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,74,32,0.88),rgba(20,128,64,0.52))]" />
        </div>

        <div className="relative mx-auto flex min-h-[235px] max-w-[1600px] items-center justify-center px-4 sm:px-8">
          <div className="w-full max-w-[1180px] bg-[rgba(8,68,33,0.50)] px-6 py-8 text-center text-white backdrop-blur-[2px] sm:px-10 lg:px-20">
            <h3 className="font-display text-[clamp(2.2rem,4vw,4.4rem)] leading-none">
              <span className="text-[#f2c33b]">UAMC</span> Admission
            </h3>
            <p className="mx-auto mt-5 max-w-[980px] text-[13px] leading-5 text-white/92 sm:text-[14px] sm:leading-6">
              Uttara Adhunik Medical College (UAMC) was established in 2003 with a vision to provide quality medical education and healthcare services. Founded through the dedicated efforts of medical professionals and social leaders, UAMC is committed to training future doctors while ensuring affordable healthcare for the community.
            </p>
            <button className="mt-7 inline-flex items-center gap-2 rounded-sm bg-[#17a44f] px-10 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
              Learn More
              <span className="text-base">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f2f2] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading eyebrow="knowledge meets innovation" title="Our Facilities" />
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.34fr_0.31fr_0.35fr] lg:items-stretch">
            <div className="space-y-3">
              <div className="rounded-sm bg-white px-4 py-3 text-sm font-semibold text-[#1b7e47] shadow-sm">Hostel</div>
              {facilities.map((item) => (
                <div key={item} className="flex items-center justify-between rounded-sm bg-white px-4 py-3 text-[14px] font-semibold text-[#222] shadow-sm">
                  <span>{item}</span>
                  <span className="grid h-6 w-6 place-items-center rounded-sm bg-[#f1f7ef] text-[#e0b03a]">→</span>
                </div>
              ))}
            </div>

            <div className="relative min-h-[408px] overflow-hidden bg-[#dfe8df] shadow-sm">
              <Image
                src="/images/uamc1.jpg"
                alt="Hostel facility"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover object-[center_38%]"
              />
            </div>

            <div className="flex flex-col justify-center bg-white px-6 py-8 shadow-sm">
              <h4 className="font-display text-[clamp(2rem,3vw,3.2rem)] leading-none text-[#1b7e47]">Hostel Facilities</h4>
              <p className="mt-6 max-w-[290px] text-[14px] leading-6 text-[#666]">
                Ladies hostel:
                <br />
                Hostel accommodations for female students are available with limited number of seats.
              </p>
              <a href="#" className="mt-6 inline-flex text-[12px] font-semibold text-[#1a87d8]">
                View Details <span className="ml-2">→</span>
              </a>
              <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-sm bg-[#1b7e47] px-6 py-3 text-sm font-semibold text-white">
                View Our Program
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9f2e8] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-[#1b7e47]">
              <PrincipalIcon />
              knowledge meets innovation
            </p>
            <h3 className="mt-2 font-display text-[clamp(2.4rem,4vw,4.6rem)] leading-none text-[#111]">
              Message from the <span className="text-[#f2c33b]">Principal</span>
            </h3>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div className="pt-2">
              <div className="mb-4 h-20 w-32 overflow-hidden">
                <Image
                  src="/images/signature.png"
                  alt="Principal signature"
                  width={128}
                  height={80}
                  className="h-full w-full object-contain object-left"
                />
              </div>
              <p className="text-[18px] font-semibold text-[#111]">Honorable</p>
              <p className="mt-1 text-[18px] font-semibold leading-6 text-[#0c8a42]">Prof. Dr. Mohammad Mohibur Rahman</p>
              <div className="mt-4">
                <h4 className="font-display text-[clamp(3rem,5vw,4.9rem)] leading-none text-[#2f2f2f]">Principal</h4>
                <p className="-mt-1 text-[14px] font-medium text-[#666]">(In Charge)</p>
              </div>
              <p className="mt-2 text-[18px] font-medium text-[#333]">Ensuring Quality Healthcare &amp; Medical Education</p>
              <p className="mt-4 max-w-[560px] text-[12px] leading-6 text-[#6b6b6b]">
                Bangladesh faces significant challenges in delivering healthcare nationwide. To support government efforts, Uttara Adhunik Medical College Hospital (UAMCH) has been providing comprehensive health services since 2003, evolving into a tertiary-level multidisciplinary hospital.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#0f8f47] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
                Read More
                <span>→</span>
              </button>
            </div>

            <div className="relative min-h-[380px]">
              <div className="absolute inset-y-0 left-0 right-6 rounded-sm bg-white/35" />
              <div className="relative ml-auto h-[380px] w-full max-w-[540px] overflow-hidden bg-[#dfe7df]">
                <Image
                  src="/images/principal.jpg"
                  alt="Principal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover object-[center_24%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f8f47] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="relative text-center">
            <div className="mx-auto max-w-[360px] text-left sm:absolute sm:left-[26%] sm:top-[42px] sm:max-w-[190px] lg:left-[31%]">
              <p className="text-[14px] leading-6 text-white/88">
                Building a vibrant community of creative and accomplished people from around the world
              </p>
            </div>
            <h3 className="font-display text-[clamp(3rem,5vw,4.8rem)] leading-[0.88] tracking-tight">
              Campus
              <span className="relative ml-2 inline-block text-white">
                Life
                <span className="absolute -right-2 top-0 text-[#f2c33b]">/</span>
              </span>
            </h3>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { title: "Student Life", image: "/images/camp1.jpg" },
              { title: "Arts & Culture", image: "/images/camp2.jpg" },
              { title: "Recreation & Wellness", image: "/images/camp3.jpg" }
            ].map((card) => (
              <div key={card.title}>
                <div className="relative aspect-[1.18/1] overflow-hidden bg-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover object-[center_30%]"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3 font-display text-[18px] text-white">
                  <span>{card.title}</span>
                  <span className="text-[18px]">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e6f1e6] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-[clamp(2rem,3.2vw,3.5rem)] font-semibold text-[#14843f]">Alumni Event</h3>
            <span className="border-b border-[#14843f] text-sm font-medium text-[#14843f]">View All ↗</span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <div className="space-y-4">
              {[
                { number: "01", title: "Bridging Cultures: Global Perspectives in", meta: "August 20, 2024   •   4:27 am   •   Yarra Park, UK" },
                { number: "02", title: "Literary Voices: Celebrating Diverse Narratives", meta: "August 20, 2024   •   4:27 am   •   Yarra Park, UK" },
                { number: "03", title: "Cultural Exchange: Building Global Connections", meta: "August 20, 2024   •   4:27 am   •   Yarra Park, UK" }
              ].map((item) => (
                <article key={item.number} className="grid grid-cols-[90px_1fr] items-center gap-5 bg-white px-5 py-6 shadow-[0_6px_20px_rgba(16,32,24,0.04)]">
                  <div className="text-[58px] leading-none font-light text-[#2eb36a] [text-shadow:0_0_0_1px_#2eb36a]">{item.number}</div>
                  <div>
                    <h4 className="text-[16px] font-medium text-[#18843e]">{item.title}</h4>
                    <p className="mt-2 text-[12px] text-[#6f6f6f]">{item.meta}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="relative min-h-[360px]">
              <div className="relative h-[360px] w-full overflow-hidden bg-[#dce8dc]">
                <Image
                  src="/images/alumni.jpg"
                  alt="Alumni event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-[center_35%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-[clamp(2rem,3.2vw,3.5rem)] font-semibold text-[#14843f]">Read Our Latest News</h3>
            <p className="mt-2 text-sm text-[#6f6f6f]">You'll find something to spark your curiosity and enhance</p>
          </div>
          <span className="mt-3 border-b border-[#14843f] text-sm font-medium text-[#14843f]">View All ↗</span>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {[
            {
              tag: "Education",
              title: "Those inequities are inequities",
              excerpt: "10 Effective Study Tips for College Success Welcome...",
              date: "August 6, 2024",
              image: "/images/news1.jpg"
            },
            {
              tag: "University",
              title: "After Decades Of Improvement,",
              excerpt: "10 Effective Study Tips for College Success Welcome...",
              date: "July 4, 2024",
              image: "/images/news2.jpg"
            }
          ].map((item) => (
            <article key={item.title} className="grid grid-cols-[154px_1fr] border border-dashed border-[#8ed0a4] bg-white p-3">
              <div className="relative h-[130px] overflow-hidden bg-[#dfe8df]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="155px"
                  className="object-cover object-[center_35%]"
                />
              </div>
              <div className="px-4 py-2">
                <span className="inline-flex rounded-sm bg-[#f2c33b] px-2 py-1 text-[10px] font-semibold text-[#333]">
                  {item.tag}
                </span>
                <h4 className="mt-3 text-[18px] font-medium leading-6 text-[#2b2b2b]">{item.title}</h4>
                <p className="mt-3 max-w-[240px] text-[13px] leading-5 text-[#707070]">{item.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-[12px] text-[#6f6f6f]">
                  <span>◎ admin</span>
                  <span>▣ {item.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#edf5ed] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <h3 className="font-display text-[clamp(2rem,3vw,3.4rem)] font-semibold text-[#14843f]">My Students Feedback</h3>
            <p className="mt-2 text-sm text-[#9aa19b]">You'll find something to spark your curiosity and enhance</p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="relative bg-white px-6 py-7 shadow-[0_8px_24px_rgba(16,32,24,0.04)]">
              <p className="text-[#f2c33b]">★★★★</p>
              <p className="mt-4 max-w-[300px] text-[13px] leading-6 text-[#666]">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
              </p>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full bg-[#cab7f2] ring-2 ring-white">
                    <Image
                      src="/images/feedback-1.jpg"
                      alt="Emma Elizabeth"
                      fill
                      sizes="44px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#14843f]">Emma Elizabeth</p>
                    <p className="text-[12px] text-[#666]">Assistant Teacher</p>
                  </div>
                </div>
                <div className="text-[62px] leading-none text-[#6fbf7f]">❞</div>
              </div>
            </article>

            <article className="relative bg-white px-6 py-7 shadow-[0_8px_24px_rgba(16,32,24,0.04)]">
              <p className="text-[#f2c33b]">★★★★★</p>
              <p className="mt-4 max-w-[300px] text-[13px] leading-6 text-[#666]">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
              </p>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full bg-[#cab7f2] ring-2 ring-white">
                    <Image
                      src="/images/feedback-2.jpg"
                      alt="Zent Ekizie"
                      fill
                      sizes="44px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#14843f]">Zent Ekizie</p>
                    <p className="text-[12px] text-[#666]">Assistant Teacher</p>
                  </div>
                </div>
                <div className="text-[62px] leading-none text-[#6fbf7f]">❞</div>
              </div>
            </article>

            <article className="relative bg-white px-6 py-7 shadow-[0_8px_24px_rgba(16,32,24,0.04)]">
              <p className="text-[#f2c33b]">★★★★</p>
              <p className="mt-4 max-w-[300px] text-[13px] leading-6 text-[#666]">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
              </p>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full bg-[#cab7f2] ring-2 ring-white">
                    <Image
                      src="/images/feedback-3.jpg"
                      alt="Samantha Willow"
                      fill
                      sizes="44px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#14843f]">Samantha Willow</p>
                    <p className="text-[12px] text-[#666]">Teacher</p>
                  </div>
                </div>
                <div className="text-[62px] leading-none text-[#6fbf7f]">❞</div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

