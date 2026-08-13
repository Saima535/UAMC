import Image from "next/image";
import Link from "next/link";
import { LandingPageHeader } from "../../components/landing-page-header";
import { SiteFooter } from "../../components/site-footer";

const latestNews = [
  {
    title: "UAMC Students Excel in National Health Conference",
    date: "12 Mar 2025",
    image: "/images/news1.jpg",
    category: "Campus News"
  },
  {
    title: "International Webinar on Modern Clinical Education",
    date: "08 Mar 2025",
    image: "/images/news2.jpg",
    category: "Academic"
  },
  {
    title: "New Research Collaboration Signed with Regional Hospital",
    date: "03 Mar 2025",
    image: "/images/alumni.jpg",
    category: "Research"
  }
];

const noticeItems = [
  "Application for Admission 2025 is now open",
  "Schedule for Semester Final Examination released",
  "International Medical Education Seminar registration",
  "Faculty Development Program for academic staff",
  "Public health awareness drive on campus this month"
];

const publicationItems = [
  "Journal of UAMC Medicine, Volume 06, Issue 02",
  "Research bulletin on clinical education practices",
  "Student innovation projects showcase report",
  "Annual institutional publication overview 2024"
];

const alumniEvents = [
  {
    title: "UAMC Alumni Reunion 2025",
    date: "25 April 2025",
    image: "/images/alumni.jpg"
  },
  {
    title: "Career guidance and networking day",
    date: "14 May 2025",
    image: "/images/camp1.jpg"
  },
  {
    title: "Healthcare leadership seminar",
    date: "28 May 2025",
    image: "/images/camp2.jpg"
  }
];

const galleryImages = [
  "/images/camp1.jpg",
  "/images/camp2.jpg",
  "/images/camp3.jpg",
  "/images/uamc1.jpg"
];

function NewsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path d="M6 5.5h12a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2Z" />
      <path d="M8 9h8" />
      <path d="M8 12h8" />
      <path d="M8 15h5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <path d="M7 2v3" />
      <path d="M17 2v3" />
      <path d="M3.5 9.5h17" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
    </svg>
  );
}

