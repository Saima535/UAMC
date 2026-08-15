import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../../../components/site-footer";
import { SiteHeader } from "../../../components/site-header";

const aboutLinks = [
  { href: "/about-uamc/overview", label: "Overview" },
  { href: "/about-uamc/history", label: "History of UAMC" },
  { href: "/about-uamc/vision-mission", label: "Vision & Mission" },
  { href: "/about-uamc/aim-objective", label: "Aim & Objective" },
  { href: "/about-uamc/organizational-structure", label: "Organizational Structure", active: true },
  { href: "/about-uamc/founder-members", label: "Founder Member" },
  { href: "/about-uamc/ec-members", label: "EC Members" },
  { href: "/about-uamc/gb-members", label: "GB Members" }
];

function PlaceholderImage({
  label,
  className
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#dfeee3] ${className ?? ""}`}>
      <Image src="/Organizational Structure/camp3.jpg" alt={label} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 border border-white/40" />
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

export default function AboutUamcOrganizationalStructurePage() {
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
                    Home &gt; About UAMC &gt; <span className="text-[#129547]">Organizational Structure</span>
                  </p>
                  <h1 className="mt-4 font-display text-[clamp(2.7rem,5vw,4.4rem)] leading-none text-[#5b5b5b]">
                    About <span className="font-semibold text-[#129547]">UAMC</span>
                  </h1>
                </div>

                <div className="relative hidden h-[136px] w-[136px] shrink-0 lg:block">
                  <Image src="/images/logo.png" alt="UAMC seal" fill sizes="136px" className="object-contain" />
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

        <section className="relative overflow-hidden py-12">
          <PlaceholderImage
            label="Admission Banner Background"
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
                  <Image src="/images/logo.png" alt="UAMC logo" fill sizes="58px" className="object-contain" />
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
                      <PlaceholderImage
                        label={`Post ${index + 1}`}
                        className="h-full w-full border-0"
                      />
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

          <div className="px-6 py-6 text-center text-[15px] text-white/35">
            Copyright @ 2024. All Rights Reserved by Unipix
          </div>
        </section>
      </main>
    </div>
  );
}
