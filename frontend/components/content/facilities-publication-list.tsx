"use client";

import { useEffect, useState } from "react";
import { fetchContentItems, formatDayMonth, type ContentItem } from "../../lib/content-api";

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.8v4.8l3.1 1.7" />
    </svg>
  );
}

export function FacilitiesPublicationList() {
  const [items, setItems] = useState<ContentItem[]>([]);

  useEffect(() => {
    let active = true;

    fetchContentItems({ type: "publication", limit: 12 })
      .then((nextItems) => {
        if (active) {
          setItems(nextItems);
        }
      })
      .catch(() => {
        // Keep silent because the shared helper already has public fallbacks.
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="mt-6 space-y-3">
      {items.map((item) => {
        const { day, month } = formatDayMonth(item.publishedAt);

        return (
          <article key={item.id} className="bg-[#eaebf8] px-6 py-6">
            <div className="grid gap-6 md:grid-cols-[84px_1fr]">
              <div className="text-center">
                <div className="text-[50px] font-bold leading-none text-[#333]">{day}</div>
                <div className="mt-3 inline-flex min-h-[54px] min-w-[90px] items-center justify-center bg-[#0c9a45] px-3 text-[16px] font-bold text-white">
                  {month}
                </div>
              </div>

              <div className="pt-1">
                <h3 className="text-[18px] font-medium leading-[1.5] text-[#3e3e3e]">{item.title}</h3>
                <div className="mt-6 flex items-center gap-3 text-[15px] font-semibold text-[#545454]">
                  <ClockIcon />
                  <span>{item.timeLabel || item.category}</span>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