export default function NoticeMediaPage() {
  return (
    <div className="min-h-screen bg-[#f3f5f1] text-[#121212]">
      <LandingPageHeader />

      <main className="mx-auto w-full max-w-[1600px] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden border border-[#dfeae0] bg-[#edf3ee]">
          <div className="relative px-5 py-6 sm:px-7 lg:px-8 lg:py-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1d3428]">
              Home <span className="px-2 text-[#4f6754]">&gt;</span> <span className="text-[#1a7d4f]">Notice &amp; Media</span>
            </div>
            <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="text-[clamp(2.5rem,4vw,4.8rem)] font-medium leading-[0.92] tracking-tight text-[#1b1b1b]">
                Notice &amp; <span className="text-[#1a7d4f]">Media</span>
              </h1>
              <div className="flex items-center gap-2 rounded-full border border-[#c7d8ca] bg-white px-4 py-2 text-sm font-medium text-[#2d4339]">
                <NewsIcon />
                Latest Updates
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.8fr_1.2fr]">
          <div className="rounded-[18px] bg-white p-4 shadow-[0_10px_30px_rgba(17,38,28,0.04)] ring-1 ring-[#e2ebdf] sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-[#1b1b1b] sm:text-[2rem]">Latest News</h2>
              <Link href="#" className="text-sm font-medium text-[#1a7d4f] hover:text-[#0f5d36]">
                View all &gt;
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {latestNews.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-[14px] border border-[#e8eee7] bg-[#f8faf8]">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="space-y-3 p-4">
                    <span className="inline-flex rounded-full bg-[#e8f3ea] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1a7d4f]">
                      {item.category}
                    </span>
                    <h3 className="text-[1.05rem] font-semibold leading-6 text-[#1b1b1b]">{item.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-[#536457]">
                      <CalendarIcon />
                      {item.date}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[18px] bg-[#eaf1eb] p-5 shadow-[0_10px_30px_rgba(17,38,28,0.04)] ring-1 ring-[#d9e6dc] sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-[#1b1b1b]">Notice Board</h2>
                <button type="button" className="text-sm font-medium text-[#1a7d4f] hover:text-[#0f5d36]">
                  View all &gt;
                </button>
              </div>

              <div className="space-y-3">
                {noticeItems.map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-white px-3 py-3 ring-1 ring-[#e2ebdf]">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dff0e3] text-sm font-bold text-[#1a7d4f]">
                      {index + 1}
                    </div>
                    <p className="text-[0.96rem] leading-6 text-[#2d4339]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[18px] bg-white p-5 shadow-[0_10px_30px_rgba(17,38,28,0.04)] ring-1 ring-[#e2ebdf] sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-[#1b1b1b]">Publication</h2>
                <button type="button" className="text-sm font-medium text-[#1a7d4f] hover:text-[#0f5d36]">
                  View all &gt;
                </button>
              </div>

              <div className="space-y-3">
                {publicationItems.map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-[#f7faf7] px-3 py-3 ring-1 ring-[#e7efe8]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#e8f3ea] text-xs font-bold text-[#1a7d4f]">
                      {index + 1}
                    </div>
                    <p className="text-[0.96rem] leading-6 text-[#2d4339]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[20px] bg-white p-4 shadow-[0_10px_30px_rgba(17,38,28,0.04)] ring-1 ring-[#e2ebdf] sm:p-6 lg:p-8">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1a7d4f]">Community</p>
              <h2 className="mt-2 text-[2rem] font-semibold text-[#1b1b1b]">Alumni Events</h2>
            </div>
            <Link href="#" className="text-sm font-medium text-[#1a7d4f] hover:text-[#0f5d36]">
              Explore all &gt;
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <article className="overflow-hidden rounded-[18px] border border-[#e5eee5] bg-[#f9faf9]">
              <div className="relative h-[280px] overflow-hidden">
                <Image src={alumniEvents[0].image} alt={alumniEvents[0].title} fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1d16]/70 via-[#0f1d16]/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-sm font-medium text-[#dbf2e4]">UAMC Alumni</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-8">{alumniEvents[0].title}</h3>
                  <div className="mt-3 flex items-center gap-2 text-sm text-[#ebf4ee]">
                    <CalendarIcon />
                    {alumniEvents[0].date}
                  </div>
                </div>
              </div>
            </article>

            <div className="space-y-5">
              {alumniEvents.slice(1).map((item) => (
                <article key={item.title} className="overflow-hidden rounded-[18px] border border-[#e5eee5] bg-[#f9faf9]">
                  <div className="grid grid-cols-[120px_1fr]">
                    <div className="relative h-28">
                      <Image src={item.image} alt={item.title} fill sizes="120px" className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1a7d4f]">Event</p>
                      <h3 className="mt-2 text-lg font-semibold leading-6 text-[#1b1b1b]">{item.title}</h3>
                      <div className="mt-2 flex items-center gap-2 text-xs text-[#536457]">
                        <CalendarIcon />
                        {item.date}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[20px] bg-[#edf3ee] p-4 shadow-[0_10px_30px_rgba(17,38,28,0.04)] ring-1 ring-[#d8e3da] sm:p-6 lg:p-8">
          <div className="mb-7 flex items-center justify-between gap-4">
            <h2 className="text-[2rem] font-semibold text-[#1b1b1b]">Event Gallery</h2>
            <button type="button" className="text-sm font-medium text-[#1a7d4f] hover:text-[#0f5d36]">
              See more &gt;
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div key={image + index} className="relative h-52 overflow-hidden rounded-[16px] ring-1 ring-[#d8e3da]">
                <Image src={image} alt={`Event gallery ${index + 1}`} fill sizes="(max-width: 1280px) 50vw, 25vw" className="object-cover transition duration-300 hover:scale-105" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 overflow-hidden rounded-[20px] bg-[#0d2117] px-4 py-8 text-white sm:px-6 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c9ecd3]">Stay informed</p>
              <h2 className="mt-3 text-[2.1rem] font-semibold leading-tight text-white">Subscribe To Newsletter</h2>
            </div>

            <form className="flex w-full max-w-[560px] flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 flex-1 border border-[#1d4835] bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/70"
              />
              <button type="submit" className="h-14 min-w-[180px] bg-white px-6 text-sm font-semibold text-[#0d2117]">
                Submit Button ↗
              </button>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
