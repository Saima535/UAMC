import Image from "next/image";
import Link from "next/link";
import { NavbarDropdownMenu } from "./navbar-dropdown-menu";

const utilityLinks = [
  { href: "/", label: "Student Portal" },
  { href: "/", label: "Teachers Portal" },
  { href: "/", label: "Alumni" },
  { href: "/", label: "Events" },
  { href: "/contact", label: "Contact Us" }
];

const primaryLinks = [
  { href: "/", label: "HOME", active: true },
  { href: "/contact", label: "NOTICE & MEDIA" },
  { href: "/doctors", label: "CAREER" }
];

const aboutDropdownItems = [
  { href: "/about-uamc/overview", label: "Overview" },
  { href: "/about-uamc/history", label: "History of UAMC" },
  { href: "/about-uamc/vision-mission", label: "Vision & Mission" },
  { href: "/about-uamc/aim-objective", label: "Aim & Objective" },
  { href: "/about-uamc/organizational-structure", label: "Organizational Structure" },
  { href: "/about-uamc/founder-members", label: "Founder Members" },
  { href: "/about-uamc/ec-members", label: "EC Members" },
  { href: "/about-uamc/gb-members", label: "GB Members" }
];

const facilitiesDropdownItems = [
  { href: "/facilities/hospital-service", label: "Hospital service" },
  { href: "/facilities/departments", label: "Departments" },
  { href: "/facilities/library", label: "Library" },
  { href: "/facilities/medical-education-unit", label: "Medical Education Unit" },
  { href: "/facilities/training", label: "Training" },
  { href: "/facilities/publication", label: "Publication" },
  { href: "/facilities/seminar", label: "Seminar" },
  { href: "/facilities/hostel", label: "Hostel" },
  { href: "/facilities/laboratory", label: "Laboratory" },
  { href: "/facilities/cafeteria", label: "Cafeteria" }
];

const admissionDropdownItems = [
  { href: "/admission/admission-procedure-and-fees", label: "Admission Procedure and Fees" },
  { href: "/admission/admission-rules", label: "Admission Rules" },
  { href: "/admission/admission-paper", label: "Admission Paper" },
  { href: "/admission/admission-forms", label: "Admission Forms" },
  { href: "/admission/admission-results", label: "Admission Results" },
  { href: "/admission/online-registration", label: "Online Registration" }
];

