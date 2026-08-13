import Link from "next/link";
import { SiteFooter } from "../../../components/site-footer";
import { SiteHeader } from "../../../components/site-header";

const aboutLinks = [
  { href: "/about-uamc/overview", label: "Overview" },
  { href: "/about-uamc/history", label: "History of UAMC" },
  { href: "/about-uamc/vision-mission", label: "Vision & Mission" },
  { href: "/about-uamc/aim-objective", label: "Aim & Objective", active: true },
  { href: "/about-uamc/organizational-structure", label: "Organizational Structure" },
  { href: "/about-uamc/founder-members", label: "Founder Member" },
  { href: "/about-uamc/ec-members", label: "EC Members" },
  { href: "/about-uamc/gb-members", label: "GB Members" }
];

function PlaceholderImage({
  label,
  filename,
  className
}: {
  label: string;
  filename: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-dashed border-[#9ac7ac] bg-[linear-gradient(135deg,#edf5ef_0%,#dfeee3_50%,#cfe3d5_100%)] ${className ?? ""}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(17,152,74,0.18),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(242,195,58,0.12),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.55),rgba(255,255,255,0.12))]" />
      <div className="absolute inset-0 border border-white/40" />
      <div className="relative flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#157a43]">Image Slot</p>
        <p className="mt-3 text-[15px] font-semibold text-[#355344]">{label}</p>
        <p className="mt-2 max-w-[220px] text-[11px] leading-5 text-[#5f7466]">Add file to `/public/Aim & Objective/{filename}`</p>
      </div>
    </div>
  );
}

function Arrow() {
  return <span aria-hidden="true">-&gt;</span>;
}

function HeaderDecor() {
  return (
    <div className="relative h-[88px] overflow-hidden rounded-t-sm bg-[#eef5ef]">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#f7cfd6_0_78px,#d8eef0_78px_144px,#f5f2dc_144px_222px,#f3d0b2_222px_300px,#d7e6f4_300px_382px,#f0cbd0_382px_456px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_4%_10%,rgba(55,55,55,0.88)_0_3px,transparent_3px),radial-gradient(circle_at_14%_28%,rgba(55,55,55,0.88)_0_3px,transparent_3px),radial-gradient(circle_at_25%_16%,rgba(55,55,55,0.88)_0_3px,transparent_3px),radial-gradient(circle_at_35%_32%,rgba(55,55,55,0.88)_0_3px,transparent_3px),radial-gradient(circle_at_48%_18%,rgba(55,55,55,0.88)_0_3px,transparent_3px),radial-gradient(circle_at_61%_24%,rgba(55,55,55,0.88)_0_3px,transparent_3px),radial-gradient(circle_at_74%_14%,rgba(55,55,55,0.88)_0_3px,transparent_3px),radial-gradient(circle_at_87%_28%,rgba(55,55,55,0.88)_0_3px,transparent_3px)] opacity-50" />
    </div>
  );
}

export default function AboutUamcAimObjectivePage() {
  return (
    <div className="min-h-screen bg-white text-[#1d241f]">
      <SiteHeader />

      <main>
        <section className="bg-[#edf7f0]">
          <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-4 lg:px-10">
            <div className="overflow-hidden bg-[#b7ddb9]">
              <HeaderDecor />
              <div className="relative flex min-h-[220px] items-end justify-between px-6 pb-8 pt-10 sm:px-10 lg:px-12">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#234237]">
                    Home &gt; About UAMC &gt; <span className="text-[#129547]">Aim &amp; Objective</span>
                  </p>
                  <h1 className="mt-4 font-display text-[clamp(2.7rem,5vw,4.4rem)] leading-none text-[#5b5b5b]">
                    About <span className="font-semibold text-[#129547]">UAMC</span>
                  </h1>
                </div>

                <div className="relative hidden h-[136px] w-[136px] shrink-0 lg:block">
                  <PlaceholderImage label="UAMC Seal" filename="aim-seal.jpg" className="h-full w-full rounded-full border-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-8">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {aboutLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`min-w-[100px] rounded-sm px-4 py-2 text-center text-[11px] font-semibold text-white transition sm:min-w-[110px] ${
                    item.active ? "bg-[#129547]" : "bg-[#7a7a7a] hover:bg-[#129547]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eaf5e8] py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <h2 className="font-display text-[clamp(2.6rem,4vw,4.35rem)] leading-[0.95] text-[#111]">
                  Aim
                  <span className="ml-4 inline-block align-middle text-[#111]">_____</span>
                </h2>
              </div>

              <div className="max-w-[650px] pt-2">
                <p className="text-[14px] leading-6 text-[#666]">
                  <span className="font-semibold">
                    Uttara Adhunik Medical College (UAMC)
                  </span>{" "}
                  is committed to producing competent, compassionate, and dedicated healthcare professionals equipped
                  with the knowledge and skills to serve the community, particularly in rural areas. The institution
                  strives to provide a solid foundation for future training, service, and research at both national and
                  international levels while fostering continuous professional development.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <PlaceholderImage label="Aim Featured Photo" filename="aim-photo.jpg" className="h-[300px] w-full" />
            </div>
          </div>
        </section>

        <section className="bg-[#eaf5e8] pb-10">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <div className="relative">
              <div className="absolute left-[53%] top-[96px] z-10 w-[400px] bg-[#f9c62a] px-7 py-8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] lg:left-[50%]">
                <h3 className="font-display text-[clamp(2.4rem,4vw,4.5rem)] leading-none text-[#111]">
                  Objective <span className="ml-4 inline-block align-middle text-[#111]">_____</span>
                </h3>
              </div>

              <PlaceholderImage
                label="Objective Featured Photo"
                filename="objective-photo.jpg"
                className="h-[300px] w-[70%]"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#eaf5e8] pb-12">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <div className="grid gap-6 rounded-sm bg-[#d7ead8] px-6 py-6 sm:grid-cols-2 xl:grid-cols-3">
              <article className="border-t border-[#9bb9a0] pt-3">
                <h4 className="text-[16px] font-semibold text-[#129547]">Academic Excellence</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[13px] leading-5 text-[#5a6460]">
                  <li>
                    Deliver a comprehensive MBBS curriculum aligned with Bangladesh Medical &amp; Dental Council (BMDC)
                    and Dhaka University (DU) guidelines.
                  </li>
                  <li>
                    Equip students with a deep understanding of medical sciences, human anatomy, disease mechanisms, and
                    healthcare practices.
                  </li>
                </ul>
              </article>

              <article className="border-t border-[#9bb9a0] pt-3">
                <h4 className="text-[16px] font-semibold text-[#129547]">Clinical &amp; Professional Skills Development</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[13px] leading-5 text-[#5a6460]">
                  <li>
                    Train students in patient history-taking, clinical examinations, and emergency management.
                  </li>
                  <li>
                    Ensure proficiency in diagnostic procedures, laboratory investigations, and therapeutic
                    decision-making.
                  </li>
                  <li>
                    Promote effective communication skills for patient care and interprofessional collaboration.
                  </li>
                </ul>
              </article>

              <article className="border-t border-[#9bb9a0] pt-3">
                <h4 className="text-[16px] font-semibold text-[#129547]">Ethical &amp; Holistic Medical Practice</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[13px] leading-5 text-[#5a6460]">
                  <li>Instill a strong sense of medical ethics, integrity, and responsibility towards patient welfare.</li>
                  <li>Encourage a humanitarian approach in medical practice by blending scientific knowledge with empathy.</li>
                </ul>
              </article>

              <article className="border-t border-[#9bb9a0] pt-3 sm:col-span-2 xl:col-span-1">
                <h4 className="text-[16px] font-semibold text-[#129547]">Research &amp; Continuous Learning</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[13px] leading-5 text-[#5a6460]">
                  <li>Foster critical thinking, research skills, and evidence-based medical practice.</li>
                  <li>Cultivate a lifelong learning mindset to adapt to evolving medical advancements and healthcare needs.</li>
                </ul>
              </article>

              <article className="border-t border-[#9bb9a0] pt-3 sm:col-span-2 xl:col-span-2">
                <h4 className="text-[16px] font-semibold text-[#129547]">Community Health &amp; Global Standards</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[13px] leading-5 text-[#5a6460]">
                  <li>
                    Enhance healthcare accessibility by training graduates to serve diverse populations, particularly in
                    underserved regions.
                  </li>
                  <li>
                    Align education and healthcare practices with international standards to prepare graduates for global
                    medical opportunities.
                  </li>
                </ul>
              </article>
            </div>

            <p className="mx-auto mt-8 max-w-[1120px] text-center text-[14px] leading-6 text-[#666]">
              With a structured <span className="font-semibold">five-year MBBS program</span> followed by a one-year
              internship, <span className="font-semibold">UAMC</span> ensures that graduates are well-prepared to contribute
              meaningfully to the medical field and society.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden py-12">
          <PlaceholderImage
            label="Admission Banner Background"
            filename="aim-admission-banner.jpg"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,80,35,0.82),rgba(14,80,35,0.42))]" />
          <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
            <div className="mx-auto max-w-[1200px] bg-[rgba(9,76,33,0.42)] px-8 py-10 text-center text-white backdrop-blur-[1px]">
              <h3 className="font-display text-[clamp(2.7rem,4vw,4.4rem)] leading-none">
                <span className="text-[#efbe2d]">UAMC</span> Admission
              </h3>
              <p className="mx-auto mt-5 max-w-[1000px] text-[13px] leading-6 text-white/92">
                Uttar Adhunik Medical College (UAMC) was established in 2003 with a vision to provide quality medical
                education and healthcare services. Founded through the dedicated efforts of medical professionals and
                social leaders, UAMC is committed to training future doctors while ensuring affordable healthcare for the
                community.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 bg-[#129547] px-10 py-3 text-sm font-semibold text-white">
                Learn More <Arrow />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-black pt-10 text-white">
          <div className="mx-auto max-w-[1600px] border-b border-white/10 px-6 pb-12 lg:px-[120px]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="text-[clamp(2rem,3vw,3.15rem)] font-medium tracking-tight">Subscribe To Newsletter</h2>
              <form className="flex w-full max-w-[560px] flex-col gap-3 sm:flex-row" action="#">
                <input
                  type="email"
                  placeholder="Enter Your mail"
                  className="h-14 flex-1 border border-[#0c7b39] bg-transparent px-6 text-sm text-white outline-none placeholder:text-white/70"
                />
                <button type="submit" className="h-14 min-w-[210px] bg-white px-6 text-sm font-semibold text-[#121212]">
                  Submit Button <Arrow />
                </button>
              </form>
            </div>
          </div>

          <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-14 md:grid-cols-2 xl:grid-cols-[1.5fr_0.9fr_0.9fr_1.2fr] xl:gap-16 xl:px-[120px] xl:py-16">
            <div className="max-w-[360px]">
              <div className="flex items-center gap-4">
                <div className="relative h-[58px] w-[58px] shrink-0">
                  <PlaceholderImage label="Logo" filename="footer-logo.jpg" className="h-full w-full border-0" />
                </div>
                <div>
                  <p className="font-display text-[2rem] leading-none text-white">Uttara Adhunik</p>
                  <p className="mt-1 text-[15px] text-white/92">Medical College (UAMC)</p>
                </div>
              </div>
              <p className="mt-8 text-[15px] leading-9 text-white/48">
                We are passionate education dedicated to providing high-quality resources learners all backgrounds.
              </p>
              <div className="mt-8 space-y-4 text-[15px] text-white/48">
                <p>Park, Melbourne, Australia</p>
                <p>485-826-710</p>
              </div>
            </div>

            <div>
              <h3 className="text-[18px] font-medium text-white underline underline-offset-4">Our Campus</h3>
              <div className="mt-10 space-y-5 text-[15px] text-white/48">
                {["Academic", "Athletics", "Campus life", "Research", "Academic Area"].map((item) => (
                  <Link key={item} href="/" className="block transition hover:text-[#7d1212]">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[18px] font-medium text-white underline underline-offset-4">Our Pages</h3>
              <div className="mt-10 space-y-5 text-[15px] text-white/48">
                {["About", "Tuition Fee", "Alumni", "Faculty Staff", "Event"].map((item) => (
                  <Link key={item} href="/" className="block transition hover:text-[#7d1212]">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[18px] font-medium text-white underline underline-offset-4">Recent Posts</h3>
              <div className="mt-10 space-y-7">
                {[
                  { date: "August 6, 2024", title: "Those Inequalities Are Inequalities That" },
                  { date: "July 4, 2024", title: "After Decades Of Improvement, Cardiovascular" }
                ].map((post, index) => (
                  <article key={post.title} className="grid grid-cols-[84px_1fr] gap-5">
                    <div className="relative h-[84px] overflow-hidden border border-white/10 bg-white/[0.03]">
                      <PlaceholderImage label={`Post ${index + 1}`} filename={`post-${index + 1}.jpg`} className="h-full w-full border-0" />
                    </div>
                    <div>
                      <p className="text-[14px] text-white/36">{post.date}</p>
                      <h4 className="mt-4 max-w-[280px] text-[17px] leading-9 text-white transition hover:text-[#7d1212]">
                        {post.title}
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="px-6 py-6 text-center text-[15px] text-white/35">Copyright @ 2024. All Rights Reserved by Unipix</div>
        </section>
      </main>
    </div>
  );
}
