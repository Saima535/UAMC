"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../../../components/site-footer";
import { LandingPageHeader } from "../../../components/landing-page-header";

const tabs = [
  { label: "Admission Procedure & Fees", href: "/admission" },
  { label: "Admission Papers", href: "/admission/papers" },
  { label: "Application Form", href: "/admission/forms" },
  { label: "Admission Results", href: "/admission/results" },
  { label: "Online Registration", href: "/admission/online-registration" }
];

const admissionResults = [
  { id: "01", date: "July 18, 2022", title: "" },
  { id: "02", date: "July 7, 2022", title: "Selected Candidates under General Quota Merit List" },
  { id: "03", date: "July 7, 2022", title: "Selected Candidates under Freedom Fighter Quota Merit List" },
  { id: "04", date: "July 6, 2022", title: "Total Merit List (A–Z) for MBBS Admission" },
  { id: "05", date: "July 6, 2022", title: "Total Applications (A–Z) – Freedom Fighter Quota" },
  { id: "06", date: "July 6, 2022", title: "Total Applications – Poor & Meritorious Quota" },
  { id: "07", date: "August 26, 2021", title: "General Notice for Admission" }
];

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <path d="M12 4v11" />
      <path d="m7 20 5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.4 11.2 15.6 6.8" />
      <path d="M15.6 17.2 8.4 12.8" />
    </svg>
  );
}

function handleDownload(title: string) {
  if (typeof window === "undefined") return;

  const href = "/Admission Result/camp2.jpg";
  const link = document.createElement("a");
  link.href = href;
  link.download = `${title || "uamc-admission-result"}.jpg`;
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function handleShare(title: string) {
  if (typeof navigator === "undefined" || typeof window === "undefined") return;

  const sharePayload = {
    title: "UAMC Admission Results",
    text: title || "Admission Results",
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(sharePayload);
      return;
    } catch {
      // Fall back gracefully when the user cancels the native share sheet.
    }
  }

  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(window.location.href);
      return;
    } catch {
      // Ignore clipboard failures and keep the page usable.
    }
  }
}

