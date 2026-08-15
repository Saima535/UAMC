"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AdminSidebar } from "../../components/admin/admin-sidebar";
import { fetchAdminProfile, getStoredAdminToken } from "../../lib/admin-auth";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(pathname !== "/admin/login");

  useEffect(() => {
    if (pathname === "/admin/login") {
      setIsChecking(false);
      return;
    }

    const token = getStoredAdminToken();

    if (!token) {
      router.replace("/admin/login");
      return;
    }

    fetchAdminProfile(token)
      .then(() => {
        setIsChecking(false);
      })
      .catch(() => {
        router.replace("/admin/login");
      });
  }, [pathname, router]);

  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-[#f4f7f4] text-[#121212]">{children}</div>;
  }

  if (isChecking) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#f4f7f4] text-[#31513c]">
        <div className="rounded-2xl border border-[#dbe7dd] bg-white px-6 py-5 text-sm font-medium shadow-[0_10px_28px_rgba(17,38,28,0.04)]">
          Checking admin session...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7f4] text-[#121212] lg:flex">
      <AdminSidebar />
      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">{children}</main>
    </div>
  );
}
