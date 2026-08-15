"use client";

import Link from "next/link";
import Image from "next/image";
import { LandingPageHeader } from "../../../components/landing-page-header";
import { SiteFooter } from "../../../components/site-footer";

const tabs = [
  { label: "Admission Procedure & Fees", href: "/admission" },
  { label: "Admission Papers", href: "/admission/papers" },
  { label: "Application Form", href: "/admission/forms" },
  { label: "Admission Results", href: "/admission/results" },
  { label: "Online Registration", href: "/admission/online-registration" }
];

const records = [
  { no: "01", date: "April 9, 2025", title: "Necessary Documents for MBBS Admission (Session: 2024–2025)" },
  { no: "02", date: "April 5, 2025", title: "Admission Notice in MBBS Course (Session: 2024–2025) for Private Medical Colleges" },
  { no: "03", date: "Jan 25, 2025", title: "Necessary Documents for Admission in MBBS Course (Session: 2023–2024)" },
  { no: "04", date: "Feb 19, 2024", title: "Admission Notice in MBBS Course (Session: 2023–2024)" },
  { no: "05", date: "Feb 16, 2024", title: "Notice of MBBS Admission (Session: 2022–2023)" },
  { no: "06", date: "June 30, 2023", title: "Necessary Documents for Admission in MBBS Course (Session: 2023–2024)" },
  { no: "07", date: "June 25, 2023", title: "Govt. Circular for MBBS Admission 2023 in Private Medical Colleges" },
  { no: "08", date: "June 6, 2023", title: "Necessary Documents to Submit Application" },
  { no: "09", date: "June 5, 2021", title: "Admission Circular (Govt. Notice)" }
];

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-[#1a7d4f]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4v10" />
      <path d="M8 20h8" />
      <path d="m8 16 4 4 4-4" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-[#1a7d4f]" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.4 11.2 15.6 6.8" />
      <path d="M15.6 17.2 8.4 12.8" />
    </svg>
  );
}

export default function AdmissionPapersPage() {
  return (
    <div className="min-h-screen bg-[#f3f5f1] text-[#171717]">
      <LandingPageHeader />

      <main className="mx-auto w-full max-w-[1600px] px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <section className="overflow-hidden border border-[#dfeae0] bg-[#dfeae0]">
          <div className="relative px-5 py-6 sm:px-7 lg:px-8 lg:py-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1d3428]">
              HOME <span className="px-2 text-[#4f6754]">&gt;</span> <span className="text-[#1a7d4f]">Admission Papers</span>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <h1 className="text-[clamp(2.2rem,4vw,5rem)] font-medium leading-[0.95] tracking-tight text-[#111]">
                Admission <span className="text-[#1a7d4f]">UAMC</span>
              </h1>

              <div className="hidden items-center justify-center lg:flex">
                <div className="relative h-[128px] w-[128px] rounded-full border-[10px] border-[#dfeae0] bg-[#cdf2d5] shadow-[0_12px_24px_rgba(17,36,25,0.12)]">
                  <div className="absolute inset-[18px] rounded-full border-[5px] border-[#2e7d4b] bg-[#edf5ee]" />
                  <div className="absolute inset-[32px] rounded-full border-[6px] border-[#204a33] bg-[#d4ead8]" />
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5f39]">
                    UAMC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-3 flex flex-wrap gap-2 bg-[#f1f4f0] px-2 py-4">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.04em] ${
                tab.href === "/admission/papers" ? "bg-[#1a7d4f] text-white" : "bg-[#4a514d] text-white/90"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <section className="mt-8 bg-white px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[clamp(2rem,3vw,3.3rem)] font-medium leading-none text-[#1b1b1b]">
              Admission Papers &amp; Notices
            </h2>
            <p className="mt-3 text-[15px] font-medium text-[#2b3c32]">MBBS Admission – Session 2024–2025</p>
          </div>

          <div className="mt-6 overflow-hidden rounded-[12px] border border-[#dfeae0] bg-[#edf5ef]">
            <div className="relative h-[120px] w-full sm:h-[150px]">
              <Image src="/images/camp1.jpg" alt="Admission banner" fill sizes="100vw" className="object-cover" />
            </div>
          </div>

          <div className="mt-8 border-l-[4px] border-[#1a7d4f] pl-4">
            <div className="overflow-x-auto">
              <table className="min-w-[900px] w-full border-collapse border border-[#d9e6dc] text-left text-[13px]">
                <thead>
                  <tr className="bg-[#dfeee3] text-[#173b2f]">
                    <th className="border border-[#d9e6dc] px-3 py-3 font-semibold">No.</th>
                    <th className="border border-[#d9e6dc] px-3 py-3 font-semibold">Date</th>
                    <th className="border border-[#d9e6dc] px-3 py-3 font-semibold">Title</th>
                    <th className="border border-[#d9e6dc] px-3 py-3 text-center font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((item) => (
                    <tr key={item.no} className="bg-white text-[#4b5952]">
                      <td className="border border-[#d9e6dc] px-3 py-4 align-top">{item.no}</td>
                      <td className="border border-[#d9e6dc] px-3 py-4 align-top">{item.date}</td>
                      <td className="border border-[#d9e6dc] px-3 py-4 align-top text-[#2d4339]">{item.title}</td>
                      <td className="border border-[#d9e6dc] px-3 py-4 align-middle">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            aria-label={`Download ${item.title}`}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#def0e3] ring-1 ring-[#c9e4d0]"
                          >
                            <DownloadIcon />
                          </button>
                          <button
                            type="button"
                            aria-label={`Share ${item.title}`}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#def0e3] ring-1 ring-[#c9e4d0]"
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
          </div>

          <div className="mt-8 border-l-[4px] border-[#1a7d4f] bg-[#edf5ef] px-4 py-3 text-[14px] leading-7 text-[#2b4339]">
            <span className="font-semibold">Note:</span> All applicants are advised to check the latest official notices on the Directorate General of Medical Education (DGME) website for up-to-date admission instructions and required documents.
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
