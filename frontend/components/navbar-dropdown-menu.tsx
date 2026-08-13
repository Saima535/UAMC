import Link from "next/link";

type DropdownItem = {
  href: string;
  label: string;
};

type NavbarDropdownMenuProps = {
  label: string;
  href: string;
  items: DropdownItem[];
  active?: boolean;
};

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-[12px] w-[12px]" aria-hidden="true">
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function NavbarDropdownMenu({ label, href, items, active = false }: NavbarDropdownMenuProps) {
  return (
    <div className="navbar-dropdown group relative hidden lg:block">
      <Link
        href={href}
        className={`inline-flex items-center gap-2 pb-[10px] transition hover:text-[#14843f] ${
          active ? "border-b-2 border-[#14843f] text-[#14843f]" : "border-b-2 border-transparent"
        }`}
      >
        <span>{label}</span>
        <ChevronIcon />
      </Link>

      {/* Keep the dropdown purely style-driven so page wiring can be expanded later. */}
      <div className="navbar-dropdown-panel pointer-events-none absolute left-0 top-full z-50 pt-5 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="navbar-dropdown-shell min-w-[300px] overflow-hidden border border-[#e2b62f] bg-[linear-gradient(135deg,rgba(88,97,98,0.96),rgba(67,75,76,0.96))] shadow-[0_18px_45px_rgba(6,24,21,0.26)] backdrop-blur-sm">
          {items.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`navbar-dropdown-item flex items-center justify-between gap-5 px-5 py-[14px] text-[15px] font-medium text-white transition hover:bg-white/8 ${
                index > 0 ? "border-t border-[#e2b62f]" : ""
              }`}
            >
              <span>{item.label}</span>
              <ArrowIcon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
