import Link from "next/link";
import { navLinks } from "../lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-ink">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-white shadow-soft">U</span>
          <span>
            <span className="block text-lg">UAMC</span>
            <span className="block text-xs font-medium text-muted">United Advanced Medical Center</span>
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/appointment"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-primaryDark"
        >
          Book Appointment
        </Link>
      </div>
    </header>
  );
}
