import Image from "next/image";
import Link from "next/link";
import { LandingPageHeader } from "./landing-page-header";
import { SiteFooter } from "./site-footer";

const tabs = [
  "Admission Procedure & Fees",
  "Admission Papers",
  "Application Form",
  "Admission Result",
  "Online Registration"
];

const nationalStudentBullets = [
  "Admission is based on the results of the DGHS national medical admission test.",
  "Selection follows candidate preference and merit list as per DGHS guidelines.",
  "Final selection is done by the admission committee formed by DGME."
];

const nationalQuotas = [
  "Total Seats: 90 for 1st Year MBBS (Session 2013-2014)",
  "Poor Quota: 5% seats (free tuition/scholarship) based on merit & financial need.",
  "Freedom Fighter Quota: Available under DGHS rules."
];

const foreignStudentBullets = [
  "Must hold a non-Bangladeshi passport.",
  "Must follow foreign student admission policy set by the Government of Bangladesh."
];

const foreignDocuments = [
  "Attested copies of O/A level or equivalent certificates by their Foreign Ministry.",
  "Application form from the Bangladesh Embassy of the respective country.",
  "UAMC's Foreign Student Application Form (available at college office).",
  "Photocopies of passport & academic documents.",
  "Documents must be sent to DGHS via the Foreign Ministry of Bangladesh."
];

const nationalFees = [
  { no: "01", particulars: "Admission Fee", amount: "19,44,000/-" },
  { no: "02", particulars: "Internship Fee", amount: "1,80,000/-" },
  { no: "03", particulars: "Total Payable", amount: "21,24,000/-" }
];

const foreignFees = [
  { no: "01", particulars: "Admission & Tuition (5 Years)", amount: "$40,000" },
  { no: "02", particulars: "Total Payable", amount: "$40,000" }
];

function HospitalIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16 text-[#1a7d4f]" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
      <path d="M20 10h24a6 6 0 0 1 6 6v28a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6V16a6 6 0 0 1 6-6Z" />
      <path d="M32 20v24M20 32h24" />
      <path d="M12 50h40" />
      <path d="M16 14h32" />
    </svg>
  );
}

function SideBadge() {
  return (
    <div className="relative h-[128px] w-[128px]">
      <Image src="/images/logo.png" alt="UAMC logo" fill sizes="128px" className="object-contain" />
    </div>
  );
}

function FeeTable({ currency, rows, total }: { currency: string; rows: { no: string; particulars: string; amount: string }[]; total: string }) {
  return (
    <div className="overflow-hidden border border-[#d9e7db] bg-[#f7faf7]">
      <table className="w-full border-collapse text-left text-[13px]">
        <thead>
          <tr className="bg-[#dfeee3] text-[#163b2d]">
            <th className="border border-[#d9e7db] px-3 py-3 font-semibold">No.</th>
            <th className="border border-[#d9e7db] px-3 py-3 font-semibold">Particulars</th>
            <th className="border border-[#d9e7db] px-3 py-3 text-right font-semibold">Amount ({currency})</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.no} className="bg-white text-[#23352d]">
              <td className="border border-[#d9e7db] px-3 py-3">{row.no}</td>
              <td className="border border-[#d9e7db] px-3 py-3">{row.particulars}</td>
              <td className="border border-[#d9e7db] px-3 py-3 text-right">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between border-t border-[#d9e7db] bg-[#eef8f1] px-3 py-3 text-[13px] font-semibold text-[#163b2d]">
        <span>Total Payable</span>
        <span>{total}</span>
      </div>
    </div>
  );
}

function ContentNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 border-l-[4px] border-[#1a7d4f] bg-[#edf5ef] px-4 py-3 text-[14px] leading-7 text-[#2b4339]">
      {children}
    </div>
  );
}

