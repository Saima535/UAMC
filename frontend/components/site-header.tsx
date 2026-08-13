import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../lib/site";

const topLinks = ["Student Portal", "Teachers Portal", "Alumni", "Events", "Contact Us"];

const socialLinks = [
  {
    href: "#",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M14.5 8.5h2.5v-3h-2.7c-2.2 0-3.3 1.4-3.3 3.4v1.3h-2v3h2v7h3.5v-7h2.4l.3-3z" />
      </svg>
    )
  },
  {
    href: "#",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M10 8.5l6 3.5-6 3.5V8.5zm11.4 7.7c-.2.9-.8 1.5-1.7 1.7-1.5.3-7.7.3-7.7.3s-6.2 0-7.7-.3c-.9-.2-1.5-.8-1.7-1.7-.2-.9-.2-2.8-.2-2.8s0-1.9.2-2.8c.2-.9.8-1.5 1.7-1.7 1.5-.3 7.7-.3 7.7-.3s6.2 0 7.7.3c.9.2 1.5.8 1.7 1.7.2.9.2 2.8.2 2.8s0 1.9-.2 2.8z" />
      </svg>
    )
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.98 3.5a2.28 2.28 0 1 0 0 4.56 2.28 2.28 0 0 0 0-4.56zm.02 5.85H2v12.65h3V9.35zm4.14 0H6.8v12.65h3V13.7c0-3.27 4.16-3.54 4.16 0v8.3h3V13.03c0-5.76-6.15-5.55-6.15 0v1.32z" />
      </svg>
    )
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm4.9-7.95a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zm2.3 1.15c-.05-1.1-.27-1.85-.57-2.5a3.5 3.5 0 0 0-1.36-1.36c-.65-.3-1.4-.52-2.5-.57C14.7 4 9.3 4 8.1 4c-1.2 0-6.6 0-8.1.05-1.1.05-1.85.27-2.5.57A3.5 3.5 0 0 0 .15 5.96c-.3.65-.52 1.4-.57 2.5C-1 10.2-1 15.6-1 16.8c0 1.2 0 6.6.05 8.1.05 1.1.27 1.85.57 2.5.3.65.77 1.12 1.36 1.36.65.3 1.4.52 2.5.57 1.5.05 6.9.05 8.1.05 1.2 0 6.6 0 8.1-.05 1.1-.05 1.85-.27 2.5-.57a3.5 3.5 0 0 0 1.36-1.36c.3-.65.52-1.4.57-2.5.05-1.5.05-6.9.05-8.1 0-1.2 0-6.6-.05-8.1zM20 16.8c0 .98-.01 1.36-.03 1.84-.02.56-.1.86-.17 1.06-.09.27-.2.47-.37.68-.18.22-.4.39-.68.56-.2.08-.5.15-1.06.17-.48.02-.86.03-1.84.03h-8.4c-.98 0-1.36-.01-1.84-.03-.56-.02-.86-.1-1.06-.17a2.73 2.73 0 0 1-.68-.37 2.5 2.5 0 0 1-.56-.68c-.08-.2-.15-.5-.17-1.06-.02-.48-.03-.86-.03-1.84v-8.4c0-.98.01-1.36.03-1.84.02-.56.1-.86.17-1.06.09-.27.2-.47.37-.68.18-.22.4-.39.68-.56.2-.08.5-.15 1.06-.17.48-.02.86-.03 1.84-.03h8.4c.98 0 1.36.01 1.84.03.56.02.86.1 1.06.17.27.09.47.2.68.37.22.18.39.4.56.68.08.2.15.5.17 1.06.02.48.03.86.03 1.84v8.4z" />
      </svg>
    )
  }
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <circle cx="11" cy="11" r="7" />
      <path d="M18 18l-4.35-4.35" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="border-b border-[#e9e9e9] bg-white">
        <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3 text-[12px] text-[#5c6c5f] sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center text-[13px]">⌖</span>
              <span className="leading-[1.2]">House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model Town</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center text-[13px]">✉</span>
              <span>info@uamc.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center text-[13px]">☎</span>
              <span>+880 1700-220000</span>
            </div>
          </div>

          <div className="hidden flex-wrap items-center gap-4 text-[14px] font-medium text-[#333] md:flex">
            {topLinks.map((item, index) => (
              <div key={item} className="inline-flex items-center gap-4">
                <Link href={item === "Contact Us" ? "/contact" : "/"} className="transition hover:text-[#0a8f4a]">
                  {item}
                </Link>
                {index !== topLinks.length - 1 ? <span className="h-5 w-px bg-[#d0d0d0]" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-[#e5e5e5] bg-white">
        <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white ring-1 ring-black/10">
                <Image src="/images/logo.png" alt="UAMC Logo" fill className="object-contain p-1" sizes="56px" priority />
              </div>
              <div>
                <p className="text-[20px] font-semibold leading-none text-[#1a1a1a]">Uttara Adhunik</p>
                <p className="mt-1 text-[12px] text-[#5a5a5a]">Medical College (UAMC)</p>
              </div>
            </Link>

            <span className="hidden h-10 w-px bg-[#d6d6d6] lg:block" />

            <div className="hidden items-center gap-3 md:flex">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6d6d6] bg-[#fff] text-[#333] transition hover:border-[#0a8f4a] hover:text-[#0a8f4a]"
                  aria-label={item.label}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-[14px] font-semibold uppercase tracking-[0.03em] text-[#333] lg:flex">
            {navLinks.map((item, index) => {
              const active = item.href === "/";
              const hasChevron = ["About UAMC", "Facilities", "Admission"].includes(item.label);
              return (
                <Link
                  key={item.href + index}
                  href={item.href}
                  className={`inline-flex items-center gap-1 transition hover:text-[#0a8f4a] ${active ? "text-[#0a8f4a]" : ""}`}
                >
                  <span>{item.label}</span>
                  {hasChevron ? <span className="text-[12px] leading-none">⌄</span> : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden h-10 w-px bg-[#d6d6d6] lg:block" />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6d6d6] bg-white text-[#333] transition hover:border-[#0a8f4a] hover:text-[#0a8f4a]"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6d6d6] bg-white text-[#333] transition hover:border-[#0a8f4a] hover:text-[#0a8f4a]"
              aria-label="Menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
