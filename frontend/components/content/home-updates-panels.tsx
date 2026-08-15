"use client";

import { useEffect, useMemo, useState } from "react";
import {
  fallbackNotices,
  fallbackPublications,
  fetchContentItems,
  formatDayMonth,
  type ContentItem,
  noticeCategoryOptions,
  publicationCategoryOptions
} from "../../lib/content-api";

function NoticeList({ items }: { items: ContentItem[] }) {
  return (
    <div className="space-y-2">
      {items.map((item) => {
        const { day, month } = formatDayMonth(item.publishedAt);

        return (
          <article key={item.id} className="grid grid-cols-[76px_1fr] items-center gap-4 bg-[#f5f6fb] px-3 py-2">
            <div className="w-[58px] rounded-sm bg-white text-center shadow-sm ring-1 ring-[#dce6de]">
              <div className="border-b border-[#dce6de] py-1 text-xl font-bold text-[#1b7e47]">{day}</div>
              <div className="py-1 text-xs font-semibold text-[#7a867c]">{month}</div>
            </div>
            <div>
              <p className="text-sm font-medium text-[#435445]">{item.title}</p>
              <p className="mt-1 text-xs text-[#8a948b]">{item.timeLabel || item.category}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function HomeUpdatesPanels() {
  const [notices, setNotices] = useState<ContentItem[]>(fallbackNotices);
  const [publications, setPublications] = useState<ContentItem[]>(fallbackPublications);
  const [noticeCategory, setNoticeCategory] = useState(noticeCategoryOptions[0]);
  const [publicationCategory, setPublicationCategory] = useState(publicationCategoryOptions[0]);

  useEffect(() => {
    let active = true;

    Promise.all([
      fetchContentItems({ type: "notice", limit: 12 }),
      fetchContentItems({ type: "publication", limit: 12 })
    ])
      .then(([noticeItems, publicationItems]) => {
        if (!active) {
          return;
        }

        setNotices(noticeItems);
        setPublications(publicationItems);
      })
      .catch(() => {
        // Keep the fallback content visible when the API is temporarily unavailable.
      });

    return () => {
      active = false;
    };
  }, []);

  const visibleNotices = useMemo(() => {
    return notices.filter((item) => item.category === noticeCategory).slice(0, 5);
  }, [notices, noticeCategory]);

  const visiblePublications = useMemo(() => {
    return publications.filter((item) => item.category === publicationCategory).slice(0, 5);
  }, [publications, publicationCategory]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-3xl font-semibold text-[#1b7e47]">Notice Board</h3>
          <span className="text-sm text-[#7c8b7f]">View All &gt;</span>
        </div>
        <div className="rounded-sm bg-white p-3 shadow-[0_10px_40px_rgba(26,49,34,0.06)] ring-1 ring-[#dce6de]">
          <div className="mb-3 flex flex-wrap gap-3 text-xs font-semibold">
            {noticeCategoryOptions.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setNoticeCategory(category)}
                className={`px-4 py-2 ${
                  noticeCategory === category ? "border-b-2 border-[#1b7e47] text-[#1b7e47]" : "text-[#8a948b]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <NoticeList items={visibleNotices.length > 0 ? visibleNotices : notices.slice(0, 5)} />
        </div>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-3xl font-semibold text-[#1b7e47]">Publication</h3>
          <span className="text-sm text-[#7c8b7f]">View All &gt;</span>
        </div>
        <div className="rounded-sm bg-white p-3 shadow-[0_10px_40px_rgba(26,49,34,0.06)] ring-1 ring-[#dce6de]">
          <div className="mb-3 flex flex-wrap gap-3 text-xs font-semibold">
            {publicationCategoryOptions.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setPublicationCategory(category)}
                className={`px-4 py-2 ${
                  publicationCategory === category ? "border-b-2 border-[#1b7e47] text-[#1b7e47]" : "text-[#8a948b]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <NoticeList items={visiblePublications.length > 0 ? visiblePublications : publications.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
}
