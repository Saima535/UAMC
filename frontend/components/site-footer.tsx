import Image from "next/image";
import Link from "next/link";

const campusLinks = [
  { href: "/about-uamc/overview", label: "Academic" },
  { href: "/facilities/training", label: "Athletics" },
  { href: "/facilities/cafeteria", label: "Campus life" },
  { href: "/facilities/publication", label: "Research" },
  { href: "/facilities/library", label: "Academic Area" }
];

const pageLinks = [
  { href: "/about-uamc/overview", label: "About" },
  { href: "/admission/admission-procedure-and-fees", label: "Tution Fee" },
  { href: "/", label: "Alumni" },
  { href: "/", label: "Faculty Staff" },
  { href: "/", label: "Event" }
];

const recentPosts = [
  {
    date: "August 6, 2024",
    title: "Those Inequalities Are Inequalities That"
  },
  {
    date: "July 4, 2024",
    title: "After Decades Of Improvement, Cardiovascular"
  }
];

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="M12 21s-6-5.2-6-11a6 6 0 1 1 12 0c0 5.8-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="M21 16.2v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.12 3.5 2 2 0 0 1 3.1 1.3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.57 1.76L6.7 9.1a16 16 0 0 0 8.2 8.2l1.34-1.33a2 2 0 0 1 1.76-.57l3 .5A2 2 0 0 1 21 16.2Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="M7 2v4" />
      <path d="M17 2v4" />
      <path d="M3 9h18" />
      <path d="M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-black text-white" suppressHydrationWarning>
      <div className="border-t border-white/10" />

      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-[120px] lg:py-14">
          <h2 className="text-[clamp(2rem,3vw,3.15rem)] font-medium tracking-tight text-white">Subscribe To Newsletter</h2>
          <form className="flex w-full max-w-[560px] flex-col gap-3 sm:flex-row" action="#" suppressHydrationWarning>
            <input
              type="email"
              placeholder="Enter Your mail"
              className="h-14 flex-1 border border-[#0c7b39] bg-transparent px-6 text-sm text-white outline-none placeholder:text-white/70"
            />
            <button type="submit" className="h-14 min-w-[210px] bg-white px-6 text-sm font-semibold text-[#121212]">
              Submit Button ↗
            </button>
          </form>
        </div>
      </div>

      <div className="border-b border-white/10">
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
              <div className="flex items-center gap-3 transition hover:text-[#7d1212]">
                <LocationIcon />
                <span>Park, Melbourne, Australia</span>
              </div>
              <div className="flex items-center gap-3 transition hover:text-[#7d1212]">
                <PhoneIcon />
                <span>485-826-710</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-medium text-white underline underline-offset-4">Our Campus</h3>
            <div className="mt-10 space-y-5 text-[15px] text-white/48">
              {campusLinks.map((item) => (
                <Link key={item.label} href={item.href} className="block transition hover:text-[#7d1212]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-medium text-white underline underline-offset-4">Our Pages</h3>
            <div className="mt-10 space-y-5 text-[15px] text-white/48">
              {pageLinks.map((item) => (
                <Link key={item.label} href={item.href} className="block transition hover:text-[#7d1212]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-medium text-white underline underline-offset-4">Recent Posts</h3>
            <div className="mt-10 space-y-7">
              {recentPosts.map((post, index) => (
                <article key={post.title} className="grid grid-cols-[84px_1fr] gap-5">
                  <div className="flex aspect-square items-center justify-center border border-white/10 bg-white/[0.03] text-center text-[11px] text-white/28">
                    {/* Footer post images will be added manually later from public/footerImage. */}
                    Footer
                    <br />
                    Image {index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-[14px] text-white/36">
                      <CalendarIcon />
                      <span>{post.date}</span>
                    </div>
                    <h4 className="mt-4 max-w-[280px] text-[17px] leading-9 text-white transition hover:text-[#7d1212]">
                      {post.title}
                    </h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6 text-center text-[15px] text-white/35">
        Copyright @ 2024. All Rights Reserved by Unipix
      </div>
    </footer>
  );
}