export function AdmissionProcedureFeesPage() {
  return (
    <div className="min-h-screen bg-[#f2f5f1] text-[#1d1d1d]">
      <LandingPageHeader />

      <main className="mx-auto w-full max-w-[1600px] px-4 pb-14 pt-6 sm:px-6 lg:px-8">
        <section className="overflow-hidden border border-[#dde7dd] bg-[#dfeae0]">
          <div className="relative px-5 py-6 sm:px-7 lg:px-8 lg:py-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1d3428]">
              HOME <span className="px-2 text-[#4f6754]">&gt;</span> <span className="text-[#1a7d4f]">Admission Procedure &amp; Fees</span>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <h1 className="text-[clamp(2.5rem,4vw,5rem)] font-medium leading-[0.95] tracking-tight text-[#1b1b1b]">
                Admission <span className="text-[#1a7d4f]">UAMC</span>
              </h1>
              <div className="hidden lg:block">
                <SideBadge />
              </div>
            </div>
          </div>
        </section>

        <nav className="mt-2 overflow-x-auto bg-[#f4f6f3]">
          <div className="flex min-w-max gap-2 px-1 py-4">
            {tabs.map((tab, index) => (
              <Link
                key={tab}
                href={index === 0 ? "/admission" : "#"}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-none px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.04em] ${
                  index === 0 ? "bg-[#1a7d4f] text-white" : "bg-[#4b554d] text-white/90"
                }`}
              >
                {tab}
              </Link>
            ))}
          </div>
        </nav>

        <section className="mt-8 bg-[#dfeae0] p-4 sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.7fr] lg:items-center">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-[#edf5ef] ring-1 ring-[#d5e5d6]">
                <HospitalIcon />
              </div>
              <div>
                <h2 className="text-[clamp(2.2rem,3vw,4rem)] font-medium leading-[0.96] tracking-tight text-[#1b1b1b]">
                  <span className="text-[#1a7d4f]">Admission</span>
                  <br />
                  Procedure
                  <br />
                  &amp; Fees
                </h2>
              </div>
            </div>

            <p className="text-[14px] leading-8 text-[#4f6258] lg:pr-10">
              Uttara Adhunik Medical College (UAMC) is a teaching and training hospital of the college. It is a 500-bedded,
              multidisciplinary tertiary care facility located in Uttara, Dhaka. It is a modern tertiary care facility with
              advanced clinical, diagnostic, and educational services that support the training of future clinicians and health
              professionals.
            </p>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-sm bg-[#edf6ef] ring-1 ring-[#dfe7de]">
            <div className="grid min-h-[290px] gap-0 lg:grid-cols-[1.55fr_0.45fr]">
              <div className="relative overflow-hidden bg-[#e7f0e9]">
                <Image
                  src="/Admission Rules/camp2.jpg"
                  alt="Admission illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-center bg-[#f0d84d] px-5 py-6">
                <div className="w-full max-w-[220px] text-center text-[clamp(2rem,2.5vw,3.3rem)] font-medium tracking-tight text-[#111]">
                  Admission
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white px-4 py-8 sm:px-6 lg:px-8">
          <div className="pl-5">
            <h2 className="border-l-[4px] border-[#1a7d4f] pl-4 text-[clamp(2rem,2.2vw,3rem)] font-medium leading-tight text-[#1b1b1b]">
              For BD/National Student
            </h2>
          </div>

          <div className="mt-8 space-y-7">
            <div>
              <h3 className="text-[18px] font-semibold text-[#1a7d4f]">Eligibility</h3>
              <p className="mt-3 max-w-4xl text-[15px] leading-8 text-[#485b52]">
                Applicants must meet the criteria set by the Directorate General of Medical Education (DGME) under the Ministry of Health and Family Welfare, Government of Bangladesh.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[#1a7d4f]">Selection &amp; Admission</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-[15px] leading-8 text-[#485b52]">
                {nationalStudentBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[#1a7d4f]">Student Quotas</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-[15px] leading-8 text-[#485b52]">
                {nationalQuotas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <ContentNote>
              Selected students must complete admission within the declared deadline. Failure to do so will result in cancellation, and seats will be filled from the waiting list.
            </ContentNote>

            <div className="pt-4">
              <h3 className="text-[18px] font-semibold text-[#1a7d4f]">Fee Structure (Session 2024-2025)</h3>
              <div className="mt-4 overflow-x-auto">
                <div className="min-w-[520px]">
                  <FeeTable currency="BDT" rows={nationalFees} total="21,24,000/-" />
                </div>
              </div>
            </div>

            <ContentNote>
              Monthly Tuition Fee: 10,000 BDT until course completion. VAT applicable as per government rules.
            </ContentNote>
          </div>
        </section>

        <div className="my-10 h-px bg-[#cad8ce]" />

        <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
          <div className="pl-5">
            <h2 className="border-l-[4px] border-[#1a7d4f] pl-4 text-[clamp(2rem,2.2vw,3rem)] font-medium leading-tight text-[#1b1b1b]">
              For Foreign Students
            </h2>
          </div>

          <div className="mt-8 space-y-7">
            <div>
              <h3 className="text-[18px] font-semibold text-[#1a7d4f]">Eligibility</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-[15px] leading-8 text-[#485b52]">
                {foreignStudentBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] font-semibold text-[#1a7d4f]">Required Documents</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-[15px] leading-8 text-[#485b52]">
                {foreignDocuments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <h3 className="text-[18px] font-semibold text-[#1a7d4f]">Fee Structure (Session 2024-2025)</h3>
              <div className="mt-4 overflow-x-auto">
                <div className="min-w-[520px]">
                  <FeeTable currency="USD" rows={foreignFees} total="$40,000" />
                </div>
              </div>
            </div>

            <ContentNote>
              VAT &amp; university fees are applicable as per government and university regulations.
            </ContentNote>
          </div>
        </section>

        <section className="mt-12 bg-white px-4 py-8 sm:px-6 lg:px-8">
          <div className="pl-5">
            <h2 className="border-l-[4px] border-[#1a7d4f] pl-4 text-[clamp(2rem,2.2vw,3rem)] font-medium leading-tight text-[#1b1b1b]">
              Contact for Admission
            </h2>
          </div>

          <div className="mt-6 max-w-2xl text-[15px] leading-8 text-[#485b52]">
            <p className="font-semibold text-[#1a1a1a]">Uttara Adhunik Medical College</p>
            <p>House # 34, Road # 4, Sector # 9,</p>
            <p>Sonargaon Janapath, Uttara Model Town,</p>
            <p>Dhaka-1230, Bangladesh</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
