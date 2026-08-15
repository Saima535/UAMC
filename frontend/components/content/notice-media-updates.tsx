"use client";

import { useEffect, useState } from "react";
import { fetchContentItems, type ContentItem } from "../../lib/content-api";

export function NoticeMediaUpdates() {
  const [noticeItems, setNoticeItems] = useState<ContentItem[]>([]);
  const [publicationItems, setPublicationItems] = useState<ContentItem[]>([]);

  useEffect(() => {
    let active = true;

    Promise.all([
      fetchContentItems({ type: "notice", limit: 6 }),
      fetchContentItems({ type: "publication", limit: 6 })
    ])
      .then(([notices, publications]) => {
        if (!active) {
          return;
        }

        setNoticeItems(notices);
        setPublicationItems(publications);
      })
      .catch(() => {
        // The shared API helper already supplies fallbacks for public pages.
      });

    return () => {
      active = false;
    };
  }, []);

  return (
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
            <div key={item.id} className="flex items-start gap-3 rounded-xl bg-white px-3 py-3 ring-1 ring-[#e2ebdf]">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dff0e3] text-sm font-bold text-[#1a7d4f]">
                {index + 1}
              </div>
              <div>
                <p className="text-[0.96rem] leading-6 text-[#2d4339]">{item.title}</p>
                <p className="mt-1 text-xs text-[#6a7b6f]">{item.category}</p>
              </div>
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
            <div key={item.id} className="flex items-start gap-3 rounded-xl bg-[#f7faf7] px-3 py-3 ring-1 ring-[#e7efe8]">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#e8f3ea] text-xs font-bold text-[#1a7d4f]">
                {index + 1}
              </div>
              <div>
                <p className="text-[0.96rem] leading-6 text-[#2d4339]">{item.title}</p>
                <p className="mt-1 text-xs text-[#6a7b6f]">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
