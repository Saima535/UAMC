"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/notices", label: "Notice Board" },
  { href: "/admin/publications", label: "Publications" }
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 border-b border-[#dce6de] bg-[#0f2419] text-white lg:min-h-screen lg:w-[280px] lg:border-b-0 lg:border-r">
      <div className="border-b border-white/10 px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9ad3ad]">UAMC Admin</p>
        <h1 className="mt-3 text-2xl font-semibold text-white">Control Panel</h1>
        <p className="mt-2 text-sm leading-6 text-white/70">Manage notice board and publication content from one place.</p>
      </div>

      <nav className="space-y-2 px-4 py-5">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                isActive ? "bg-[#17924e] text-white" : "text-white/78 hover:bg-white/8 hover:text-white"
              }`}
            >
              <span>{item.label}</span>
              <span className="text-base">→</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
