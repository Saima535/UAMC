"use client";

import { useEffect, useState } from "react";
import { getStoredAdminToken } from "../../lib/admin-auth";
import { fetchContentStats } from "../../lib/content-api";

type Stats = {
  notices: number;
  publications: number;
  published: number;
  drafts: number;
};

export function AdminSummary() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    fetchContentStats(false, getStoredAdminToken())
      .then((result) => {
        if (active) {
          setStats(result);
        }
      })
      .catch((fetchError) => {
        if (active) {
          setError(fetchError instanceof Error ? fetchError.message : "Unable to load dashboard stats.");
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const cards = [
    { label: "Notices", value: stats?.notices ?? "..." },
    { label: "Publications", value: stats?.publications ?? "..." },
    { label: "Published", value: stats?.published ?? "..." },
    { label: "Drafts", value: stats?.drafts ?? "..." }
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#17924e]">Admin Overview</p>
        <h2 className="mt-2 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[#142118]">Content Dashboard</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5b675e]">
          Use the sidebar to manage Notice Board and Publication records. Changes made here will feed the public-facing panels.
        </p>
      </div>

      {error ? <div className="rounded-2xl border border-[#f2c1c1] bg-[#fff3f3] px-4 py-3 text-sm text-[#8b2e2e]">{error}</div> : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card.label} className="rounded-2xl border border-[#dbe7dd] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(17,38,28,0.04)]">
            <p className="text-sm font-medium text-[#698071]">{card.label}</p>
            <p className="mt-4 text-4xl font-semibold leading-none text-[#17924e]">{card.value}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