export default function AdmissionResultsPage() {
  return (
    <div className="min-h-screen bg-[#f3f5f1] text-[#171717]">
      <LandingPageHeader />

      <main className="mx-auto w-full max-w-[1600px] pb-12">
        <section className="relative overflow-hidden border-b border-[#dfeae0] bg-[#d8e9d8]">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,255,255,0.6),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.25),transparent_18%),linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0))]" />
            <div className="absolute inset-x-0 top-0 h-[44px] bg-[radial-gradient(circle_at_10%_65%,rgba(37,37,37,0.25)_0_2px,transparent_2px),radial-gradient(circle_at_19%_60%,rgba(37,37,37,0.25)_0_2px,transparent_2px),radial-gradient(circle_at_27%_68%,rgba(37,37,37,0.25)_0_2px,transparent_2px),radial-gradient(circle_at_36%_62%,rgba(37,37,37,0.25)_0_2px,transparent_2px),radial-gradient(circle_at_46%_66%,rgba(37,37,37,0.25)_0_2px,transparent_2px),radial-gradient(circle_at_58%_60%,rgba(37,37,37,0.25)_0_2px,transparent_2px),radial-gradient(circle_at_68%_68%,rgba(37,37,37,0.25)_0_2px,transparent_2px),radial-gradient(circle_at_78%_64%,rgba(37,37,37,0.25)_0_2px,transparent_2px),radial-gradient(circle_at_88%_62%,rgba(37,37,37,0.25)_0_2px,transparent_2px)] opacity-60" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1280px] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
            <div className="flex items-end justify-between gap-6">
              <div className="pb-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244733]">
                  HOME <span className="px-2 text-[#4f6754]">&gt;</span> <span className="text-[#1a7d4f]">FACILITIES</span>
                  <span className="px-2 text-[#4f6754]">&gt;&gt;</span>
                  <span className="text-[#1a7d4f]">Admission Results</span>
                </div>

                <h1 className="mt-5 text-[clamp(2.4rem,4vw,5rem)] font-medium leading-[0.96] tracking-[-0.04em] text-[#191919]">
                  Admission <span className="text-[#1a7d4f]">UAMC</span>
                </h1>
              </div>

              <div className="hidden shrink-0 lg:block">
                <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full border-[10px] border-[#d3e5d6] bg-[#dff3e7] shadow-[0_16px_30px_rgba(19,46,31,0.12)]">
                  <Image
                    src="/Admission Result/camp2.jpg"
                    alt="UAMC badge"
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1280px] px-5 pt-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-1 bg-[#6f706e] p-1.5">
            {tabs.map((tab) => {
              const isActive = tab.href === "/admission/results";

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-[2px] px-4 py-3 text-[12px] font-semibold tracking-[0.02em] text-white transition ${
                    isActive ? "bg-[#1a7d4f]" : "bg-[#7a7a77]"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>

        <section className="mx-auto max-w-[1200px] px-5 pb-14 pt-10 sm:px-8 lg:px-12">
          <div className="text-center">
            <h2 className="text-[clamp(2.6rem,4vw,4.5rem)] font-semibold leading-none tracking-[-0.04em] text-[#1a1a1a]">
              Admission Results
            </h2>
            <p className="mt-4 text-[clamp(1.05rem,2vw,1.9rem)] font-medium text-[#444]">
              MBBS Admission (Session: 2021–2022)
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-6 flex items-center gap-4">
              <span className="block h-[28px] w-[4px] bg-[#1a7d4f]" />
              <h3 className="text-[clamp(1.55rem,2vw,2.5rem)] font-semibold leading-none tracking-[-0.04em] text-[#18231d]">
                Recent Admission Notices &amp; Required Documents
              </h3>
            </div>

            <div className="overflow-hidden border border-[#dfeae0] bg-[#edf5ee]">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#dfeee0] text-[14px] font-semibold text-[#1d2e29]">
                    <th className="w-[8%] border border-[#d9e4db] px-4 py-3 text-center">No.</th>
                    <th className="w-[24%] border border-[#d9e4db] px-4 py-3">Date</th>
                    <th className="w-[48%] border border-[#d9e4db] px-4 py-3">Title</th>
                    <th className="w-[20%] border border-[#d9e4db] px-4 py-3 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {admissionResults.map((item) => (
                    <tr key={item.id} className="border-t border-[#d9e4db] bg-[#f8fbf8] text-[14px] text-[#373737]">
                      <td className="border border-[#d9e4db] px-4 py-4 text-center font-medium text-[#2e2e2e]">{item.id}</td>
                      <td className="border border-[#d9e4db] px-4 py-4">{item.date}</td>
                      <td className="border border-[#d9e4db] px-4 py-4 break-words leading-6 text-[#2f2f2f]">
                        {item.title || ""}
                      </td>
                      <td className="border border-[#d9e4db] px-4 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            aria-label={`Download ${item.title || "admission notice"}`}
                            onClick={() => handleDownload(item.title || "admission-result")}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#80c49b] bg-[#ddf0e5] text-[#1a7d4f] transition hover:bg-[#d0ebd8]"
                          >
                            <DownloadIcon />
                          </button>
                          <button
                            type="button"
                            aria-label={`Share ${item.title || "admission notice"}`}
                            onClick={() => handleShare(item.title || "Admission result")}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#80c49b] bg-[#ddf0e5] text-[#1a7d4f] transition hover:bg-[#d0ebd8]"
                          >
                            <ShareIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex items-start gap-3 text-[12px] leading-7 text-[#4a514d] sm:text-[13px]">
              <span className="mt-1 block h-[23px] w-[4px] bg-[#1a7d4f]" />
              <p>
                <span className="font-bold text-[#1c1c1c]">Note:</span> Applicants are advised to fill out the appropriate form as per
                their eligibility criteria and submit it along with required documents to the college office within the notified
                deadlines.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