const socialLinks = [
  {
    href: "#",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[14px] w-[14px]" aria-hidden="true">
        <path d="M14.5 8.5h2.5v-3h-2.7c-2.2 0-3.3 1.4-3.3 3.4v1.3h-2v3h2v7h3.5v-7h2.4l.3-3z" />
      </svg>
    )
  },
  {
    href: "#",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[14px] w-[14px]" aria-hidden="true">
        <path d="M10 8.5l6 3.5-6 3.5V8.5zm11.4 7.7c-.2.9-.8 1.5-1.7 1.7-1.5.3-7.7.3-7.7.3s-6.2 0-7.7-.3c-.9-.2-1.5-.8-1.7-1.7-.2-.9-.2-2.8-.2-2.8s0-1.9.2-2.8c.2-.9.8-1.5 1.7-1.7 1.5-.3 7.7-.3 7.7-.3s6.2 0 7.7.3c.9.2 1.5.8 1.7 1.7.2.9.2 2.8.2 2.8s0 1.9-.2 2.8z" />
      </svg>
    )
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[14px] w-[14px]" aria-hidden="true">
        <path d="M4.98 3.5a2.28 2.28 0 1 0 0 4.56 2.28 2.28 0 0 0 0-4.56zm.02 5.85H2v12.65h3V9.35zm4.14 0H6.8v12.65h3V13.7c0-3.27 4.16-3.54 4.16 0v8.3h3V13.03c0-5.76-6.15-5.55-6.15 0v1.32z" />
      </svg>
    )
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[14px] w-[14px]" aria-hidden="true">
        <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm4.9-7.95a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zm2.3 1.15c-.05-1.1-.27-1.85-.57-2.5a3.5 3.5 0 0 0-1.36-1.36c-.65-.3-1.4-.52-2.5-.57C14.7 4 9.3 4 8.1 4c-1.2 0-6.6 0-8.1.05-1.1.05-1.85.27-2.5.57A3.5 3.5 0 0 0 .15 5.96c-.3.65-.52 1.4-.57 2.5C-1 10.2-1 15.6-1 16.8c0 1.2 0 6.6.05 8.1.05 1.1.27 1.85.57 2.5.3.65.77 1.12 1.36 1.36.65.3 1.4.52 2.5.57 1.5.05 6.9.05 8.1.05 1.2 0 6.6 0 8.1-.05 1.1-.05 1.85-.27 2.5-.57a3.5 3.5 0 0 0 1.36-1.36c.3-.65.52-1.4.57-2.5.05-1.5.05-6.9.05-8.1 0-1.2 0-6.6-.05-8.1zM20 16.8c0 .98-.01 1.36-.03 1.84-.02.56-.1.86-.17 1.06-.09.27-.2.47-.37.68-.18.22-.4.39-.68.56-.2.08-.5.15-1.06.17-.48.02-.86.03-1.84.03h-8.4c-.98 0-1.36-.01-1.84-.03-.56-.02-.86-.1-1.06-.17a2.73 2.73 0 0 1-.68-.37 2.5 2.5 0 0 1-.56-.68c-.08-.2-.15-.5-.17-1.06-.02-.48-.03-.86-.03-1.84v-8.4c0-.98.01-1.36.03-1.84.02-.56.1-.86.17-1.06.09-.27.2-.47.37-.68.18-.22.4-.39.68-.56.2-.08.5-.15 1.06-.17.48-.02.86-.03 1.84-.03h8.4c.98 0 1.36.01 1.84.03.56.02.86.1 1.06.17.27.09.47.2.68.37.22.18.39.4.56.68.08.2.15.5.17 1.06.02.48.03.86.03 1.84v8.4z" />
      </svg>
    )
  }
];

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M12 21s-6-5.2-6-11a6 6 0 1 1 12 0c0 5.8-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M3 6.75h18v10.5H3z" />
      <path d="m4.5 8 7.5 6 7.5-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M21 16.2v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.12 3.5 2 2 0 0 1 3.1 1.3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.57 1.76L6.7 9.1a16 16 0 0 0 8.2 8.2l1.34-1.33a2 2 0 0 1 1.76-.57l3 .5A2 2 0 0 1 21 16.2Z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-[23px] w-[23px]" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.8-3.8" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-[23px] w-[23px]" aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function LandingPageHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="border-b border-[#e6e6e6]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-4 text-[#707070] lg:flex-row lg:items-center lg:justify-between lg:px-[88px] lg:py-[18px]">
          <div className="flex flex-col gap-3 text-[13px] font-medium sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <div className="flex items-center gap-3">
              <LocationIcon />
              <span className="max-w-[312px] leading-[1.25]">
                House - 34, Road - 4, Sector - 9,
                <br className="hidden sm:block" />
                <span className="sm:ml-1">Sonargaon Janapath, Uttara Model Town</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MailIcon />
              <span>info@uamc.com</span>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon />
              <span>+880 1700-220000</span>
            </div>
          </div>

          <div className="hidden items-center text-[15px] font-medium text-[#2f2f2f] lg:flex">
            {utilityLinks.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <Link href={item.href} className="px-6 transition hover:text-[#14843f]">
                  {item.label}
                </Link>
                {index !== utilityLinks.length - 1 ? <span className="h-7 w-px bg-[#bcbcbc]" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-[#ebebeb]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-[88px] lg:py-[22px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative h-[58px] w-[58px] shrink-0">
                <Image src="/images/logo.png" alt="UAMC logo" fill sizes="58px" className="object-contain" priority />
              </div>
              <div>
                <p className="font-sans text-[19px] font-extrabold leading-none text-[#121212] sm:text-[22px]">Uttara Adhunik</p>
                <p className="mt-1 text-[14px] leading-none text-[#2f2f2f] sm:text-[15px]">Medical College (UAMC)</p>
              </div>
            </Link>

            <div className="hidden h-10 w-px bg-[#1f1f1f]/35 lg:block" />

            <div className="hidden items-center gap-5 text-[#141414] lg:flex">
              {socialLinks.map((item) => (
                <Link key={item.label} href={item.href} aria-label={item.label} className="transition hover:text-[#14843f]">
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px] font-medium tracking-[0.01em] text-[#111111] lg:flex-nowrap lg:gap-8">
              {primaryLinks.slice(0, 1).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center gap-2 pb-[10px] transition hover:text-[#14843f] ${
                    item.active ? "border-b-2 border-[#14843f] text-[#14843f]" : "border-b-2 border-transparent"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
              <NavbarDropdownMenu label="ABOUT UAMC" href="/about-uamc/overview" items={aboutDropdownItems} />
              <NavbarDropdownMenu label="FACILITIES" href="/facilities/hospital-service" items={facilitiesDropdownItems} />
              <NavbarDropdownMenu label="ADMISSION" href="/admission/admission-procedure-and-fees" items={admissionDropdownItems} />
              {primaryLinks.slice(1).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center gap-2 pb-[10px] transition hover:text-[#14843f] ${
                    item.active ? "border-b-2 border-[#14843f] text-[#14843f]" : "border-b-2 border-transparent"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-5 self-end text-[#111111] lg:self-auto">
              <span className="hidden h-9 w-px bg-[#1f1f1f]/35 lg:block" />
              <button type="button" aria-label="Search" className="transition hover:text-[#14843f]">
                <SearchIcon />
              </button>
              <button type="button" aria-label="Menu" className="transition hover:text-[#14843f]">
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
