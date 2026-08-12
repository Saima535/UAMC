const notices = [
  { day: "12", month: "Mar", title: "FGC's e-Logbook: Modernizing the Monitoring of FGC's Full-Time Faculty", time: "3:00 PM" },
  { day: "12", month: "Mar", title: "FGC's e-Logbook: Monitoring the Monitoring of FGC's Full-Time Faculty", time: "3:00 PM" },
  { day: "12", month: "Mar", title: "FGC's e-Logbook: Monitoring the Monitoring of FGC's Full-Time Faculty", time: "3:00 PM" },
  { day: "12", month: "Mar", title: "FGC's e-Logbook: Monitoring the Monitoring of FGC's Full-Time Faculty", time: "3:00 PM" },
  { day: "12", month: "Mar", title: "FGC's e-Logbook: Monitoring the Monitoring of FGC's Full-Time Faculty", time: "3:00 PM" }
];

const publications = notices;

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

export default function HomePage() {
  return (
    <main className="bg-[#f5f8f3] text-ink">
      <header className="sticky top-0 z-50 border-b border-[#dfe8df] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-3 text-[11px] text-[#5c6c5f] sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <span>Students Portal</span>
            <span>Teachers Portal</span>
            <span>Alumni</span>
            <span>Events</span>
            <span>Contact Us</span>
          </div>
          <div className="hidden gap-4 md:flex">
            <span>+880 1234 567 890</span>
            <span>info@uamc.edu.bd</span>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#e8f0ea] ring-1 ring-[#d2e0d5]">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#1b7e47] to-[#d4ae43]" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">Uttar Adhunik</p>
              <p className="text-[11px] text-[#6c7b6f]">United Advanced Medical College Hospital</p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#55665a] lg:flex">
            <span className="text-[#1b7e47]">HOME</span>
            <span>ABOUT UAMC</span>
            <span>ACADEMICS</span>
            <span>ADMISSIONS</span>
            <span>NOTICE BOARD</span>
            <span>CAREER</span>
          </nav>
          <div className="flex items-center gap-3 text-[#5c6c5f]">
            <span>Search</span>
            <span className="text-lg">☰</span>
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(14,98,57,0.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(236,202,86,0.18),transparent_18%),linear-gradient(180deg,rgba(14,30,20,0.32),rgba(14,30,20,0.18))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,126,71,0.25),rgba(27,126,71,0.02)_45%,rgba(27,126,71,0.18))]" />
        <div className="mx-auto grid min-h-[520px] max-w-[1180px] items-end gap-8 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-4 text-sm font-medium text-white/80">UAMC • knowledge meets innovation</p>
            <h1 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95] tracking-tight text-white">
              Excellence in Medical <span className="text-[#eccb4e]">Education</span>, Innovation in Healthcare
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/86 sm:text-lg">
              Build your future with a modern medical college that combines academic rigor, practical experience, and a patient-centered campus community.
            </p>
            <button className="mt-8 rounded-sm bg-white px-5 py-3 text-sm font-semibold text-[#1b7e47] shadow-lg shadow-black/20">
              View Our Program
            </button>
          </div>
          <aside className="relative z-10 self-end rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
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
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-3xl font-semibold text-[#1b7e47]">Notice Board</h3>
              <span className="text-sm text-[#7c8b7f]">View All &gt;</span>
            </div>
            <div className="rounded-sm bg-white p-3 shadow-[0_10px_40px_rgba(26,49,34,0.06)] ring-1 ring-[#dce6de]">
              <div className="mb-3 flex gap-3 text-xs font-semibold">
                <span className="border-b-2 border-[#1b7e47] px-4 py-2 text-[#1b7e47]">General Notice</span>
                <span className="px-4 py-2 text-[#8a948b]">Admission Notice</span>
                <span className="px-4 py-2 text-[#8a948b]">Reports</span>
                <span className="px-4 py-2 text-[#8a948b]">Job Circular</span>
              </div>
              <div className="space-y-2">
                {notices.map((item, index) => (
                  <article key={`${item.title}-${index}`} className="grid grid-cols-[76px_1fr] items-center gap-4 bg-[#f5f6fb] px-3 py-2">
                    <div className="w-[58px] rounded-sm bg-white text-center shadow-sm ring-1 ring-[#dce6de]">
                      <div className="border-b border-[#dce6de] py-1 text-xl font-bold text-[#1b7e47]">{item.day}</div>
                      <div className="py-1 text-xs font-semibold text-[#7a867c]">{item.month}</div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#435445]">{item.title}</p>
                      <p className="mt-1 text-xs text-[#8a948b]">{item.time}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-3xl font-semibold text-[#1b7e47]">Publication</h3>
              <span className="text-sm text-[#7c8b7f]">View All &gt;</span>
            </div>
            <div className="rounded-sm bg-white p-3 shadow-[0_10px_40px_rgba(26,49,34,0.06)] ring-1 ring-[#dce6de]">
              <div className="mb-3 flex gap-3 text-xs font-semibold">
                <span className="border-b-2 border-[#1b7e47] px-4 py-2 text-[#1b7e47]">Journal</span>
                <span className="px-4 py-2 text-[#8a948b]">Thesis</span>
              </div>
              <div className="space-y-2">
                {publications.map((item, index) => (
                  <article key={`${item.title}-${index}`} className="grid grid-cols-[76px_1fr] items-center gap-4 bg-[#f5f6fb] px-3 py-2">
                    <div className="w-[58px] rounded-sm bg-white text-center shadow-sm ring-1 ring-[#dce6de]">
                      <div className="border-b border-[#dce6de] py-1 text-xl font-bold text-[#1b7e47]">{item.day}</div>
                      <div className="py-1 text-xs font-semibold text-[#7a867c]">{item.month}</div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#435445]">{item.title}</p>
                      <p className="mt-1 text-xs text-[#8a948b]">{item.time}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="min-h-[320px] rounded-sm bg-[linear-gradient(180deg,rgba(27,126,71,0.15),rgba(27,126,71,0.15)),linear-gradient(135deg,#8fb39c,#dce6de)] p-4">
              <div className="h-full rounded-sm border border-white/60 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent_55%),linear-gradient(180deg,rgba(12,37,22,0.1),rgba(12,37,22,0.2))]" />
            </div>
            <div className="grid gap-4">
              <div className="min-h-[154px] rounded-sm bg-[linear-gradient(135deg,#93b9d6,#dce7ef)]" />
              <div className="relative min-h-[154px] rounded-sm bg-[#2f714d] p-4 text-white">
                <p className="text-4xl font-semibold">28+</p>
                <p className="mt-2 text-sm text-white/80">Years of trusted education service</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-[#1b7e47]">knowledge meets innovation</p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,4rem)] leading-none text-[#e3b53c]">
              About UAMC
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#5f6d61]">
              Uttar Adhunik Medical College is a progressive medical institution committed to academic excellence, compassionate healthcare, and research-led learning. We nurture students through mentorship, clinical exposure, and a disciplined campus environment.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["College Mission Statement", "College Vision Achievements"].map((item) => (
                <div key={item} className="rounded-sm border border-dashed border-[#b5d4bc] bg-white px-4 py-4 text-sm font-semibold text-[#1b7e47]">
                  {item}
                </div>
              ))}
            </div>
            <button className="mt-6 rounded-sm bg-[#1b7e47] px-5 py-3 text-sm font-semibold text-white">
              View Our Program +
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#1b7e47] py-7 text-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            ["90%", "Pass-out Students", "Founders’ contribution"],
            ["Top 10", "College in the region", "Consistent academic growth"],
            ["No. 1", "in the area", "Strong education standard"]
          ].map(([value, title, note]) => (
            <div key={title} className="rounded-sm bg-white/10 px-6 py-5 backdrop-blur">
              <p className="text-3xl font-semibold">{value}</p>
              <p className="mt-2 text-sm font-medium">{title}</p>
              <p className="mt-1 text-xs text-white/75">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h3 className="text-3xl font-semibold text-[#1b7e47]">Find Your Department</h3>
            <p className="mt-3 text-sm leading-7 text-[#657469]">
              Explore our academic departments and discover the pathway that fits your goals. Use the search bar to find the subject you want to study.
            </p>
            <div className="mt-5 rounded-sm border border-[#d4e2d7] bg-white px-4 py-3 text-sm text-[#99a49b]">Search your department</div>
            <div className="mt-4 overflow-hidden rounded-sm border border-[#d4e2d7] bg-[#eaf5ec]">
              <div className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#1b7e47]">
                <span>Department of Microbiology</span>
                <span className="grid h-8 w-8 place-items-center rounded-sm bg-[#1b7e47] text-white">+</span>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="min-h-[170px] rounded-sm bg-[linear-gradient(135deg,#b9d4e8,#7ea7c7)]" />
            <div className="min-h-[170px] rounded-sm bg-[linear-gradient(135deg,#d2e3db,#7cb08d)]" />
            <div className="sm:col-span-2 min-h-[170px] rounded-sm bg-[linear-gradient(135deg,#4f8c73,#d6e1db)]" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,98,58,0.8),rgba(16,98,58,0.78)),radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1180px] px-4 text-center text-white sm:px-6 lg:px-8">
          <h3 className="font-display text-[clamp(2.4rem,4vw,4.5rem)]">UAMC Admission</h3>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-white/85">
            UAMC is accepting applications for the upcoming session with modern classrooms, clinical exposure, residential support, and a structured academic path that prepares graduates for public health service.
          </p>
          <button className="mt-6 rounded-sm bg-[#e0b03a] px-5 py-3 text-sm font-semibold text-[#173d27]">
            Learn More +
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="knowledge meets innovation" title="Our Facilities" />
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_0.9fr_1fr]">
          <div className="space-y-2">
            {facilities.map((item, index) => (
              <div key={item} className="flex items-center justify-between border border-[#e1e8e1] bg-white px-4 py-3 text-sm font-medium text-[#637165]">
                <span>{item}</span>
                <span className="text-[#e0b03a]">{index === 0 ? "●" : "▸"}</span>
              </div>
            ))}
          </div>
          <div className="min-h-[420px] rounded-sm bg-[linear-gradient(180deg,#bccdbe,#e3ece4)]" />
          <div className="rounded-sm bg-[#f4f7f1] p-6">
            <h4 className="text-2xl font-semibold text-[#1b7e47]">Hostel Facilities</h4>
            <p className="mt-4 text-sm leading-7 text-[#657469]">
              Hostel accommodations for students with secure residence, supervision, and access to essential academic amenities.
            </p>
            <button className="mt-6 rounded-sm bg-[#1b7e47] px-5 py-3 text-sm font-semibold text-white">View Our Program +</button>
          </div>
        </div>
      </section>

      <section className="bg-[#e5efe5] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-[#1b7e47]">knowledge meets innovation</p>
            <h3 className="mt-2 font-display text-[clamp(2.5rem,4vw,4.4rem)] text-ink">Message from the Principal</h3>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#5e6b60]">
              We shape confident healthcare professionals through discipline, compassion, and deep academic support. Our faculty and leadership work together to create a learning environment rooted in service and excellence.
            </p>
            <button className="mt-6 rounded-sm bg-[#1b7e47] px-5 py-3 text-sm font-semibold text-white">Read More +</button>
          </div>
          <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-sm bg-white p-4 text-center text-sm italic text-[#627365]">Signature</div>
            <div className="min-h-[320px] rounded-sm bg-[linear-gradient(135deg,#d6ddd6,#8aa08f)]" />
          </div>
        </div>
      </section>

      <section className="bg-[#11823b] py-12 text-white">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-display text-[clamp(2.2rem,4vw,4.3rem)]">Campus Life</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/75">
              Building a vibrant community of learners with meaningful experiences beyond the classroom.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {campusCards.map((card) => (
              <div key={card.title} className={`min-h-[170px] rounded-sm bg-gradient-to-br ${card.tone} p-4 flex items-end`}>
                <span className="text-sm font-semibold">{card.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-semibold text-[#1b7e47]">Alumni Event</h3>
          <span className="text-sm text-[#7c8b7f]">View All &gt;</span>
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            {["01", "02", "03"].map((number, index) => (
              <div key={number} className="flex items-center gap-4 border border-[#e4ebe4] bg-white p-4">
                <div className="text-4xl font-semibold text-[#c4d0c4]">{number}</div>
                <div>
                  <p className="font-medium text-[#47604f]">Alumni event highlight {index + 1}</p>
                  <p className="text-xs text-[#8d978f]">August 10, 2026 • 01:00 PM</p>
                </div>
              </div>
            ))}
          </div>
          <div className="min-h-[360px] rounded-sm bg-[linear-gradient(135deg,#cfd9d1,#92a89a)]" />
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-semibold text-[#1b7e47]">Read Our Latest News</h3>
          <span className="text-sm text-[#7c8b7f]">View All &gt;</span>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            "Those inequities are inequities",
            "After Decades of Improvement, Coronavirus"
          ].map((title) => (
            <article key={title} className="grid grid-cols-[140px_1fr] border border-dashed border-[#d4e2d7] bg-white p-3">
              <div className="min-h-[110px] rounded-sm bg-[linear-gradient(135deg,#9fc0a6,#dfe8de)]" />
              <div className="px-3 py-1">
                <span className="inline-block rounded-sm bg-[#f3f7d7] px-2 py-1 text-[10px] font-semibold uppercase text-[#b58f1d]">News</span>
                <h4 className="mt-3 text-sm font-semibold text-[#425345]">{title}</h4>
                <p className="mt-2 text-xs text-[#859086]">By Admin • August 7, 2026</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#edf5ed] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <h3 className="text-center text-3xl font-semibold text-[#1b7e47]">My Students Feedback</h3>
          <p className="mt-2 text-center text-sm text-[#6f7c70]">We collect feedback to strengthen our student-centered experience.</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {["Emma", "Sami", "Sahmila"].map((name) => (
              <div key={name} className="rounded-sm border border-[#dde6de] bg-white p-6">
                <p className="text-[#e0b03a]">★★★★★</p>
                <p className="mt-4 text-sm leading-7 text-[#5d6a5f]">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#1b7e47] to-[#d8b23d]" />
                  <div>
                    <p className="font-semibold text-[#1b7e47]">{name}</p>
                    <p className="text-xs text-[#8b958d]">Student</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0b0b0b] text-white">
        <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <h4 className="text-2xl font-medium">Subscribe To Newsletter</h4>
            <div className="flex gap-2">
              <input className="min-w-[240px] rounded-sm border border-white/15 bg-white px-4 py-3 text-sm text-[#202020] outline-none" placeholder="Enter Your Email" />
              <button className="rounded-sm bg-white px-5 py-3 text-sm font-semibold text-[#0b0b0b]">Submit Button +</button>
            </div>
          </div>
          <div className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-lg font-semibold">Uttar Adhunik</p>
              <p className="mt-4 text-sm leading-7 text-white/65">
                United Advanced Medical College Hospital is dedicated to quality education and healthcare service.
              </p>
            </div>
            <div>
              <p className="font-semibold">Our Campus</p>
              <div className="mt-4 space-y-2 text-sm text-white/65">
                <p>About</p>
                <p>Admission</p>
                <p>Events</p>
                <p>Academic</p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Our Pages</p>
              <div className="mt-4 space-y-2 text-sm text-white/65">
                <p>News</p>
                <p>Team</p>
                <p>Facility</p>
                <p>Contact</p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Recent Posts</p>
              <div className="mt-4 space-y-3 text-sm text-white/65">
                <p>Those inequities are inequities</p>
                <p>After Decades of Improvement, Coronavirus</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-sm text-white/45">
            © 2026 UAMC. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
